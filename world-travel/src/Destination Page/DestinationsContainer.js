import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getDestination } from './redux/action';
import DestinationCard from './DestinationCard';
import styled from 'styled-components'
import Filter from './Filter';

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
            <div className='my-3' style={{ textAlign: 'center' }} >
                <HEADING >Popular Destination <span>For now</span> </HEADING>
            </div>
            <div className='container-fluid d-flex' >
                <div className='row' >
                    <div className='col-md-3' >
                        <Filter />
                    </div>
                    <div className='col-md-9' >
                        <DIV>
                            {
                                destinations?.length > 0 && destinations?.map((ele) => (
                                    <DestinationCard key={ele.id} {...ele} />
                                ))
                            }
                        </DIV>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DestinationsContainer

const DIV = styled.div`

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
    margin: 20px;
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

