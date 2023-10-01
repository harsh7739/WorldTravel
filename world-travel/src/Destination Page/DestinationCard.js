import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const DestinationCard = ({ id, image, city, country, rating, estimated_price }) => {
    return (
        <DIV className="">
            <img width={"100%"} src={image} alt={city + country} />
            <div className='d-flex justify-content-between align-items-center mt-3 ' >
                <div className='d-flex aligh-items-center gap-1' >
                    {/* <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#000000" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z" />
                    </svg> */}
                    <h3 className='city' >{city}</h3>
                </div>
                <div className='d-flex aligh-items-center gap-1' >
                    <svg width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#537cb6" d="m12 17.27l4.15 2.51c.76.46 1.69-.22 1.49-1.08l-1.1-4.72l3.67-3.18c.67-.58.31-1.68-.57-1.75l-4.83-.41l-1.89-4.46c-.34-.81-1.5-.81-1.84 0L9.19 8.63l-4.83.41c-.88.07-1.24 1.17-.57 1.75l3.67 3.18l-1.1 4.72c-.2.86.73 1.54 1.49 1.08l4.15-2.5z" />
                    </svg>
                    <h5>{rating} / 5</h5>
                </div>
            </div>
            <h4 className='d-flex align-items-center country' >
                <svg width="33" height="33" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path fill="#646262" d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7Z" />
            </svg>{country}</h4>
            <Link style={{ textDecoration: "none", color: "white", fontWeight: 'bold' }} to={`/destination/${id}`} >
                <button className='my-3'>
                    View Nearby Hotels
                </button>
            </Link>
        </DIV>
    )
}

export default DestinationCard

