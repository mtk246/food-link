import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSuitcaseMedical, faXmark, faSitemap,faMobile, faClock, faWallet} from "@fortawesome/free-solid-svg-icons";

export default function FoodBankDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState({});

    useEffect(() => {
        // console.log(id);
        fetchData();
    }, [id]);

    const fetchData = async () => {
        try {
            const url = process.env.TRIP_ADVISOR_API_GET_RESTAURANT_DETAILS_URL + '?restaurantsId=' + id + '&currencyCode=USD';
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
            setData(responseData.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (
        <div className='container'>
            <h5 className='text-muted'>Restaurant Details</h5>
            {
                Object.keys(data).length > 0
                    && (
                        <div key={data.overview.detailId}>
                            <h2 className='display-4 fw-bold my-4'>{data.overview.name}</h2>
                            <div className='row'>
                                <div className="col-12 col-md-6">
                                    <Image src={data.location.photo.images.original.url} alt={data.location.photo.caption} width={800} height={400} className='img-fluid rounded shadow' />
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
                                        <small className='text-muted py-3'>Price Range ({data.location.price_level})</small>
                                        <h1 className='display-5 fw-bold'>{data.location.price}</h1>
                                    </div>
                                    <div className='my-2 border rounded shadow p-4'>
                                        <small className='text-muted py-3'>Opening Times</small>
                                        {
                                            data.hours.allOpenHours.length > 0 && (
                                                data.hours.allOpenHours.map((item) => (
                                                    <p key={item.days}>{item.days}: <br/><span className='text-success'>{item.times}</span></p>
                                                ))
                                            )
                                        }
                                        <small className='text-muted py-3'>Status</small>
                                        <p className='text-info'>{data.hours.openStatusText}</p>
                                    </div>
                                    <div className='my-2 border rounded shadow p-4'>
                                        <small className='text-muted py-3'>Contact Info</small>
                                        <p>{data.overview.contact.address}</p>
                                        <p>{data.overview.contact.email}</p>
                                        <p>{data.overview.contact.phone}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="my-5">
                                <iframe
                                    src={`https://maps.google.com/maps?q=${data.location.latitude},${data.location.longitude}&z=15&output=embed`}
                                    frameBorder="0"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    aria-hidden="false"
                                    width={"100%"}
                                    height={"400"}
                                    tabIndex="0"
                                    className="embed-responsive-data"
                                />
                            </div>
                        </div>
                    )
            }
        </div>
    );
}