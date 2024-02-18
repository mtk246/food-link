import React, { useState, useEffect } from 'react';
import Link from 'next/link';

export default function EBT() {
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
            let response = "";
            if (borough !== "") {
                response = await fetch(`https://data.cityofnewyork.us/resource/if26-z6xq.json?borough=${borough}&$limit=5000&$$app_token=${process.env.OPEN_DATA_TOKEN}`);
            } else {
                response = await fetch(`https://data.cityofnewyork.us/resource/if26-z6xq.json?$limit=5000&$$app_token=${process.env.OPEN_DATA_TOKEN}`);
            }

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            // console.log(responseData);
            setData(responseData);
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
                            <div className="card p-2 shadow m-2">
                                <h5>{item.ntaname}</h5>
                                <p>{item.open_months} | {item.operation_day_hours}</p>
                                <span className='text-muted'>{item.food_scrap_drop_off_site}</span>
                                <Link href={`/food_bank/${item.object_id}`}><button className="btn btn-outline-primary mt-2">View Details</button></Link>
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