// {
//     "id": 1,
//     "image": "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80",
//     "images": [
//         "https://images.unsplash.com/photo-1533050487297-09b450131914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
//         "https://images.unsplash.com/photo-1522547902298-51566e4fb383?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1935&q=80"
//     ],
//     "city": "Tokyo",
//     "country": "Japan",
//     "rating": 4.4,
//     "locality": "Beachfront",
//     "coordinates": [
//         35.67951233008982,
//         139.7673615401517
//     ],
//     "hotels": [
//         {
//             "id": 1,
//             "name": "Hotel Sunroute Plaza Shinjuku",
//             "rating": 8.3,
//             "reviews": 7155,
//             "rental_unit": "Stay and help",
//             "accommodation": "Shared Room",
//             "preferences": "Pet-Friendly",
//             "guest_rating": "Very Good",
//             "smoking_allowed": true,
//             "price": 21000,
//             "images": [
//                 "https://cf.bstatic.com/xdata/images/hotel/max1024x768/6352184.jpg?k=75d56330a5f2224a142c9b204a8dcce10b7244ac5cbd001d526ce3b09d9d3dee&o=&hp=1",
//                 "https://cf.bstatic.com/xdata/images/hotel/max1024x768/488610914.jpg?k=b597759050a092a61baffcfd734d07eb0ab6f7201589cfdd75bf5d01b5342170&o=&hp=1",
//                 "https://cf.bstatic.com/xdata/images/hotel/max1024x768/410048211.jpg?k=65362bb141785349bbbeac811c158ccadc79bddedb3fe016b260bb492bdaf769&o=&hp=1"
//             ],
//             "facilities": [
//                 "City View",
//                 "Free Wifi",
//                 "Bath",
//                 "Air Conditioning",
//                 "Daily HouseKeeping"
//             ],
//             "comments": [
//                 {
//                     "id": 1,
//                     "name": "Joyce",
//                     "comment": "Excellent location, within walking distance from stations, shopping malls, food. Love the fact that we can walk to Labi, so near and convenient. Hotel also has proper lobby the washing machine facilities and airport transfer"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Julia",
//                     "comment": "Comfortabel hotel, great location, friendly and helpful staff. A comfortable and convenient location to start our trip in Tokyo. Would come back."
//                 }
//             ]
//         },
//         {
//             "id": 2,
//             "name": "APA Hotel Tower",
//             "rating": 7.6,
//             "reviews": 8434,
//             "rental_unit": "Stay and pay",
//             "accommodation": "Private",
//             "preferences": "Wheelchair Accessible",
//             "guest_rating": "Good",
//             "smoking_allowed": true,
//             "price": 20999,
//             "images": [
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/103549991.jpg?k=885742b7eb47ededfbf860353132cc3ce5562b3b3f69ce2dd997ddcece1b33ce&o=&hp=1",
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/442042190.jpg?k=346685e7b58288f52b0607acdfbd8e0641a2c8425dee70ead54775cd24ef4484&o=&hp=1",
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/442079966.jpg?k=5d72533a3c3be47d0bf9fae050e299088365964f4040ca76e8dea8b1feb8e7bd&o=&hp=1"
//             ],
//             "facilities": [
//                 "City View",
//                 "Free Wifi",
//                 "Bath",
//                 "Air Conditioning",
//                 "Daily HouseKeeping"
//             ],
//             "comments": [
//                 {
//                     "id": 1,
//                     "name": "Joyce",
//                     "comment": "Excellent location, within walking distance from stations, shopping malls, food. Love the fact that we can walk to Labi, so near and convenient. Hotel also has proper lobby the washing machine facilities and airport transfer"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Julia",
//                     "comment": "Comfortabel hotel, great location, friendly and helpful staff. A comfortable and convenient location to start our trip in Tokyo. Would come back."
//                 }
//             ]
//         },
//         {
//             "id": 3,
//             "name": "Hilton Garden Inn",
//             "rating": 9.5,
//             "reviews": 10021,
//             "rental_unit": "Stay and help",
//             "accommodation": "Public",
//             "preferences": "Pet-Free",
//             "guest_rating": "Excellent",
//             "smoking_allowed": false,
//             "price": 25999,
//             "images": [
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/485684166.jpg?k=234227d2f4af3fe5596c46f6e370a0f1b26bf8403ed0d004380551ba71a84a87&o=&hp=11",
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/485684197.jpg?k=3e158dd3dac74dd70a446194e9d5c04ed36b2911b66ab8a21ad48e3d6cb2642c&o=&hp=1",
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/485684211.jpg?k=74d966c8e0597d8749942489058cd6da991e79580d2d9911555bd2c7f6fd9522&o=&hp=1"
//             ],
//             "facilities": [
//                 "City View",
//                 "Free Wifi",
//                 "Bath",
//                 "Air Conditioning",
//                 "Daily HouseKeeping"
//             ],
//             "comments": [
//                 {
//                     "id": 1,
//                     "name": "Joyce",
//                     "comment": "Excellent location, within walking distance from stations, shopping malls, food. Love the fact that we can walk to Labi, so near and convenient. Hotel also has proper lobby the washing machine facilities and airport transfer"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Julia",
//                     "comment": "Comfortabel hotel, great location, friendly and helpful staff. A comfortable and convenient location to start our trip in Tokyo. Would come back."
//                 }
//             ]
//         },
//         {
//             "id": 4,
//             "name": "Park South Hotel, part of JdV by Hyatt",
//             "rating": 8.5,
//             "reviews": 6021,
//             "rental_unit": "Stay and pay",
//             "accommodation": "Shared Room",
//             "preferences": "Pet-Friendly",
//             "guest_rating": "Very Good",
//             "smoking_allowed": false,
//             "price": 18999,
//             "images": [
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/245103760.jpg?k=c651ad3d621232036e8155167f8fa248c6b353b52e0f237857ed4d86e188931a&o=&hp=1",
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/245103703.jpg?k=a819c7ceb76db2a2a2d94394afcddfa533ebe2068ac32b980b478c7908ad5f32&o=&hp=1",
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/245103716.jpg?k=b226164b23b966ee5bda4cf7da6804802b4d98b3880add82988057b5e81238d7&o=&hp=1"
//             ],
//             "facilities": [
//                 "City View",
//                 "Free Wifi",
//                 "Bath",
//                 "Air Conditioning",
//                 "Daily HouseKeeping"
//             ],
//             "comments": [
//                 {
//                     "id": 1,
//                     "name": "Joyce",
//                     "comment": "Excellent location, within walking distance from stations, shopping malls, food. Love the fact that we can walk to Labi, so near and convenient. Hotel also has proper lobby the washing machine facilities and airport transfer"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Julia",
//                     "comment": "Comfortabel hotel, great location, friendly and helpful staff. A comfortable and convenient location to start our trip in Tokyo. Would come back."
//                 }
//             ]
//         },
//         {
//             "id": 5,
//             "name": "B&B HOTEL Wiener-Neudorf",
//             "rating": 9.8,
//             "reviews": 10021,
//             "rental_unit": "Stay and pay",
//             "accommodation": "Private",
//             "preferences": "Pet-Free",
//             "guest_rating": "Excellent",
//             "smoking_allowed": false,
//             "price": 29999,
//             "images": [
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/459539624.jpg?k=c042e99e9ebdc382ce594b98b999c199eacc7e2e3e6a0e224f8c7c543de873ec&o=&hp=1",
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/459539643.jpg?k=9560374fb0a5e0e8a380325482c03164cdb974d0f2ea780126b9ab5b54a0a493&o=&hp=1",
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/459539614.jpg?k=8ba1d324489dcfc9b0b195117d60f0c7e748881ca4296924bc9f8d74b6210238&o=&hp=1"
//             ],
//             "facilities": [
//                 "City View",
//                 "Free Wifi",
//                 "Bath",
//                 "Air Conditioning",
//                 "Daily HouseKeeping"
//             ],
//             "comments": [
//                 {
//                     "id": 1,
//                     "name": "Joyce",
//                     "comment": "Excellent location, within walking distance from stations, shopping malls, food. Love the fact that we can walk to Labi, so near and convenient. Hotel also has proper lobby the washing machine facilities and airport transfer"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Julia",
//                     "comment": "Comfortabel hotel, great location, friendly and helpful staff. A comfortable and convenient location to start our trip in Tokyo. Would come back."
//                 }
//             ]
//         },
//         {
//             "id": 6,
//             "name": "VAYA Zillertal",
//             "rating": 6.9,
//             "reviews": 8987,
//             "rental_unit": "Stay and pay",
//             "accommodation": "Shared Bed",
//             "preferences": "Pet-Friendly",
//             "guest_rating": "Okay",
//             "smoking_allowed": false,
//             "price": 29999,
//             "images": [
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/406108808.jpg?k=df5e67e8d25d78518e77fcf5682dc23c34f2775843d70a100ddd169756cbad2f&o=&hp=1",
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/297963252.jpg?k=1a5aa79e3ec408ec8f4f3a7b9108f1c8110b8253b06a3bd1f75837e19ae05187&o=&hp=1",
//                 "https://cf.bstatic.com/xdata/images/hotel/max1280x900/297958444.jpg?k=af8fa6092ce4b30be020b98682b08af313a5f6b498bf39e62d663517182ca573&o=&hp=1"
//             ],
//             "facilities": [
//                 "City View",
//                 "Free Wifi",
//                 "Bath",
//                 "Air Conditioning",
//                 "Daily HouseKeeping"
//             ],
//             "comments": [
//                 {
//                     "id": 1,
//                     "name": "Joyce",
//                     "comment": "Excellent location, within walking distance from stations, shopping malls, food. Love the fact that we can walk to Labi, so near and convenient. Hotel also has proper lobby the washing machine facilities and airport transfer"
//                 },
//                 {
//                     "id": 2,
//                     "name": "Julia",
//                     "comment": "Comfortabel hotel, great location, friendly and helpful staff. A comfortable and convenient location to start our trip in Tokyo. Would come back."
//                 }
//             ]
//         }
//     ],
//     "about": "Explore the bustling streets of Tokyo, where modern skyscrapers blend seamlessly with historic temples. Visit the iconic Tokyo Tower for panoramic city views, indulge in authentic sushi at Tsukiji Fish Market, and experience the serene beauty of the Meiji Shrine nestled in a lush forest."
// }

const DIV = styled.div`
    img {
        border-radius: 8px;
    }
    
    button {
        width: 100%;
        background-color : #567eb9;
        outline : none;
        border: 0;
        border-radius: 5px;
        padding: 15px 0;
    }

    .city {
        font-weight: bold;
    }

    .country {
        color: rgb(100,98,98);
        padding-bottom: 13px;
        border-bottom: 3px solid #567EB9;
    }
`