import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getSingleHotel } from './redux/action'
import Loading from './Loading'
import styled from 'styled-components'
import hotelSign from './redux/images/hotelSign.png'
import CarouselImage from './CarouselImage'
import PackageField from './PackageField'

const SingleHotel = () => {

  const [buy, setBuy] = useState(false);
  const dispatch = useDispatch()
  const { hotel_id } = useParams()
  const { loading, hotel } = useSelector((store) => (
    {
      loading: store.destinationReducer.isLoading,
      hotel: store.destinationReducer.hotel
    }
  ))
  console.log(loading)

  const handleBuy = () => {
    setBuy(!buy)
  }

  useEffect(() => {
    dispatch(getSingleHotel(hotel_id))
  }, [])

  if (loading) {
    return <Loading />
  }


  return (
    <DIV style={{ marginTop : '130px' }} className='container-fluid'>

      {
        buy ? <PackageField handleBuy={handleBuy} /> : null
      }
      <div className='row'>
        <div className='col-md-6 details ps-5 ' >
          <div className='d-flex align-items-center gap-5 ' >
            <img width={"30%"} src={hotelSign} alt="hotel" />
            <h3 className="title" >{hotel?.name}</h3>
          </div>
          <div className="d-flex align-items-center justify-content-between" >
            <h5>Reserve a hotel room for just <span style={{ fontWeight: 'bold', color: "#028000" }} >₹{hotel?.price}</span> <span style={{ fontSize: "14px" }} >/night</span> </h5>
            <button className='butotn my-3' onClick={handleBuy} >Buy Package</button>
          </div>
          <p>{hotel?.about}</p>
          <div className='row mt-3' >
            <div className='col-5' >
              <h4 className='my-3'>Rating</h4>
              <h3 className="my-3" >{hotel?.rating}/10</h3>
              <p>{hotel?.guest_rating}</p>
              <h4 className='my-3'>Contacts</h4>
              <p className='contact' >{hotel?.contact}</p>
              <p className='contact'>{hotel?.telephone}</p>
            </div>
            <div className='col-7' >
              <h4 className='my-3' >Top amenities</h4>
              <div className='amenities' >
                {
                  hotel?.facilities?.map((ele, index) => (
                    <div key={ele + index} className="d-flex gap-3 align-items-center"  >
                      {
                        index === 0 ? <svg width="30" height="30" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                          <g fill="#000000">
                            <path d="M31 30h3v-2h-3v2Zm3 4h-3v-2h3v2Zm-3 4h3v-2h-3v2Z" />
                            <path fillRule="evenodd" d="m17 4l16 6v14h4a1 1 0 0 1 1 1v17h1a1 1 0 1 1 0 2H9a1 1 0 1 1 0-2h1V21a1 1 0 0 1 1-1h2v-7h2v7h2V4Zm19 38h-2v-2h-3v2h-2V26h7v16ZM17 22h-5v20h5V22Zm5-9h-2v2h2v-2Zm2 0h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-10 4h2v2h-2v-2Zm6 0h-2v2h2v-2Zm2 0h2v2h-2v-2Zm-6 4h-2v2h2v-2Zm2 0h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-10 4h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-4 4h-2v2h2v-2Zm2 0h2v2h-2v-2Zm-4 4h2v2h-2v-2Zm6 0h-2v2h2v-2Zm-4 4h-2v2h2v-2Zm2 0h2v2h-2v-2Z" clipRule="evenodd" />
                          </g>
                        </svg> : index === 1 ? <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#000000" d="M12 21q-1.05 0-1.775-.725T9.5 18.5q0-1.05.725-1.775T12 16q1.05 0 1.775.725T14.5 18.5q0 1.05-.725 1.775T12 21Zm-5.65-5.65l-2.1-2.15q1.475-1.475 3.463-2.337T12 10q2.3 0 4.288.875t3.462 2.375l-2.1 2.1q-1.1-1.1-2.55-1.725T12 13q-1.65 0-3.1.625T6.35 15.35ZM2.1 11.1L0 9q2.3-2.35 5.375-3.675T12 4q3.55 0 6.625 1.325T24 9l-2.1 2.1q-1.925-1.925-4.463-3.013T12 7Q9.1 7 6.562 8.088T2.1 11.1Z" />
                        </svg> : index === 2 ? <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <g fill="none">
                            <path stroke="#000000" strokeWidth="1.5" d="M3 13.083c0-.077 0-.116.002-.148a1 1 0 0 1 .933-.933c.033-.002.07-.002.148-.002h15.834c.077 0 .115 0 .148.002a1 1 0 0 1 .933.933c.002.032.002.07.002.148c0 .395 0 .593-.014.815c-.209 3.287-3.003 6.189-6.28 6.52c-.221.023-.35.028-.608.038A56.87 56.87 0 0 1 12 20.5c-.65 0-1.364-.017-2.098-.044c-.258-.01-.387-.015-.607-.037c-3.278-.332-6.072-3.234-6.28-6.521C3 13.676 3 13.478 3 13.083Z" />
                            <path stroke="#000000" strokeLinecap="round" strokeWidth="1.5" d="m6 20l-1 2m13-2l1 2M2 12h20" />
                            <path fill="#000000" d="M2.25 13a.75.75 0 0 0 1.5 0h-1.5ZM7.6 3.5l.696-.28l-.696.28Zm.379.947l.328.674l-.328-.674ZM6.362 6.192l.695.283l-.695-.283Zm4.215-1.814l-.295.69l.295-.69ZM6.346 8.742l-.698.275a.75.75 0 0 0 .994.413l-.296-.688Zm5.96-2.567l.297.69a.75.75 0 0 0 .401-.964l-.698.274ZM3.75 13V4.385h-1.5V13h1.5ZM5.385 2.75c.669 0 1.27.407 1.518 1.028l1.393-.557a3.135 3.135 0 0 0-2.91-1.971v1.5ZM3.75 4.385c0-.903.732-1.635 1.635-1.635v-1.5A3.135 3.135 0 0 0 2.25 4.385h1.5Zm3.153-.607l.38.948l1.392-.557l-.379-.948l-1.393.557Zm.14 4.689a2.679 2.679 0 0 1 .014-1.992l-1.39-.565a4.179 4.179 0 0 0-.02 3.107l1.396-.55Zm4.967-2.98L6.049 8.053l.593 1.377l5.96-2.566l-.592-1.377Zm-1.728-.42c.622.266 1.085.77 1.327 1.383l1.395-.55a3.973 3.973 0 0 0-2.132-2.212l-.59 1.38ZM7.057 6.476a2.565 2.565 0 0 1 1.25-1.354l-.656-1.348A4.065 4.065 0 0 0 5.667 5.91l1.39.565Zm1.25-1.354a2.361 2.361 0 0 1 1.975-.053l.59-1.38a3.861 3.861 0 0 0-3.221.085l.656 1.348Z" />
                          </g>
                        </svg> : index === 3 ? <svg width="30" height="30" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
                          <path fill="#000000" d="M221.83 150.57a6 6 0 0 1-4.4 7.26l-26.62 6.54l7 26.08a6 6 0 0 1-4.24 7.35a6.4 6.4 0 0 1-1.55.2a6 6 0 0 1-5.8-4.45L178.27 164L134 138.39v51.13l22.24 22.24a6 6 0 1 1-8.48 8.48L128 200.49l-19.76 19.75a6 6 0 0 1-8.48-8.48L122 189.52v-51.13L77.73 164l-7.93 29.6A6 6 0 0 1 64 198a6.4 6.4 0 0 1-1.55-.2a6 6 0 0 1-4.24-7.35l7-26.08l-26.62-6.54a6 6 0 0 1 2.86-11.66l30.23 7.43L116 128l-44.34-25.6l-30.23 7.43A5.88 5.88 0 0 1 40 110a6 6 0 0 1-1.43-11.83l26.62-6.54l-7-26.08a6 6 0 1 1 11.59-3.1l7.93 29.6L122 117.61V66.48L99.76 44.24a6 6 0 0 1 8.48-8.48L128 55.51l19.76-19.75a6 6 0 0 1 8.48 8.48L134 66.48v51.13l44.27-25.56l7.93-29.6a6 6 0 1 1 11.59 3.1l-7 26.08l26.62 6.54A6 6 0 0 1 216 110a5.88 5.88 0 0 1-1.43-.17l-30.23-7.43L140 128l44.34 25.6l30.23-7.43a6 6 0 0 1 7.26 4.4Z" />
                        </svg> : index === 4 ? <svg width="30" height="30" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                          <g fill="#000000">
                            <path fillRule="evenodd" d="M22.062 25.602L11.33 5.416a1 1 0 1 1 1.766-.939l10.733 20.186l1.522-.81a4 4 0 0 1 5.41 1.655l.648 1.218l6.869 10.055l-14.249 7.576l-4.495-11.318l-.647-1.218a4 4 0 0 1 1.654-5.41l1.522-.809Zm-.583 2.575l4.81-2.557a2 2 0 0 1 2.705.827l.648 1.217l-8.343 4.436l-.647-1.218a2 2 0 0 1 .827-2.705Zm.83 6.432l2.753 6.933l1.834-.975l-2.165-4.215l1.78-.914l2.152 4.19l6.702-3.564l-4.208-6.16l-8.848 4.705Z" clipRule="evenodd" />
                            <path d="M16.36 35.231a1 1 0 0 1 1.28 1.537l-.001.001l-.002.002l-.003.002l-.01.008l-.03.025l-.103.079c-.087.065-.21.154-.367.26c-.315.21-.77.484-1.344.758A11.149 11.149 0 0 1 11 39a1 1 0 1 1 0-2a9.15 9.15 0 0 0 3.92-.903a8.836 8.836 0 0 0 1.094-.617a5.93 5.93 0 0 0 .337-.24l.01-.01v.001Zm3.195 6.601a1 1 0 0 0-1.11-1.664l-.002.002l-.02.012l-.086.055a14.28 14.28 0 0 1-1.618.85c-1.07.474-2.42.913-3.719.913a1 1 0 1 0 0 2c1.702 0 3.35-.561 4.531-1.086a16.244 16.244 0 0 0 1.863-.979a8.43 8.43 0 0 0 .114-.072l.032-.021l.01-.006l.005-.004Z" />
                          </g>
                        </svg> : null
                      }
                      <div style={{ paddingBottom: '0px' }} >{ele}</div>
                    </div>
                  ))
                }
                <div className="d-flex gap-3 align-items-center" ><svg width="30" height="30" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke="#000000" strokeLinejoin="round" strokeWidth="32" d="m57.49 47.74l368.43 368.43a37.28 37.28 0 0 1 0 52.72a37.29 37.29 0 0 1-52.72 0l-90-91.55a32 32 0 0 1-9.2-22.43v-5.53a32 32 0 0 0-9.52-22.78l-11.62-10.73a32 32 0 0 0-29.8-7.44a48.53 48.53 0 0 1-46.56-12.63l-85.43-85.44C40.39 159.68 21.74 83.15 57.49 47.74Z" />
                  <path fill="none" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32" d="m400 32l-77.25 77.25A64 64 0 0 0 304 154.51v14.86a16 16 0 0 1-4.69 11.32L288 192m32 32l11.31-11.31a16 16 0 0 1 11.32-4.69h14.86a64 64 0 0 0 45.26-18.75L480 112m-40-40l-80 80M200 368l-99.72 100.28a40 40 0 0 1-56.56 0h0a40 40 0 0 1 0-56.56L128 328" />
                </svg> <div style={{ paddingBottom: '0px' }} >Restaurant</div></div>
                <div className="d-flex gap-3 align-items-center" ><svg width="30" height="30" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                  <path fill="#000000" d="M468.479 361.5c-9.072-4.233-20.361-9.5-41.054-9.5s-31.983 5.268-41.053 9.5c-7.782 3.631-13.928 6.5-27.523 6.5s-19.739-2.868-27.52-6.5c-9.071-4.232-20.359-9.5-41.052-9.5s-31.981 5.269-41.051 9.5c-7.781 3.631-13.926 6.5-27.519 6.5s-19.737-2.868-27.517-6.5c-9.07-4.232-20.358-9.5-41.05-9.5s-31.981 5.269-41.051 9.5c-7.781 3.631-13.926 6.5-27.519 6.5s-19.738-2.868-27.519-6.5C47.981 357.269 36.692 352 16 352v32c13.593 0 19.738 2.868 27.519 6.5c9.07 4.232 20.359 9.5 41.051 9.5s31.981-5.269 41.051-9.5c7.781-3.631 13.926-6.5 27.519-6.5s19.737 2.868 27.517 6.5c9.07 4.232 20.358 9.5 41.05 9.5s31.981-5.269 41.051-9.5c7.781-3.631 13.927-6.5 27.519-6.5s19.739 2.868 27.52 6.5c9.071 4.232 20.359 9.5 41.052 9.5s31.983-5.268 41.054-9.5c7.781-3.631 13.928-6.5 27.522-6.5s19.741 2.868 27.521 6.5c9.072 4.233 20.361 9.5 41.054 9.5v-32c-13.594 0-19.741-2.868-27.521-6.5ZM427.425 448c-20.693 0-31.983 5.268-41.053 9.5c-7.782 3.631-13.928 6.5-27.523 6.5s-19.739-2.868-27.52-6.5c-9.071-4.232-20.359-9.5-41.052-9.5s-31.981 5.269-41.051 9.5c-7.781 3.631-13.926 6.5-27.519 6.5s-19.737-2.868-27.517-6.5c-9.07-4.232-20.358-9.5-41.05-9.5s-31.981 5.269-41.051 9.5c-7.781 3.631-13.926 6.5-27.519 6.5s-19.738-2.868-27.519-6.5C47.981 453.269 36.692 448 16 448v32c13.593 0 19.738 2.868 27.519 6.5c9.07 4.232 20.359 9.5 41.051 9.5s31.981-5.269 41.051-9.5c7.781-3.631 13.926-6.5 27.519-6.5s19.737 2.868 27.517 6.5c9.07 4.232 20.358 9.5 41.05 9.5s31.981-5.269 41.051-9.5c7.781-3.631 13.927-6.5 27.519-6.5s19.739 2.868 27.52 6.5c9.071 4.232 20.359 9.5 41.052 9.5s31.983-5.268 41.054-9.5c7.781-3.631 13.928-6.5 27.522-6.5s19.741 2.868 27.521 6.5c9.072 4.233 20.361 9.5 41.054 9.5v-32c-13.594 0-19.741-2.868-27.521-6.5c-9.072-4.232-20.361-9.5-41.054-9.5ZM248 272h144v56h32V115.878a47.8 47.8 0 0 1 8.446-27.193L482.417 16h-38.834l-37.507 54.556A79.67 79.67 0 0 0 392 115.878V160H248v-44.122a47.8 47.8 0 0 1 8.446-27.193L306.417 16h-38.834l-37.507 54.556A79.67 79.67 0 0 0 216 115.878V328h32Zm0-80h144v48H248Z" />
                </svg> <div style={{ paddingBottom: '0px' }} >Pool</div></div>
                <div className="d-flex gap-3 align-items-center" ><svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke="#000000" d="M10 19v4.5m0-4.5c0-4 3.167-9.806 7.063-13.053L18.5 4.75V4.5h-4.973M10 19c0-4-3.167-9.806-7.063-13.053L1.5 4.75V4.5h12.027M10 23.5H5m5 0h5m-9.5-15h9m3.5 1a4.5 4.5 0 1 0-4.473-5" />
                </svg> <div style={{ paddingBottom: '0px' }} >Hotel Bar</div></div>
              </div>
            </div>
          </div>
        </div>
        <div className='col-md-6 images ' >
          <CarouselImage name={hotel?.name} imageOne={hotel?.imageOne} imageTwo={hotel?.imageTwo} imageThree={hotel?.imageThree} />
        </div>
      </div>
      <div className='row m-5'>
        <h4>Reviews</h4>
        {
          hotel?.comments?.map((ele, index) => (
            <div className="d-flex" key={ele.id} >
              <div className='col-1 my-3' >
                {
                  index === 0 ?
                    <img width={"100%"} style={{ borderRadius: '50%' }} src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="user one" /> : <img width={"100%"} style={{ borderRadius: '50%' }} src='https://images.unsplash.com/photo-1499887142886-791eca5918cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80' alt='user two' />
                }
              </div>
              <div className='col-6 p-3' >
                <h5 style={{ fontWeight : 'bold' }} >{ele.name}</h5>
                <p>{ele.comment}</p>
              </div>
            </div>
          ))
        }
      </div>
    </DIV>
  )
}

export default SingleHotel

const DIV = styled.div`


  .image-container > img {
    text-align : center;
    margin : auto;
  }


  .title {
    font-weight: bold;

  }

  h3 {
    font-weight: bold;
  }

  .amenities {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .contact {
    font-size: 12px;
  }

  .butotn {
        background-color : #028000;
        outline : none;
        border: 0;
        border-radius: 5px;
        padding: 12px 20px;
        color : white;
    }

`
//   "smoking_allowed": true,
//   "price": 21000,
//       {
//           "id": 1,
//           "name": "Joyce",
//           "comment": "Excellent location, within walking distance from stations, shopping malls, food. Love the fact that we can walk to Labi, so near and convenient. Hotel also has proper lobby the washing machine facilities and airport transfer"
//       },
//       {
//           "id": 2,
//           "name": "Julia",
//           "comment": "Comfortabel hotel, great location, friendly and helpful staff. A comfortable and convenient location to start our trip in Tokyo. Would come back."
//       }
//   ]
// }