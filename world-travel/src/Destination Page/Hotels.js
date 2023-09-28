import React from 'react'
import styled from 'styled-components'

const Hotels = ({ id, name, rating, reviews, rental_unit, accommodation, preferences, guest_rating, smoking_allowed, price, imageOne, imageTwo, imageThree }) => {
    console.log(preferences)
    return (
        <DIV className='container-fluid my-3 p-0' >
            <div className='row'>
                <div className='col-4' >
                    <img width={"100%"} src={imageOne} alt="Hotel" />
                </div>
                <div style={{ textAlign: 'left' }} className='col-5 px-2 py-2' >
                    <h5 className='name' >{name}</h5>
                    <p style={{ fontWeight: "bold" }} >{rating} - {guest_rating} <span style={{ fontWeight: "lighter" }} >({reviews} reviews)</span></p>
                    <div className='d-flex align-items-end gap-2' >
                        <h5>{preferences}</h5>
                        {
                            preferences === "Pet-Friendly" ? <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#000000" d="m14 8l3 3v10h-2v-6H8l-2 3v3H4v-6l1-1v-3L2 8l1-1l2 2h2v3a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1V9l1-1m5-3V3l-4 4l3 3l1-1l1 1l2-2l-3-3m-7.5 4.5l-7-7c-.27-.28-.71-.28-1 0c-.28.27-.28.71 0 1l7 7c.27.28.71.28 1 0c.28-.27.28-.71 0-1Z" />
                            </svg> : preferences === "Pet-Free" ? <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#000000" d="m18 10l-3-3l4-4v2l3 3l-2 2l-1-1l-1 1m-1 1l-3-3l-1 1h-.8l4.8 4.8V11M2.39 1.73L1.11 3l6 6H5L3 7L2 8l3 3v3l-1 1v6h2v-3l2-3h5.11L15 16.89V21h2v-2.11l3.84 3.84l1.27-1.27L2.39 1.73Z" />
                            </svg> : <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path fill="#000000" d="M12 6.5a2 2 0 1 0-2-2a2 2 0 0 0 2 2Zm7.5 14h-1v-5a1 1 0 0 0-1-1h-5v-2h5a1 1 0 0 0 0-2h-5v-2a1 1 0 0 0-2 0v7a1 1 0 0 0 1 1h5v5a1 1 0 0 0 1 1h2a1 1 0 0 0 0-2Zm-6.8-1.6a4 4 0 0 1-7.2-2.4a4 4 0 0 1 2.4-3.66A1 1 0 1 0 7.1 11a6 6 0 1 0 7.2 9.1a1 1 0 0 0-1.6-1.2Z" />
                            </svg>
                        }


                    </div>
                </div>
                <div className='col-3 price ' >
                    <p className='d-flex align-items-center justify-content-around my-3' >
                        <svg width="20" height="20" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <path fill="#028000" d="M437.3 30L202.7 339.3L64 200.7l-64 64L213.3 478L512 94z" />
                        </svg> Pay at the property
                    </p>
                    <p className='d-flex justify-content-around' >
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
                    
                    <button></button>
                </div>
            </div>
        </DIV>
    )
}

export default Hotels


const DIV = styled.div`

    box-shadow: rgba(0, 0, 0, 0.30) 0px 5px 15px;
    border-radius: 12px;

    /* 028000 */
    .name {
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

`

// {
//           "id": 1,
//           "name": "Hotel Sunroute Plaza Shinjuku",
//           "rating": 8.3,
//           "reviews": 7155,
//           "rental_unit": "Stay and help",
//           "accommodation": "Shared Room",
//           "preferences": "Pet-Friendly",
//           "guest_rating": "Very Good",
//           "smoking_allowed": true,
//           "price": 21000,
//           "imageOne": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/6302184.jpg?k=75d56330a5f2224a142c9b204a8dcce10b7244ac5cbd001d526ce3b09d9d3dee&o=&hp=1",
//           "imageTwo": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/308610914.jpg?k=b597759050a092a61baffcfd734d07eb0ab6f7201589cfdd75bf5d01b5342170&o=&hp=1",
//           "imageThree": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/410030211.jpg?k=65362bb141785349bbbeac811c158ccadc79bddedb3fe016b260bb492bdaf769&o=&hp=1",
//           "facilities": [
//               "City View",
//               "Free Wifi",
//               "Bath",
//               "Air Conditioning",
//               "Daily HouseKeeping"
//           ],
//           "comments": [
//               {
//                   "id": 1,
//                   "name": "Joyce",
//                   "comment": "Excellent location, within walking distance from stations, shopping malls, food. Love the fact that we can walk to Labi, so near and convenient. Hotel also has proper lobby the washing machine facilities and airport transfer"
//               },
//               {
//                   "id": 2,
//                   "name": "Julia",
//                   "comment": "Comfortabel hotel, great location, friendly and helpful staff. A comfortable and convenient location to start our trip in Tokyo. Would come back."
//               }
//           ]
//       }