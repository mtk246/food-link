import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function FoodBankDetails() {
    const router = useRouter();
    const { id } = router.query;
    const [data, setData] = useState({});

    useEffect(() => {
        console.log(id);
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
            console.log(responseData);
            setData(responseData.data);

            // const obj = {
            //     "location": {
            //         "location_id": "12425739",
            //         "name": "Piccola Cucina Estiatorio",
            //         "latitude": "40.724575",
            //         "longitude": "-74.002975",
            //         "num_reviews": "697",
            //         "timezone": "America/New_York",
            //         "location_string": "New York City, New York",
            //         "awards": [],
            //         "doubleclick_zone": "na.us.ny.new_york_city",
            //         "preferred_map_engine": "default",
            //         "raw_ranking": "4.81959342956543",
            //         "ranking_geo": "New York City",
            //         "ranking_geo_id": "60763",
            //         "ranking_position": "3",
            //         "ranking_denominator": "8205",
            //         "ranking_category": "restaurant",
            //         "ranking": "#3 of 14,183 places to eat in New York City",
            //         "distance": null,
            //         "distance_string": null,
            //         "bearing": null,
            //         "rating": "5.0",
            //         "is_closed": false,
            //         "open_now_text": "Closes in 14 min",
            //         "is_long_closed": false,
            //         "price_level": "$$ - $$$",
            //         "price": "$15 - $35",
            //         "neighborhood_info": [
            //             {
            //                 "location_id": "15565677",
            //                 "name": "Downtown Manhattan (Downtown)"
            //             },
            //             {
            //                 "location_id": "7102353",
            //                 "name": "SoHo"
            //             }
            //         ],
            //         "description": "",
            //         "web_url": "https://www.tripadvisor.com/Restaurant_Review-g60763-d12425739-Reviews-Piccola_Cucina_Estiatorio-New_York_City_New_York.html",
            //         "write_review": "https://www.tripadvisor.com/UserReview-g60763-d12425739-Piccola_Cucina_Estiatorio-New_York_City_New_York.html",
            //         "ancestors": [
            //             {
            //                 "subcategory": [
            //                     {
            //                         "key": "city",
            //                         "name": "City"
            //                     }
            //                 ],
            //                 "name": "New York City",
            //                 "abbrv": null,
            //                 "location_id": "60763"
            //             },
            //             {
            //                 "subcategory": [
            //                     {
            //                         "key": "state",
            //                         "name": "State"
            //                     }
            //                 ],
            //                 "name": "New York",
            //                 "abbrv": "NY",
            //                 "location_id": "28953"
            //             },
            //             {
            //                 "subcategory": [
            //                     {
            //                         "key": "country",
            //                         "name": "Country"
            //                     }
            //                 ],
            //                 "name": "United States",
            //                 "abbrv": null,
            //                 "location_id": "191"
            //             }
            //         ],
            //         "category": {
            //             "key": "restaurant",
            //             "name": "Restaurant"
            //         },
            //         "subcategory": [
            //             {
            //                 "key": "sit_down",
            //                 "name": "Sit down"
            //             }
            //         ],
            //         "parent_display_name": "New York City",
            //         "is_jfy_enabled": false,
            //         "nearest_metro_station": [],
            //         "phone": "+1 646-781-9183",
            //         "website": "http://www.piccolacucinagroup.com/piccola-cucina-estiatorio-sohy-nyc/",
            //         "email": "info@piccolacucinagroup.com",
            //         "address_obj": {
            //             "street1": "75 Thompson St.",
            //             "street2": null,
            //             "city": "New York City",
            //             "state": "NY",
            //             "country": "United States",
            //             "postalcode": "10012"
            //         },
            //         "address": "75 Thompson St., New York City, NY 10012",
            //         "hours": {
            //             "week_ranges": [
            //                 [
            //                     {
            //                         "open_time": 690,
            //                         "close_time": 1380
            //                     }
            //                 ],
            //                 [
            //                     {
            //                         "open_time": 690,
            //                         "close_time": 1380
            //                     }
            //                 ],
            //                 [
            //                     {
            //                         "open_time": 690,
            //                         "close_time": 1380
            //                     }
            //                 ],
            //                 [
            //                     {
            //                         "open_time": 690,
            //                         "close_time": 1380
            //                     }
            //                 ],
            //                 [
            //                     {
            //                         "open_time": 690,
            //                         "close_time": 1380
            //                     }
            //                 ],
            //                 [
            //                     {
            //                         "open_time": 690,
            //                         "close_time": 1440
            //                     }
            //                 ],
            //                 [
            //                     {
            //                         "open_time": 690,
            //                         "close_time": 1440
            //                     }
            //                 ]
            //             ],
            //             "timezone": "America/New_York"
            //         },
            //         "is_candidate_for_contact_info_suppression": false,
            //         "cuisine": [
            //             {
            //                 "key": "4617",
            //                 "name": "Italian"
            //             },
            //             {
            //                 "key": "20069",
            //                 "name": "Sicilian"
            //             },
            //             {
            //                 "key": "10665",
            //                 "name": "Vegetarian Friendly"
            //             },
            //             {
            //                 "key": "10697",
            //                 "name": "Vegan Options"
            //             },
            //             {
            //                 "key": "10992",
            //                 "name": "Gluten Free Options"
            //             }
            //         ],
            //         "dietary_restrictions": [
            //             {
            //                 "key": "10665",
            //                 "name": "Vegetarian Friendly"
            //             },
            //             {
            //                 "key": "10697",
            //                 "name": "Vegan Options"
            //             },
            //             {
            //                 "key": "10992",
            //                 "name": "Gluten Free Options"
            //             }
            //         ],
            //         "photo": {
            //             "id": "379583843",
            //             "caption": "Piccola Cucina Estiatorio 1",
            //             "published_date": "2019-03-01T14:25:15-0500",
            //             "helpful_votes": "17",
            //             "is_blessed": true,
            //             "uploaded_date": "2019-03-01T14:25:15-0500",
            //             "images": {
            //                 "small": {
            //                     "url": "https://media-cdn.tripadvisor.com/media/photo-l/16/9f/fd/63/piccola-cucina-estiatorio.jpg",
            //                     "width": "150",
            //                     "height": "150"
            //                 },
            //                 "thumbnail": {
            //                     "url": "https://media-cdn.tripadvisor.com/media/photo-t/16/9f/fd/63/piccola-cucina-estiatorio.jpg",
            //                     "width": "50",
            //                     "height": "50"
            //                 },
            //                 "original": {
            //                     "url": "https://media-cdn.tripadvisor.com/media/photo-o/16/9f/fd/63/piccola-cucina-estiatorio.jpg",
            //                     "width": "2000",
            //                     "height": "1334"
            //                 },
            //                 "large": {
            //                     "url": "https://media-cdn.tripadvisor.com/media/photo-s/16/9f/fd/63/piccola-cucina-estiatorio.jpg",
            //                     "width": "550",
            //                     "height": "367"
            //                 },
            //                 "medium": {
            //                     "url": "https://media-cdn.tripadvisor.com/media/photo-f/16/9f/fd/63/piccola-cucina-estiatorio.jpg",
            //                     "width": "250",
            //                     "height": "167"
            //                 }
            //             }
            //         },
            //         "tags": null,
            //         "display_hours": [
            //             {
            //                 "days": "Sun - Thu",
            //                 "times": [
            //                     "11:30 AM - 11:00 PM"
            //                 ]
            //             },
            //             {
            //                 "days": "Fri - Sat",
            //                 "times": [
            //                     "11:30 AM - 12:00 AM"
            //                 ]
            //             }
            //         ]
            //     },
            //     "hours": {
            //         "openStatus": "CLOSING",
            //         "openStatusText": "Closes in 14 min",
            //         "hoursTodayText": "Hours Today: 11:30 AM - 12:00 AM",
            //         "currentHoursText": "11:30 AM - 12:00 AM",
            //         "allOpenHours": [
            //             {
            //                 "days": "Sun - Thu",
            //                 "times": [
            //                     "11:30 AM - 11:00 PM"
            //                 ]
            //             },
            //             {
            //                 "days": "Fri - Sat",
            //                 "times": [
            //                     "11:30 AM - 12:00 AM"
            //                 ]
            //             }
            //         ],
            //         "addHoursLink": {
            //             "url": "/UpdateListing-d12425739#Hours-only",
            //             "text": "+ Add hours"
            //         }
            //     },
            //     "ownerStatus": {
            //         "isVerified": true,
            //         "isMemberOwner": false,
            //         "isUserInCountry": true
            //     },
            //     "ownerLikelihood": {
            //         "isOwner": false,
            //         "likelihood": "LOW"
            //     },
            //     "overview": {
            //         "name": "Piccola Cucina Estiatorio, New York",
            //         "detailId": 12425739,
            //         "geo": "New York City, New York",
            //         "geoId": 60763,
            //         "isOwner": false,
            //         "links": {
            //             "warUrl": "/UserReviewEdit-g60763-d12425739-Piccola_Cucina_Estiatorio-New_York_City_New_York.html",
            //             "addPhotoUrl": "/PostPhotos-g60763-d12425739",
            //             "ownerAddPhotoUrl": "/ManagePhotos-d12425739-Piccola_Cucina_Estiatorio"
            //         },
            //         "location": {
            //             "latitude": 40.724575,
            //             "longitude": -74.002975,
            //             "directionsUrl": "ZDdEX2h0dHBzOi8vbWFwcy5nb29nbGUuY29tL21hcHM/c2FkZHI9JmRhZGRyPTc1K1Rob21wc29uK1N0LiUyQytOZXcrWW9yaytDaXR5JTJDK05ZKzEwMDEyQDQwLjcyNDU3NSwtNzQuMDAyOTc1X2s1ag==",
            //             "landmark": "<b>0.3 miles</b> from SoHo",
            //             "neighborhood": "Downtown Manhattan (Downtown)"
            //         },
            //         "contact": {
            //             "address": "75 Thompson St., New York City, NY 10012",
            //             "email": "info@piccolacucinagroup.com",
            //             "phone": "+1 646-781-9183",
            //             "website": "Sk5KX2h0dHA6Ly93d3cucGljY29sYWN1Y2luYWdyb3VwLmNvbS9waWNjb2xhLWN1Y2luYS1lc3RpYXRvcmlvLXNvaHktbnljL19IT2I="
            //         },
            //         "rating": {
            //             "primaryRanking": {
            //                 "rank": 1,
            //                 "totalCount": 6760,
            //                 "category": "Restaurants",
            //                 "geo": "New York City",
            //                 "url": "/Restaurants-g60763-New_York_City_New_York.html"
            //             },
            //             "secondaryRanking": null,
            //             "primaryRating": 5,
            //             "reviewCount": 697,
            //             "ratingQuestions": [
            //                 {
            //                     "name": "Food",
            //                     "rating": 50,
            //                     "icon": "restaurants"
            //                 },
            //                 {
            //                     "name": "Service",
            //                     "rating": 50,
            //                     "icon": "bell"
            //                 },
            //                 {
            //                     "name": "Value",
            //                     "rating": 45,
            //                     "icon": "wallet-fill"
            //                 },
            //                 {
            //                     "name": "Atmosphere",
            //                     "rating": 50,
            //                     "icon": "ambience"
            //                 }
            //             ]
            //         },
            //         "award": {
            //             "icon": "travelers-choice-badge",
            //             "awardText": "Travelers' Choice",
            //             "yearsText": "2023",
            //             "isTravelersChoice": false
            //         },
            //         "tags": {
            //             "reviewSnippetSections": [
            //                 {
            //                     "heading": "Local cuisine, Italian, Sicilian, Vegetarian Friendly, Vegan Options",
            //                     "reviewSnippets": [
            //                         {
            //                             "text": "&#x201c;A cute, cosy atmosphere, excellent food - and definitely get the <b>lobster</b> croq...&#x201d;",
            //                             "reviewLink": "/ShowUserReviews-g60763-d12425739-r932900706-Piccola_Cucina_Estiatorio-New_York_City_New_York.html"
            //                         },
            //                         {
            //                             "text": "&#x201c;The fried <b>calamari</b> was so crispy and fresh!&#x201d;",
            //                             "reviewLink": "/ShowUserReviews-g60763-d12425739-r929326442-Piccola_Cucina_Estiatorio-New_York_City_New_York.html"
            //                         },
            //                         {
            //                             "text": "&#x201c;Highly recommend the <b>lobster</b> green pesto pasta or the truffle butter pasta, y...&#x201d;",
            //                             "reviewLink": "/ShowUserReviews-g60763-d12425739-r931646279-Piccola_Cucina_Estiatorio-New_York_City_New_York.html"
            //                         },
            //                         {
            //                             "text": "&#x201c;We got the <b>calamari</b>, the croquettes, tagliatelle, and cavatelli.&#x201d;",
            //                             "reviewLink": "/ShowUserReviews-g60763-d12425739-r928877185-Piccola_Cucina_Estiatorio-New_York_City_New_York.html"
            //                         }
            //                     ]
            //                 }
            //             ]
            //         },
            //         "detailCard": {
            //             "tagTexts": {
            //                 "priceRange": {
            //                     "tagCategoryId": 240,
            //                     "tags": [
            //                         {
            //                             "tagId": 10955,
            //                             "tagValue": "Mid-range"
            //                         }
            //                     ]
            //                 },
            //                 "cuisines": {
            //                     "tagCategoryId": 231,
            //                     "tags": [
            //                         {
            //                             "tagId": 4617,
            //                             "tagValue": "Italian"
            //                         },
            //                         {
            //                             "tagId": 20069,
            //                             "tagValue": "Sicilian"
            //                         }
            //                     ]
            //                 },
            //                 "dietaryRestrictions": {
            //                     "tagCategoryId": 285,
            //                     "tags": [
            //                         {
            //                             "tagId": 10665,
            //                             "tagValue": "Vegetarian Friendly"
            //                         },
            //                         {
            //                             "tagId": 10697,
            //                             "tagValue": "Vegan Options"
            //                         },
            //                         {
            //                             "tagId": 10992,
            //                             "tagValue": "Gluten Free Options"
            //                         }
            //                     ]
            //                 },
            //                 "meals": {
            //                     "tagCategoryId": 233,
            //                     "tags": [
            //                         {
            //                             "tagId": 10598,
            //                             "tagValue": "Lunch"
            //                         },
            //                         {
            //                             "tagId": 10599,
            //                             "tagValue": "Dinner"
            //                         }
            //                     ]
            //                 },
            //                 "features": {
            //                     "tagCategoryId": 234,
            //                     "tags": [
            //                         {
            //                             "tagId": 10600,
            //                             "tagValue": "Delivery"
            //                         },
            //                         {
            //                             "tagId": 10601,
            //                             "tagValue": "Takeout"
            //                         },
            //                         {
            //                             "tagId": 10602,
            //                             "tagValue": "Reservations"
            //                         },
            //                         {
            //                             "tagId": 10852,
            //                             "tagValue": "Seating"
            //                         },
            //                         {
            //                             "tagId": 10861,
            //                             "tagValue": "Wheelchair Accessible"
            //                         },
            //                         {
            //                             "tagId": 10862,
            //                             "tagValue": "Serves Alcohol"
            //                         },
            //                         {
            //                             "tagId": 10870,
            //                             "tagValue": "Free Wifi"
            //                         },
            //                         {
            //                             "tagId": 11780,
            //                             "tagValue": "Accepts Credit Cards"
            //                         },
            //                         {
            //                             "tagId": 16547,
            //                             "tagValue": "Table Service"
            //                         }
            //                     ]
            //                 },
            //                 "establishmentType": {
            //                     "tagCategoryId": 230,
            //                     "tags": [
            //                         {
            //                             "tagId": 10591,
            //                             "tagValue": "Restaurants"
            //                         }
            //                     ]
            //                 }
            //             },
            //             "numericalPrice": "$15 - $35",
            //             "improveListingUrl": "/ImproveListing-d12425739.html",
            //             "updateListingUrl": "/ManageListing-g60763-d12425739-Piccola_Cucina_Estiatorio-New_York_City_New_York.html",
            //             "restaurantOwner": {
            //                 "text": null,
            //                 "tooltip": null,
            //                 "trackingItemName": ""
            //             }
            //         }
            //     }
            // }
            // console.log(obj);
            // setData(obj);
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
                                        <div>
                                            <div className='py-3'>
                                                <h5>No Cancellation</h5>
                                                <p className='text-secondary'>No cancellation is allowed</p>
                                            </div>
                                            <div className='py-3'>
                                                <h5>Mobile Ticketing</h5>
                                                <p className='text-secondary'>Use your phone or print your voucher</p>
                                            </div>
                                            <div className='py-3'>
                                                <h5>Participation</h5>
                                                <p className='text-secondary'>Everyone is welcomed!</p>
                                            </div>
                                        </div>
                                        <div>
                                            <div className='py-3'>
                                                <h5>Health precautions</h5>
                                                <p className='text-secondary'>Special health and safety measures apply.</p>
                                            </div>
                                            <div className='py-3'>
                                                <h5>Pick Up Time</h5>
                                                <p className='text-secondary'>Check availability to see starting times.</p>
                                            </div>
                                            <div className='py-3'>
                                                <h5>Pay in restaurant</h5>
                                                <p className='text-secondary'>Pay at the restaurant, with options for cash or card.</p>
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
                                                    <p>{item.days}: <br/><span className='text-success'>{item.times}</span></p>
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