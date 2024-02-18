import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcaseMedical, faXmark, faSitemap,faMobile, faClock, faWallet} from "@fortawesome/free-solid-svg-icons";

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
            // console.log(responseData);
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
                            <div className="col-12 col-md-6">
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
                                <div className='my-5 d-flex align-items-center justify-content-around'>
                                    <div className='row'>
                                        <div className='col col-md-6 d-flex align-items-center py-3'>
                                            <div className='text-success display-5 p-3'>
                                                <FontAwesomeIcon icon={faXmark} />
                                            </div>
                                            <div>
                                                <h5>No Cancellation</h5>
                                                <p className='text-secondary'>No cancellation is allowed</p>
                                            </div>
                                        </div>
                                        <div className='col col-md-6 d-flex align-items-center py-3'>
                                            <div className='text-success display-5 p-3'>
                                                <FontAwesomeIcon icon={faSuitcaseMedical} />
                                            </div>
                                            <div>
                                                <h5>Health precautions</h5>
                                                <p className='text-secondary'>Special health and safety measures apply.</p>
                                            </div>
                                        </div>
                                        <div className='col col-md-6 d-flex align-items-center py-3'>
                                            <div className='text-success display-5 p-3'>
                                                <FontAwesomeIcon icon={faMobile} />
                                            </div>
                                            <div>
                                                <h5>Mobile Ticketing</h5>
                                                <p className='text-secondary'>Use your phone or print your voucher</p>
                                            </div>
                                        </div>
                                        <div className='col col-md-6 d-flex align-items-center py-3'>
                                            <div className='text-success display-5 p-3'>
                                                <FontAwesomeIcon icon={faClock} />
                                            </div>
                                            <div>
                                                <h5>Pick Up Time</h5>
                                                <p className='text-secondary'>Check availability to see starting times.</p>
                                            </div>
                                        </div>
                                        <div className='col col-md-6 d-flex align-items-center py-3'>
                                            <div className='text-success display-5 p-3'>
                                                <FontAwesomeIcon icon={faSitemap} />
                                            </div>
                                            <div>
                                                <h5>Participation</h5>
                                                <p className='text-secondary'>Everyone is welcomed!</p>
                                            </div>
                                        </div>
                                        <div className='col col-md-6 d-flex align-items-center py-3'>
                                            <div className='text-success display-5 p-3'>
                                                <FontAwesomeIcon icon={faWallet} />
                                            </div>
                                            <div>
                                                <h5>Pay in restaurant</h5>
                                                <p className='text-secondary'>Pay at the restaurant, with options for cash or card.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='my-2 border rounded shadow p-4'>
                                    <small className='text-muted py-3'>Opening Times</small>
                                    <p>{item.open_months}: <br/><span className='text-success'>{item.operation_day_hours}</span></p>
                                </div>
                                <div className='my-2 border rounded shadow p-4'>
                                    <small className='text-muted py-3'>Contact Info</small>
                                    <p>{item.food_scrap_drop_off_site}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}
