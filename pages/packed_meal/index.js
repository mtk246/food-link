import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function PackedMeals() {
    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [borough, setBorough] = useState("");
    const itemsPerPage = 10;

    useEffect(() => {
        fetchData();
    }, [borough]);

    const handleBoroughChange = (selectedBorough) => {
        if (borough !== selectedBorough) {
            setBorough(selectedBorough);
        }
    }

    const fetchData = async () => {
        try {
            let locationId = "";
            
            if (borough === "Manhattan") {
                locationId = "38877";
            } else if (borough === "Brooklyn") {
                locationId = "60827";
            } else if (borough === "Bronx") {
                locationId = "47369";
            } else if (borough === "Queens") {
                locationId = "616325";
            } else if (borough === "Staten Island") {
                locationId = "48682";
            } else {
                locationId = "60763";
            }

            const url = process.env.TRIP_ADVISOR_API_URL + '?locationId=' + locationId;
            const options = {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                    'X-RapidAPI-Key': process.env.GPT_X_RAPID_API_KEY,
                    'X-RapidAPI-Host': process.env.TRIP_ADVISOR_API_HOST
                }
            };

            const response = await fetch(url, options);
            const responseData = await response.json();
            // console.log(responseData);
            setData(responseData.data.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="d-flex justify-content-center align-items-center text-center">
                <div>
                    <button className="btn btn-outline-secondary m-2" onClick={() => handleBoroughChange('')}>All</button>
                    <button className="btn btn-outline-secondary m-2" onClick={() => handleBoroughChange('Manhattan')}>Manhattan</button>
                    <button className="btn btn-outline-secondary m-2" onClick={() => handleBoroughChange('Brooklyn')}>Brooklyn</button>
                    <button className="btn btn-outline-secondary m-2" onClick={() => handleBoroughChange('Bronx')}>Bronx</button>
                    <button className="btn btn-outline-secondary m-2" onClick={() => handleBoroughChange('Queens')}>Queens</button>
                    <button className="btn btn-outline-secondary m-2" onClick={() => handleBoroughChange('Staten Island')}>Staten Island</button>
                </div>
                {/* <div>
                    <select className="form-select">
                        <option value="0" selected>List View</option>
                        <option value="1">Map View</option>
                    </select>
                </div> */}
            </div>
            <div className="container">
                <div className="row">
                    {currentItems.map((item, index) => (
                        <div key={index} className="col col-md-3 col-lg-4">
                            <div className="card p-2 shadow m-2 text-center">
                                <div className="text-center">
                                    {
                                        item.currentOpenStatusCategory === "OPEN"
                                    }
                                    <Image src={item.squareImgUrl} alt={item.name} width={200} height={200} className='img-fluid rounded' />
                                </div>
                                <div className='my-3'>
                                    <h5>{item.name}</h5>
                                    <p>
                                        {
                                            item.currentOpenStatusCategory === "OPEN"
                                                ? <span className="text-success">{item.currentOpenStatusText}</span>
                                                : <span className="text-danger">{item.currentOpenStatusText}</span>
                                        }
                                    </p>
                                </div>
                                <Link href={`/packed_meal/${item.restaurantsId}`}>
                                    <button className="btn btn-outline-primary my-2">
                                        View Details
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="pagination-container overflow-auto">
                    <ul className="pagination p-2">
                        {Array.from({ length: Math.ceil(data.length / itemsPerPage) }).map((_, index) => (
                            <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                                <button className="page-link " onClick={() => paginate(index + 1)}>{index + 1}</button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
