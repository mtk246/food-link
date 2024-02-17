import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function EBTDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            let response = "";
            if (id !== "") {
                response = await fetch(`https://data.cityofnewyork.us/resource/fi97-k4k6.json?marketname=${id}&$limit=5000&$$app_token=${process.env.OPEN_DATA_TOKEN}`);
            }

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const responseData = await response.json();
            console.log(responseData);
            setData(responseData);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className='container'>
            <h5 className='text-muted'>EBT Details</h5>
            {
                data.length > 0 && (
                    data.map((item, index) => (
                        <div key={index}>
                            <h2>{item.marketname}</h2>
                            <div className='row'>
                                <div className="col-12 col-md-8">
                                    <iframe
                                        src={`https://maps.google.com/maps?q=${item.latitude},${item.longitude}&z=15&output=embed`}
                                        frameBorder="0"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        aria-hidden="false"
                                        width={"100%"}
                                        height={"400"}
                                        tabIndex="0"
                                        className="embed-responsive-item"
                                    />
                                </div>
                                <div className='col-12 col-md-4'>
                                    <p>{item.streetaddress}</p>
                                    <p>{item.daysoperation} | {item.hoursoperations}</p>
                                    <p className='text-muted'>Accept EBT: {item.accepts_ebt}</p>
                                </div>
                            </div>
                        </div>
                    ))
                )
            }
        </div>
    );
}
