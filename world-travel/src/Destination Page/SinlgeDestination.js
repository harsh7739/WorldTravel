import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getDestination, getSingleDestination } from './redux/action';
import styled from 'styled-components';
import { useRef, useState } from "react";
import { MapContainer, Marker, TileLayer, Popup } from "react-leaflet";
import { Icon, divIcon, point } from "leaflet";
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import MarkerClusterGroup from "react-leaflet-cluster";
import Hotels from './Hotels';

const SinlgeDestination = () => {

  const customIcon = new Icon({
    // iconUrl: "https://cdn-icons-png.flaticon.com/512/447/447031.png",
    iconUrl: require("../Destination Page/redux/images/pngwing.com.png"),
    iconSize: [28, 42] // size of the icon
  });

  // custom cluster icon
  const createClusterCustomIcon = function (cluster) {
    return new divIcon({
      html: `<span class="cluster-icon">${cluster.getChildCount()}</span>`,
      className: "custom-marker-cluster",
      iconSize: point(33, 33, true)
    });
  };

  const { id } = useParams();
  const [center, setCenter] = useState([-33.868601490430436, 151.20857757563576]);
  const [data, setData] = useState([]);
  const [hotel, setHotel] = useState([]);

  useEffect(() => {
    // dispatch(getSingleDestination(id))
    axios.get(`https://destination-cw4.onrender.com/destinations/${id}`).then((res) => {
      console.log(res.data)
      setData(res.data)
      setCenter(res.data.coordinates)
    }).catch((err) => {
      console.log(err)
    })

    axios.get(`https://destination-cw4.onrender.com/hotels`).then((res) => {
      setHotel(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  console.log(center)

  return (
    <DIV>
      <div className='container-fluid my-4 mainContainer' >
        <div className="row my-5">
          <div className='col-md-6 container-one' >
            <h1>{data.city}</h1>
            <h3>{data.country}</h3>
            <h6>{data.about}</h6>
          </div>
          <div className='col-md-6'>
            <div className='row'>
              <div className='col-md-6 d-flex flex-column justify-content-between' >
                <div className='col-md-12'>
                  <img className='img-home' width={"100%"} src={data?.image} alt="Loading..." />
                </div>
                <div className='col-md-12'>
                  <img className='img-home' width={"100%"} src={data?.imageOne} alt="Loading..." />
                </div>
              </div>
              <div className='col-md-6' >
                <img className='img-home' width={"100%"} src={data?.imageTwo} alt="Loading..." />
              </div>
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-around" >
          <div className='col-md-6 container-one' >
            {
              hotel?.map((ele) => (
                <Hotels key={ele.id} {...ele} />
              ))
            }
          </div>
          <div className='col-md-6' >
            <MAP>
              <MapContainer center={[-33.868601490430436, 151.20857757563576]} zoom={13}>
                {/* OPEN STREEN MAPS TILES */}
                {/* <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                /> */}
                {/* WATERCOLOR CUSTOM TILES */}
                {/* <TileLayer
        attribution='Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
      /> */}
                {/* GOOGLE MAPS TILES */}
                <TileLayer
                  attribution="Google Maps"
                  // url="http://{s}.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" // regular
                  // url="http://{s}.google.com/vt/lyrs=s,h&x={x}&y={y}&z={z}" // satellite
                  url="http://{s}.google.com/vt/lyrs=p&x={x}&y={y}&z={z}" // terrain
                  maxZoom={20}
                  subdomains={["mt0", "mt1", "mt2", "mt3"]}
                />

                <MarkerClusterGroup
                  chunkedLoading
                  iconCreateFunction={createClusterCustomIcon}
                >
                  {/* Mapping through the markers */}
                  {/* {markers.map((marker) => (
          <Marker position={marker.geocode} icon={customIcon}>
            <Popup>{marker.popUp}</Popup>
          </Marker>
        ))} */}

                  {/* Hard coded markers */}
                  <Marker position={[-33.85745190365494, 151.18150681618536]} icon={customIcon}>
                    <Popup>Hotel Sunroute Plaza Shinjuku</Popup>
                  </Marker>
                  <Marker position={[-33.86597037406395, 151.25166736680922]} icon={customIcon}>
                    <Popup>APA Hotel Tower</Popup>
                  </Marker>
                  <Marker position={[-33.88878351822506, 151.17335500286222]} icon={customIcon}>
                    <Popup>Hilton Garden Inn</Popup>
                  </Marker>
                  <Marker position={[-33.871370035703805, 151.15998236527594]} icon={customIcon}>
                    <Popup>Park South Hotel, part of JdV by Hyatt</Popup>
                  </Marker>
                  <Marker position={[-33.85783221063442, 151.20486313525726]} icon={customIcon}>
                    <Popup>B&B HOTEL Wiener-Neudorf</Popup>
                  </Marker>
                  <Marker position={[-33.8957022996631, 151.20990077270415]} icon={customIcon}>
                    <Popup>"VAYA Zillertal</Popup>
                  </Marker>

                </MarkerClusterGroup>
              </MapContainer>
            </MAP>
          </div>
        </div>
      </div>

    </DIV>
  )
}

export default SinlgeDestination


const DIV = styled.div`
    div {
      /* border: 1px solid red; */
    }

    .img-home {
      border-radius: 10px;
    }

    .container-one {
      text-align: center;
    }

`
const MAP = styled.div`
    .leaflet-container {
    height: 900px;
    width: 100%;
}
`

// {
//   "id": 2,
//   "image": "https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
//   "imageOne": "https://images.unsplash.com/photo-1418075285575-c402f1f7340f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80",
//   "imageTwo": "https://images.unsplash.com/photo-1515081774057-84dcf72d0cf1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1915&q=80",
//   "city": "New York",
//   "country": "United States",
//   "rating": 4.7,
//   "locality": "Trending",
//   "coordinates": [
//       40.712575525856614,
//       -74.00668557474988
//   ],
//   "guest_rating": "Very Good",
//   "hotels": [
//       {
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
//           "imageOne": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/6352184.jpg?k=75d56330a5f2224a142c9b204a8dcce10b7244ac5cbd001d526ce3b09d9d3dee&o=&hp=1",
//           "imageTwo": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/488610914.jpg?k=b597759050a092a61baffcfd734d07eb0ab6f7201589cfdd75bf5d01b5342170&o=&hp=1",
//           "imageThree": "https://cf.bstatic.com/xdata/images/hotel/max1024x768/410048211.jpg?k=65362bb141785349bbbeac811c158ccadc79bddedb3fe016b260bb492bdaf769&o=&hp=1",
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
//       },
//       {
//           "id": 2,
//           "name": "APA Hotel Tower",
//           "rating": 7.6,
//           "reviews": 8434,
//           "rental_unit": "Stay and pay",
//           "accommodation": "Private",
//           "preferences": "Wheelchair Accessible",
//           "guest_rating": "Good",
//           "smoking_allowed": true,
//           "price": 20999,
//           "imageOne": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/103549991.jpg?k=885742b7eb47ededfbf860353132cc3ce5562b3b3f69ce2dd997ddcece1b33ce&o=&hp=1",
//           "imageTwo": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/442042190.jpg?k=346685e7b58288f52b0607acdfbd8e0641a2c8425dee70ead54775cd24ef4484&o=&hp=1",
//           "imageThree": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/442079966.jpg?k=5d72533a3c3be47d0bf9fae050e299088365964f4040ca76e8dea8b1feb8e7bd&o=&hp=1",
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
//       },
//       {
//           "id": 3,
//           "name": "Hilton Garden Inn",
//           "rating": 9.5,
//           "reviews": 10021,
//           "rental_unit": "Stay and help",
//           "accommodation": "Public",
//           "preferences": "Pet-Free",
//           "guest_rating": "Excellent",
//           "smoking_allowed": false,
//           "price": 25999,
//           "imageOne": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/485684166.jpg?k=234227d2f4af3fe5596c46f6e370a0f1b26bf8403ed0d004380551ba71a84a87&o=&hp=11",
//           "imageTwo": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/485684197.jpg?k=3e158dd3dac74dd70a446194e9d5c04ed36b2911b66ab8a21ad48e3d6cb2642c&o=&hp=1",
//           "imageThree": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/485684211.jpg?k=74d966c8e0597d8749942489058cd6da991e79580d2d9911555bd2c7f6fd9522&o=&hp=1",
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
//       },
//       {
//           "id": 4,
//           "name": "Park South Hotel, part of JdV by Hyatt",
//           "rating": 8.5,
//           "reviews": 6021,
//           "rental_unit": "Stay and pay",
//           "accommodation": "Shared Room",
//           "preferences": "Pet-Friendly",
//           "guest_rating": "Very Good",
//           "smoking_allowed": false,
//           "price": 18999,
//           "imageOne": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/245103760.jpg?k=c651ad3d621232036e8155167f8fa248c6b353b52e0f237857ed4d86e188931a&o=&hp=1",
//           "imageTwo": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/245103703.jpg?k=a819c7ceb76db2a2a2d94394afcddfa533ebe2068ac32b980b478c7908ad5f32&o=&hp=1",
//           "imageThree": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/245103716.jpg?k=b226164b23b966ee5bda4cf7da6804802b4d98b3880add82988057b5e81238d7&o=&hp=1",
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
//       },
//       {
//           "id": 5,
//           "name": "B&B HOTEL Wiener-Neudorf",
//           "rating": 9.8,
//           "reviews": 10021,
//           "rental_unit": "Stay and pay",
//           "accommodation": "Private",
//           "preferences": "Pet-Free",
//           "guest_rating": "Excellent",
//           "smoking_allowed": false,
//           "price": 29999,
//           "imageOne": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/459539624.jpg?k=c042e99e9ebdc382ce594b98b999c199eacc7e2e3e6a0e224f8c7c543de873ec&o=&hp=1",
//           "imageTwo": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/459539643.jpg?k=9560374fb0a5e0e8a380325482c03164cdb974d0f2ea780126b9ab5b54a0a493&o=&hp=1",
//           "imageThree": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/459539614.jpg?k=8ba1d324489dcfc9b0b195117d60f0c7e748881ca4296924bc9f8d74b6210238&o=&hp=1",
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
//       },
//       {
//           "id": 6,
//           "name": "VAYA Zillertal",
//           "rating": 6.9,
//           "reviews": 8987,
//           "rental_unit": "Stay and pay",
//           "accommodation": "Shared Bed",
//           "preferences": "Pet-Friendly",
//           "guest_rating": "Okay",
//           "smoking_allowed": false,
//           "price": 29999,
//           "imageOne": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/406108808.jpg?k=df5e67e8d25d78518e77fcf5682dc23c34f2775843d70a100ddd169756cbad2f&o=&hp=1",
//           "imageTwo": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/297963252.jpg?k=1a5aa79e3ec408ec8f4f3a7b9108f1c8110b8253b06a3bd1f75837e19ae05187&o=&hp=1",
//           "imageThree": "https://cf.bstatic.com/xdata/images/hotel/max1280x900/297958444.jpg?k=af8fa6092ce4b30be020b98682b08af313a5f6b498bf39e62d663517182ca573&o=&hp=1",
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
//   ],
//   "about": "Discover the vibrant energy of the city that never sleeps. Take a stroll through Central Park, catch a Broadway show in Times Square, and soak up the art at the Metropolitan Museum of Art. Don't forget to grab a classic New York-style pizza slice!"
// }