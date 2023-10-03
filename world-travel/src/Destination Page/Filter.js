import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import styled from 'styled-components'


const Filter = () => {

const [searchParams, setSearchParams] = useSearchParams();
const [locality, setLocality] = useState(searchParams.getAll("category") || [])
const [order, setOrder] = useState(searchParams.get("order") || "");



const handleOrder = (e) => {
  const {value} = e.target;
  setOrder(value)
}

const handleFilter = (e) => {
  const {value} = e.target;
  let newLocality = [...locality];

  if(newLocality.includes(value)) {
    newLocality = newLocality.filter((el) => el !== value)
  }
  else {
    newLocality.push(value);
  }
  setLocality(newLocality)
}

useEffect(() => {
  let params = {
    "locality" : locality
  }
  order && (params.order = order);
  setSearchParams(params)
}, [locality, order])

  return (
    <FILTER className="p-4" >
      <HEADING >Filters  <span>For Better Search</span> </HEADING>
      <INPUT className='my-3 w-100 m-auto' style={{ borderBottom: '2px solid #567EB9' }} >
        <label style={{ marginBottom: '10px', width: "75%", margin: 'auto' }} >
          <h5 style={{ fontWeight: 'bold' }} >Search by City/Country</h5>
          <input style={{ width: "80%", margin: 'auto', marginBottom: '10px' }} type='text' placeholder='Enter Destination' />
        </label>
      </INPUT>
      <h5 style={{ fontWeight: 'bold' }}>Search by Locality</h5>
      <CHECKBOX style={{ borderBottom: '2px solid #567EB9' }} className='d-flex flex-column justify-content-between w-75 m-auto gap-3 my-4' >
        <label className="container d-flex justify-content-between w-100 ">
          <h5>Beachfront</h5>
          <div>
            <input type="checkbox" onChange={handleFilter} value={"Beachfront"} checked={locality.includes("Beachfront")} />
            <svg viewBox="0 0 64 64" height="2em" width="2em">
              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
            </svg>
          </div>
        </label>
        <label className="container d-flex justify-content-between w-100 ">
          <h5>Trending</h5>
          <div>
            <input type="checkbox" onChange={handleFilter} value={"Trending"}  checked={locality.includes("Trending")} />
            <svg viewBox="0 0 64 64" height="2em" width="2em">
              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
            </svg>
          </div>
        </label>
        <label className="container d-flex justify-content-between w-100 ">
          <h5>Country Side</h5>
          <div>
            <input type="checkbox" onChange={handleFilter} value={"Country Side"} checked={locality.includes("Country Side")} />
            <svg viewBox="0 0 64 64" height="2em" width="2em">
              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
            </svg>
          </div>
        </label>
        <label style={{ marginBottom: '10px' }} className="container d-flex justify-content-between w-100 ">
          <h5>Farms</h5>
          <div>
            <input type="checkbox" onChange={handleFilter} value={"Farms"} checked={locality.includes("Farms")} />
            <svg viewBox="0 0 64 64" height="2em" width="2em">
              <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
            </svg>
          </div>
        </label>
      </CHECKBOX>
      <SORT className='d-flex flex-column' onChange={handleOrder}>
        <h5 style={{ fontWeight: 'bold' }} >Sort by Rating</h5>
        <label className="radio-button">
          <input type="radio" name="example-radio" value={"asc"} defaultChecked={order === 'asc'}  />
          <span className="radio"></span>
          Ascending Order
        </label>
        <label className="radio-button">
          <input type="radio" name="example-radio" value={"desc"} defaultChecked={order === 'desc'}  />
          <span className="radio"></span>
          Descending Order
        </label>
      </SORT>
    </FILTER>
  )
}

export default Filter

const SORT = styled.div`
  .radio-button {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin: 10px;
  position: relative;
  align-items: center;
  color: black;
}

.radio-button input[type="radio"] {
  position: absolute;
  opacity: 0;
}

.radio {
  position: relative;
  display: inline-block;
  color: black;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid #ccc;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  transform: translateZ(-25px);
  transition: all 0.3s ease-in-out;
}

.radio::before {
  position: absolute;
  content: '';
  width: 10px;
  height: 10px;
  top: 5px;
  left: 5px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  opacity: 0;
  transition: all 0.3s ease-in-out;
}

.radio-button input[type="radio"]:checked + .radio {
  border-color: #5cb85c;
  transform: translateZ(0px);
  background-color: black;
}

.radio-button input[type="radio"]:checked + .radio::before {
  opacity: 1;
}
`

const FILTER = styled.div`
/* padding-top: 15px;
  height: 30vh;
  text-align: center;
  position: fixed;
   width: inherit;
  top : 20%; 
 width : inherit; */
  text-align : center;

`

const HEADING = styled.h2`
    margin: auto;
    font-family: "acumin-pro", sans-serif;
    font-weight: bold;

    span {
        font-family: 'Fuggles', cursive; 
        font-weight: bold;
    }
`

const CHECKBOX = styled.div`

  .container {
  cursor: pointer;
  width : inherit;
  display : flex;
  align-items : center;
  gap : 10px;
  font-weight : bold;
}

.container input {
  display: none;
}

.container svg {
  overflow: visible;
}

.path {
  fill: none;
  stroke: black;
  stroke-width: 6;
  stroke-linecap: round;
  stroke-linejoin: round;
  transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
  stroke-dasharray: 241 9999999;
  stroke-dashoffset: 0;
}

.container input:checked ~ svg .path {
  stroke-dasharray: 70.5096664428711 9999999;
  stroke-dashoffset: -262.2723388671875;
}

`

const INPUT = styled.div`

  input {
    border: 2px solid #567EB9 ;
    border-radius: 5px;
    height: 40px;
    width: 270px;
    text-align : center;
  }

`