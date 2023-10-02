import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDestination } from './redux/action';
import DestinationCard from './DestinationCard';
import styled from 'styled-components'
import Filter from './Filter';
import Loading from './Loading';

const DestinationsContainer = () => {

    const { isLoading, isError, destinations } = useSelector((store) => ({
        isLoading: store.destinationReducer.isLoading,
        isError: store.destinationReducer.isError,
        destinations: store.destinationReducer.destinations
    }));
    console.log(isLoading, isError, destinations)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getDestination)
    }, [])


    return (
        <>
            <HERO className="container-fluid" >

            </HERO>

            <div className='container-fluid d-flex pt-0' >
                <div className='row' >
                    <div className='col-lg-3' >
                        <Filter />
                    </div>
                    <div className='col-lg-9' >
                        {
                            isLoading ?
                                <Loading />
                                :
                                <div>
                                    <div className='my-3' style={{ textAlign: 'center' }} >
                                        <HEADING >Popular Destination <span>For you</span> </HEADING>
                                    </div>
                                    <DIV>
                                        {
                                            destinations?.length > 0 && destinations?.map((ele) => (
                                                <DestinationCard key={ele.id} {...ele} />
                                            ))
                                        }
                                    </DIV>
                                </div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default DestinationsContainer

const DIV = styled.div`

    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 70px;
    margin: 20px;

    @media screen and (max-width : 1192px) and (min-width : 1051px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width : 1051px) and (min-width : 991px) {
        grid-template-columns: repeat(1, 1fr);
        margin : 0 40px
    }
    @media screen and (max-width : 992px) and (min-width : 400px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width : 590px) and (min-width : 200px) {
        grid-template-columns: repeat(1, 1fr);
    }

`

const HEADING = styled.h1`
    margin: auto;
    font-family: "acumin-pro", sans-serif;
    font-weight: bold;

    span {
        font-family: 'Fuggles', cursive; 
        font-weight: bold;
    }
`
const HERO = styled.div`

    height : 20vh;
    /* background-color: #567EB9; */

`
