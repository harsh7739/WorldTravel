import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Hotels = ({ id, name, rating, reviews, telephone, preferences, guest_rating, smoking_allowed, price, imageOne }) => {
    return (
        <DIV className='container-fluid my-3 p-0' >
            <img width={"100%"} src={imageOne} alt={name} />
            <div>
                <h5 style={{ fontWeight : 'bold', borderBottom: "2px solid #567EB9", width : '70%', margin : 'auto' }} className='name my-3 pb-3'>{name}</h5>
                <p style={{ fontWeight: "bold" }} >{rating} - {guest_rating} <span style={{ fontWeight: "lighter" }} >({reviews} reviews)</span></p>
                <div className='d-flex gap-2 align-items-center justify-content-center' style={{ margin: 'auto' }} >
                    <p>
                        {
                            preferences === "Pet-Friendly" ? <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#000000" d="m14 8l3 3v10h-2v-6H8l-2 3v3H4v-6l1-1v-3L2 8l1-1l2 2h2v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9l1-1m5-3V3l-4 4l3 3l1-1l1 1l2-2l-3-3m-7.5 4.5l-7-7c-.27-.28-.71-.28-1 0c-.28.27-.28.71 0 1l7 7c.27.28.71.28 1 0c.28-.27.28-.71 0-1Z" />
                            </svg> : preferences === "Pet-Free" ? <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#000000" d="m18 10l-3-3l4-4v2l3 3l-2 2l-1-1l-1 1m-1 1l-3-3l-1 1h-.8l4.8 4.8V11M2.39 1.73L1.11 3l6 6H5L3 7L2 8l3 3v3l-1 1v6h2v-3l2-3h5.11L15 16.89V21h2v-2.11l3.84 3.84l1.27-1.27L2.39 1.73Z" />
                            </svg> : <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#000000" d="M12 6.5a2 2 0 1 0-2-2a2 2 0 0 0 2 2Zm7.5 14h-1v-5a1 1 0 0 0-1-1h-5v-2h5a1 1 0 0 0 0-2h-5v-2a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2Zm-6.8-1.6a4 4 0 0 1-7.2-2.4a4 4 0 0 1 2.4-3.66A1 1 0 1 0 7.1 11a6 6 0 1 0 7.2 9.1a1 1 0 0 0-1.6-1.2Z" />
                            </svg>
                        }
                    </p>
                    <p>{preferences}</p>
                </div>
                <div className='price w-50 m-auto' >
                    <p className='d-flex align-items-center justify-content-between my-2' >
                        <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#028000" d="M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z" />
                        </svg> Pay at the property
                    </p>
                    <p className='d-flex justify-content-between' >
                        {
                            smoking_allowed ?
                                <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#028000" d="M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z" />
                                </svg> :
                                <svg width="20" height="20" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#B30018" d="M62 10.6L53.4 2L32 23.4L10.6 2L2 10.6L23.4 32L2 53.4l8.6 8.6L32 40.6L53.4 62l8.6-8.6L40.6 32z" />
                                </svg>
                        }
                        {
                            smoking_allowed ? <p style={{ color : "#028000" }} >Free Cancellation</p> : <p style={{ color : "#B30018" }}>Free Cancellation</p>
                        }
                    </p>
                        <Link style={{color : "white", fontWeight : 'bold'}} to={`/hotel/${id}`} >
                            <button>
                            ₹ {price} /night
                            </button>
                        </Link>
                </div>
            </div>
            {/* <div className='row'>
                <div className='col-lg-4' >
                    <img width={"100%"} src={imageOne} alt="Hotel" />
                </div>
                <div style={{ textAlign: 'left' }} className='col-lg-5 d-flex flex-column justify-content-around' >
                    <h5 className='name' >{name}</h5>
                    <p style={{ fontWeight: "bold" }} >{rating} - {guest_rating} <span style={{ fontWeight: "lighter" }} >({reviews} reviews)</span></p>
                    <div className='d-flex align-items-center gap-2' >
                            <p className='mb-0' >{preferences}</p>
                        {
                            preferences === "Pet-Friendly" ? <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#000000" d="m14 8l3 3v10h-2v-6H8l-2 3v3H4v-6l1-1v-3L2 8l1-1l2 2h2v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9l1-1m5-3V3l-4 4l3 3l1-1l1 1l2-2l-3-3m-7.5 4.5l-7-7c-.27-.28-.71-.28-1 0c-.28.27-.28.71 0 1l7 7c.27.28.71.28 1 0c.28-.27.28-.71 0-1Z" />
                            </svg> : preferences === "Pet-Free" ? <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#000000" d="m18 10l-3-3l4-4v2l3 3l-2 2l-1-1l-1 1m-1 1l-3-3l-1 1h-.8l4.8 4.8V11M2.39 1.73L1.11 3l6 6H5L3 7L2 8l3 3v3l-1 1v6h2v-3l2-3h5.11L15 16.89V21h2v-2.11l3.84 3.84l1.27-1.27L2.39 1.73Z" />
                            </svg> : <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#000000" d="M12 6.5a2 2 0 1 0-2-2a2 2 0 0 0 2 2Zm7.5 14h-1v-5a1 1 0 0 0-1-1h-5v-2h5a1 1 0 0 0 0-2h-5v-2a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2Zm-6.8-1.6a4 4 0 0 1-7.2-2.4a4 4 0 0 1 2.4-3.66A1 1 0 1 0 7.1 11a6 6 0 1 0 7.2 9.1a1 1 0 0 0-1.6-1.2Z" />
                            </svg>
                        }
                    </div>
                </div>
                <div className='col-lg-3 price ' >
                    <p className='d-flex align-items-center justify-content-between my-3' >
                        <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#028000" d="M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z" />
                        </svg> Pay at the property
                    </p>
                    <p className='d-flex justify-content-between' >
                        {
                            smoking_allowed ?
                                <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#028000" d="M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z" />
                                </svg> :
                                <svg width="20" height="20" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#B30018" d="M62 10.6L53.4 2L32 23.4L10.6 2L2 10.6L23.4 32L2 53.4l8.6 8.6L32 40.6L53.4 62l8.6-8.6L40.6 32z" />
                                </svg>
                        }
                        {
                            smoking_allowed ? <p style={{ color : "#028000" }} >Free Cancellation</p> : <p style={{ color : "#B30018" }}>Free Cancellation</p>
                        }
                    </p>
                        <Link style={{color : "white", fontWeight : 'bold'}} to={`/hotel/${id}`} >
                            <button>
                            ₹ {price}/-
                            </button>
                        </Link>
                </div>
            </div> */}
        </DIV>
    )
}

