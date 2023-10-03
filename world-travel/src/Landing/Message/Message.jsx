import styled from "styled-components";
import styles from "./message.module.css";
import Footer from "../HomePage/Footer";

function Message() {
  return (
    <>
      <DIV className={`${styles.mainContainer} container-fluid `}>
        <div className={`${styles.main} row d-flex align-items-center`}>
          <div className="col-xl-8 col-12 py-5 text-center">
            <div className="mainText ">
              <div className="box" id="box1">
                Message from Founder
              </div>
            </div>
          </div>
          <div className="col-xl-4 d-xl-flex d-none py-5 image">
            <img
              className="manager"
              src="https://images.pexels.com/photos/7752846/pexels-photo-7752846.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="manager"
            />
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div >
          <div className={`${styles.h1_heading} head`}>
            <h2
              style={{ fontWeight: "bold" }}
              className="w-75 font-bold m-auto my-5 "
            >
              WELCOME TO OUR WEBSITE AND THANK YOU FOR YOUR TIME SPENT ON OUR
              SITE TODAY.
            </h2>
          </div>
          <div className={styles.content_div}>
            <div>
              <p className="p-3 my-3 text-center">
                After 25 years as I look at the growth over the years since our
                inception in 1991, I am extremely proud of what we have
                achieved, and even more excited about our outlook for an equally
                promising future. We have successfully transitioned from a local
                Jalandhar, Punjab start-up to become a respected firm, garnering
                business from across the nation, while earning our clients'
                trust along the way. Customer happiness and satisfaction is the
                hallmark by which we measure our performance, and we hold
                ourselves, as do our clients, to the highest standards of
                quality. It is satisfying to know that we are able to help our
                clients fulfill their dreams of traveling and exploring the
                world.
              </p>
              <h3
                style={{ fontWeight: "bold", color: "#5278B0" }}
                className="w-75 font-bold m-auto my-5 text-center "
              >
                World Travels Successes Is Standing On Two Guiding
                Principles-Each Of Which Has Helped Define Who We Are Today:
              </h3>
              <h4
                className={`${styles.heading} d-flex align-items-center gap-3`}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#5278B0">
                    <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-4.586l-2.707 2.707a1 1 0 0 1-1.414 0L8.586 19H4a2 2 0 0 1-2-2V6zm18 0H4v11h5a1 1 0 0 1 .707.293L12 19.586l2.293-2.293A1 1 0 0 1 15 17h5V6z" />
                    <path d="M13.5 11.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm4 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z" />
                  </g>
                </svg>
                Accomplished and brilliant staff.
              </h4>
              <p>
                Among our most important assets are the extensive knowledge
                base, deep-rooted professionalism and unwavering commitment of
                our highly-committed, diverse staff. World Travel , Kandhari
                Travels and our all branches staff is at the core of who we are
                and what we do. From our Reservation Executives to our Ticketing
                Executives. Accounts Executives to our Senior Management. House-
                keeping Team is committed to keep everyone in office in clean
                and energetic environment to provide unparalleled service to our
                customers.
              </p>
              <h4
                className={`${styles.heading} d-flex align-items-center gap-3`}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="#5278B0">
                    <path d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2h-4.586l-2.707 2.707a1 1 0 0 1-1.414 0L8.586 19H4a2 2 0 0 1-2-2V6zm18 0H4v11h5a1 1 0 0 1 .707.293L12 19.586l2.293-2.293A1 1 0 0 1 15 17h5V6z" />
                    <path d="M13.5 11.5a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm4 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0zm-8 0a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0z" />
                  </g>
                </svg>
                Authentic and honest Perspective.
              </h4>
              <p>
                As we continue to grow, each new day offers a chance for us to
                work together, pursue new opportunities and improve upon the
                past. We establish in-depth relationships with our clients by
                learning their environments, challenges and goals firsthand, so
                that we can offer tangible solutions with a candid and honest
                perspective. We continue to manage our business around the
                evolving needs of our clients, so that we can be at the
                forefront of change and deliver value.
              </p>
            </div>
          </div>
        </div>
      </DIV>
      <br />
      <br />
      <Footer />
    </>
  );
}
export default Message;

const DIV = styled.div`
  .manager {
    border-radius: 50%;
    width: 50%;
  }

  .row {
    padding-top: 170px;
    position: absolute;
    width: 100%;
    top: -20%;
  }

  .mainText {
    display: inline-flex;
  }
  .box {
    padding: 20px;
    color: white;
    font-weight: bold;
    font-size: 50px;
  }

  #box1::after {
    content: "Message from Founder";
    display: flex;
    transform: rotateX(180deg);
    background-image: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 10%,
      rgba(255, 255, 255, 0.5)
    );
    -webkit-background-clip: text;
    color: transparent;
  }

  .image {
    text-align: center;
  }

  @media screen and (max-width : 614px) and (min-width : 100px) {
    .box {
      font-size : 35px;
    }
  }

  @media screen and (min-width: 768px) and (max-width: 1062px) {
    .manager {
      width: 70%;
    }
    .mainText {
      margin-top: 70px;
    }
  }

  @media screen and (min-width: 410px) and (max-width: 767px) {
    .manager {
      /* width : 40%;
        margin : auto; */
      display: none;
    }
    .mainText {
      margin-top: 200px;
    }
  }
`;
