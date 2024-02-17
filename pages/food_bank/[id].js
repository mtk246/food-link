import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function FoodBankDetails() {
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
                response = await fetch(`https://data.cityofnewyork.us/resource/if26-z6xq.json?object_id=${id}&$limit=5000&$$app_token=${process.env.OPEN_DATA_TOKEN}`);
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
            <h5 className='text-muted'>Food Bank Details</h5>
            {
                data.map((item) => (
                    <div key={item.borocd}>
                        <h2>{item.ntaname}</h2>
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
                                <p>{item.food_scrap_drop_off_site}</p>
                                <p>{item.open_months} | {item.operation_day_hours}</p>
                                <p className='text-danger'>* {item.notes} *</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