export default Hotels


const DIV = styled.div`

    box-shadow: rgba(0, 0, 0, 0.30) 0px 5px 15px;
    border-radius: 12px;

    /* 028000 */
    /* .name {
        font-weight: bold;
    }

    img {
        border-top-left-radius: 10px;
        border-bottom-left-radius: 10px;
    }

    .price {
        background-color: #E9F4DE;
        border: 1px solid #CDE5B3;
        border-radius: 12px;
        color : #028000;
    }
    */

    button {
        background-color : #028000;
        outline : none;
        border: 0;
        width : 80%;
        margin: auto;
        border-radius: 5px;
        padding: 12px 20px;
        margin-bottom : 5px;
    } 

    img {
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

`


// {
//     "id": 1,
//     "name": "Hotel Sunroute Plaza Shinjuku",
//     "rating": 8.3,
//     "reviews": 7155,
//     "rental_unit": "Stay and help",
//     "accommodation": "Shared Room",
//     "preferences": "Pet-Friendly",
//     "guest_rating": "Very Good",
//     "smoking_allowed": true,
//     "price": 21000,
//     "about": "Housed within the 19th-century Treasury Building, InterContinental Sydney blends history with modern design to create a stunning luxury hotel. Situated in the heart of Sydney's Circular Quay, the property possesses gourmet dining, a year-round indoor pool, and sophisticated rooms. Every modern en-suite room at InterContinental Sydney includes air conditioning, a minibar, satellite TV, and deluxe toiletries. The rooms also boast scenic views of the harbour or city. In the striking lobby area, travellers are welcomed by the 24-hour, multilingual front desk. The rooftop terrace delivers unforgettable views of the Sydney skyline. A well-equipped fitness centre is also available for those seeking a workout. The award-winning 117 Dining crafts gastronomic, Asian-inspired cuisine where food meets art. A scrumptious seafood buffet is served at Cafe Opera, and The Cortile is the place to enjoy light dining and drinks throughout the day. The hotel is situated opposite the Museum of Sydney, while the iconic Sydney Opera House is a ten-minute walk.",
//     "contact": "117 Macquarie Street, 2000, Sydney, Australia",
//     "telephone": "+61(2)92539000 | Fax: +61(2)92401240",
//     "imageOne": "https://images.unsplash.com/photo-1509600110300-21b9d5fedeb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     "imageTwo": "https://images.unsplash.com/photo-1631049421450-348ccd7f8949?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//     "imageThree": "https://images.unsplash.com/photo-1455587734955-081b22074882?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80",
//     "facilities": [
//         "City View",
//         "Free Wifi",
//         "Bath",
//         "Air Conditioning",
//         "Daily HouseKeeping"
//     ],
//     "comments": [
//         {
//             "id": 1,
//             "name": "Joyce",
//             "comment": "Excellent location, within walking distance from stations, shopping malls, food. Love the fact that we can walk to Labi, so near and convenient. Hotel also has proper lobby the washing machine facilities and airport transfer"
//         },
//         {
//             "id": 2,
//             "name": "Julia",
//             "comment": "Comfortabel hotel, great location, friendly and helpful staff. A comfortable and convenient location to start our trip in Tokyo. Would come back."
//         }
//     ]
// }