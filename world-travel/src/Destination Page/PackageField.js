import React, { useEffect } from 'react'
import styled from 'styled-components'
import Navigation from './redux/images/Navigation.png'
import { useState } from 'react';

const currentDate = new Date().toISOString().split('T')[0];

const PackageField = ({handleBuy}) => {

    const [checkInDate, setCheckInDate] = useState(currentDate);
    const [checkOutDate, setCheckOutDate] = useState(currentDate);
    const [adult, setAdult] = useState(1);
    const [child, setChild] = useState(1);
    const [room, setRoom] = useState(1);
    const [days, setDays] = useState(1);
    const handleCheckInChange = (e) => {
        const selectedDate = e.target.value;
        // if (selectedDate >= currentDate && selectedDate <= checkOutDate) {
        setCheckInDate(selectedDate);
        // }
    };

    const handleCheckOutChange = (e) => {
        const selectedDate = e.target.value;
        // if (selectedDate >= currentDate && selectedDate >= checkInDate) {
        setCheckOutDate(selectedDate);
        // }
    };

    // 1000 milliseconds in a second, 3600 seconds in an hour, 24 hours in a day

    useEffect(() => {
        const checkInDateObj = new Date(checkInDate);
        const checkOutDateObj = new Date(checkOutDate);

        const timeDifference = checkOutDateObj.getTime() - checkInDateObj.getTime();
        const daysDifference = timeDifference / (1000 * 3600 * 24);

        if (daysDifference <= 0) {
            setDays(1)
        }
        else {
            setDays(daysDifference)
        }

        if (adult < 0) {
            setAdult(1)
        }
        if (child < 0) {
            setChild(1)
        }
        if (room < 0) {
            setRoom(1)
        }

    }, [checkInDate, checkOutDate, adult, child, room])

    console.log(days)


    return (

        <DIV className="container-fluid">
            <button className='close' onClick={handleBuy} >
                <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path fill="white" d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z" />
                </svg>
            </button>
            <div className='row d-flex justify-content-around align-items-center field'>
                <div className='col-xl-5 d-none d-xl-flex justify-content-center align-items-center'>
                    <img src={Navigation} width={"80%"} alt="travel" className='' />
                </div>
                <div className='col-xl-5 col-12 d-flex flex-column justify-content-around align-items-center text-center field form'>
                    <h2>Hey, User!</h2>
                    <h5 className='w-xl-75 w-100' >You're just one step away from securing your Sydney package. Please complete this form to make your purchase.</h5>
                    <div className='row d-flex justify-content-between w-xl-75 w-100' >
                        <div className="date my-2">
                            <label htmlFor="checkInDate">Check-In Date:</label>
                            <br />
                            <input
                                type="date"
                                id="checkInDate"
                                value={checkInDate}
                                min={currentDate}
                                onChange={handleCheckInChange}
                            />
                        </div>
                        <div className="date my-2">
                            <label htmlFor="checkOutDate">Check-Out Date:</label>
                            <br />
                            <input
                                type="date"
                                id="checkOutDate"
                                value={checkOutDate}
                                min={checkInDate}
                                onChange={handleCheckOutChange}
                            />
                        </div>
                    </div>
                    <div className='d-flex flex-column align-items-center' >
                        <div className='d-flex align-items-center gap-5 my-2' >
                            <h5>Adults</h5>
                            <div className='d-flex gap-3 align-items-center' >
                                <button className='operator' onClick={() => (
                                    adult <= 1 ? null : setAdult(adult - 1)
                                )}><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#567EB9" d="M19 12.998H5v-2h14z" />
                                    </svg></button>
                                <input className="input" type='number' value={adult} onChange={(e) => setAdult(e.target.value)} />
                                <button className='operator' onClick={() => setAdult(adult + 1)}><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#567EB9" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
                                </svg></button>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-5 my-2'>
                            <h5>Children</h5>
                            <div className='d-flex gap-3 align-items-center'>
                                <button className='operator' onClick={() => (
                                    child <= 0 ? null : setChild(child - 1)
                                )}><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#567EB9" d="M19 12.998H5v-2h14z" />
                                    </svg></button>
                                <input className="input" type='number' value={child} onChange={(e) => setChild(e.target.value)} />
                                <button className='operator' onClick={() => { setChild((prev) => prev + 1) }}><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#567EB9" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
                                </svg></button>
                            </div>
                        </div>
                        <div className='d-flex align-items-center gap-5 my-2'>
                            <h5>Rooms</h5>
                            <div className='d-flex gap-3 align-items-center'>
                                <button className='operator' onClick={() => (
                                    room <= 1 ? null : setRoom(room - 1)
                                )}><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#567EB9" d="M19 12.998H5v-2h14z" />
                                    </svg></button>
                                <input className="input" type='number' value={room} onChange={(e) => setRoom(e.target.value)} />
                                <button className='operator' onClick={() => { setRoom((prev) => prev + 1) }}><svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path fill="#567EB9" d="M19 12.998h-6v6h-2v-6H5v-2h6v-6h2v6h6z" />
                                </svg></button>
                            </div>
                        </div>
                    </div>
                    <button className="pay" >Price Rs.{days}</button>
                </div>
            </div>
        </DIV>

    )
}

export default PackageField

const DIV = styled.div`
    position : fixed;
    height: 80vh;
    width: 90vw;
    border: 3px solid black;
    background-color: white;
    z-index : 2;
    top : 57%;
    left : 50%;
    transform: translate(-50%, -50%);
    animation: openedit ease 0.8s;

    @media screen and (max-width: 510px) and (min-width: 350px) {
    height : 90vh;
  }

    @keyframes openedit {
    0% {
        top : -100%
    }
    /* 50% {
        transform: translate(-50%, -50%) scale(1.3);
    } */
    100% {
        top : 50%;
    }
}

   .field {
    height : inherit;
   }

   .date {
    width : 60%;
    margin : auto;
    border : 2px solid grey;
    padding : 8px 12px;
    border-radius: 10px;
   }

   .input {
    height: 40px;
    width: 40px;
    border : 1px solid black;
    text-align: center;
   }

   .operator {
    border : 1px solid black;
    border-radius: 50%;
    padding: 5px;
    transition: transform 0.3s;
   }

   .operator:hover {
    transform: scale(1.2);
   }

   .pay {
        background-color : #567EB9;
        outline : none;
        border: 0;
        border-radius: 5px;
        padding: 15px 36px;
        color : white;
    }

    .close {
        position : absolute;
        top :0;
        right : 0;
        padding : 3px 15px;
        background-color: black;
        border-bottom-left-radius: 8px;
    }

    .close:hover {
        background-color: red;
    }

`

// border : 1px dashed rgb(241,9,93);