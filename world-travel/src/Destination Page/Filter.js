import React from 'react'
import styled from 'styled-components'


const Filter = () => {
  return (
    <FILTER className="p-4" >
      <HEADING >Filters  <span>For Better Search</span> </HEADING>
      <INPUT className='my-3' >
          <label>
          <h6>Search by City/Country</h6>
          <input type='text' placeholder='Enter Destination' />
          </label>
      </INPUT>
      <CHECKBOX className='d-flex flex-column gap-3 my-4' >
        <label className="container">
          <h5>Beachfront</h5>
          <input type="checkbox" />
          <svg viewBox="0 0 64 64" height="2em" width="2em">
            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
          </svg>
        </label>
        <label className="container">
          <h5>Trending</h5>
          <input type="checkbox" />
          <svg viewBox="0 0 64 64" height="2em" width="2em">
            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
          </svg>
        </label>
        <label className="container">
          <h5>Country Side</h5>
          <input type="checkbox" />
          <svg viewBox="0 0 64 64" height="2em" width="2em">
            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
          </svg>
        </label>
        <label className="container">
          <h5>Farms</h5>
          <input type="checkbox" />
          <svg viewBox="0 0 64 64" height="2em" width="2em">
            <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
          </svg>
        </label>
      </CHECKBOX>
    </FILTER>
  )
}

export default Filter

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