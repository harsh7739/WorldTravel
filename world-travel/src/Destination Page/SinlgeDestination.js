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
import Loading from './Loading';
import location from '../Common/logo/location.png'

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
  localStorage.setItem("destinationParamas", id)
  const [center, setCenter] = useState([-33.868601490430436, 151.20857757563576]);
  const [data, setData] = useState([]);
  const [hotel, setHotel] = useState([]);
  const [load, setLoad] = useState(false)

  useEffect(() => {
    // dispatch(getSingleDestination(id))
    setLoad(true)
    axios.get(`https://destination-cw4.onrender.com/destinations/${id}`).then((res) => {
      setData(res.data)
      setLoad(false)
      setCenter(res.data.coordinates)
    }).catch((err) => {
      console.log(err)
    })

    axios.get(`https://destination-cw4.onrender.com/hotels`).then((res) => {
      console.log(res.data)
      setHotel(res.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [])

  console.log(center)

  if (load) {
    return <Loading />
  }

  return (
    <DIV>
      <div className='container-fluid mt-4 mainContainer' >
        <div className="row mt-5 py-5">
          <div className='col-xl-6 col-md-12 py-4 topDiv container-one'  >
            <div className='row d-flex justify-content-center align-items-end pb-4' style={{ borderBottom: '2px solid #567EB9', width: "80%", margin: 'auto' }} >
              <div className='col-md-6 text-center' >
                <h1 style={{ fontWeight: 'bold' }} >{data.city}</h1>
                <h3 className='' style={{ fontWeight: 'bold' }} >
                  {data.country}
                </h3>
              </div>
              <div className='col-md-6 text-center' >
                <img src={location} width={"60%"} alt="location" className='m-auto' />
              </div>
            </div>
            <div className='col-md-12 py-5' >
              <h2 className='pb-4' style={{ fontWeight: 'bold', borderBottom: '2px solid #567EB9', width: '50%', margin: 'auto' }} >About</h2>
              <h5 style={{ fontWeight: 'bold' }} className="p-5"  >{data?.about}</h5>
            </div>
          </div>
          <div className='col-xl-6 col-md-12'>
            <div className='row'>
              <div className='col-md-6 d-flex flex-column align-items-center justify-content-between' >
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
          <div className='col-lg-6 col-12 container-one hotel-wrapper' >
            {
              hotel?.map((ele) => (
                <Hotels key={ele.id} {...ele} />
              ))
            }
          </div>
          <div className='col-lg-6 col-12' >
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

margin-top : 130px;
    div {
      /* border: 1px solid red; */
    }

    .img-home {
      border-radius: 10px;
    }

    .container-one {
      text-align: center;
    }

.topDiv {
  border : 1px solid #567EB9;
      border-radius : 8px;
}

.hotel-wrapper {
  display : grid;
  grid-template-columns: repeat(2, 1fr);
  gap : 20px
}

@media screen and (min-width : 992px) and (max-width : 1165px) {
  .hotel-wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media screen and (min-width : 582px) and (max-width : 991px) {
  .hotel-wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (min-width : 200px) and (max-width : 581px) {
  .hotel-wrapper {
    grid-template-columns: repeat(1, 1fr);
  }
}

`
const MAP = styled.div`
    .leaflet-container {
    height: 500px;
    width: 100%;
    z-index : 1;
    margin-top : 15px;
    border-radius: 10px;
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