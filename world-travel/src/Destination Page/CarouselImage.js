import React from 'react'
import styled from 'styled-components'

const CarouselImage = ({ imageOne, imageTwo, imageThree, name }) => {
    return (
        <DIV id="carouselExample" className="carousel slide mt-3">
            <div className="carousel-inner">
                <div className="carousel-item active text-center">
                    <img style={{ borderRadius: '10px' }} src={imageOne} className="d-block w-100" alt="..." />
                    <h4 className='p-tag' >{name}</h4>
                </div>
                <div className="carousel-item text-center">
                    <img style={{ borderRadius: '10px' }} src={imageTwo} className="d-block w-100" alt="..." />
                    <h4 className='p-tag'>Bedroom</h4>
                </div>
                <div className="carousel-item text-center">
                    <img style={{ borderRadius: '10px' }} src={imageThree} className="d-block w-100" alt="..." />
                    <h4 className='p-tag'>Others</h4>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </DIV>
    )
}

export default CarouselImage

const DIV = styled.div`
    .p-tag {
        position: absolute;
        top : 87%;
        left : 50%;
        transform: translateX(-50%);
        width: 100%;
        margin : auto;
        padding: 20px;
        backdrop-filter: blur(5px);
        font-weight: bold;
        border-bottom-left-radius: 10px;
        border-bottom-right-radius: 10px;
    }
`