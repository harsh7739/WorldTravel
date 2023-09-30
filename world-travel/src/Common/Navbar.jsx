import React, { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import logo from '../Common/logo/logo2.png'
// import logo from "./logo/logo.png.png";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  // Function to handle scroll events
  const handleScroll = () => {
    // Get the current scroll position
    const scrollY = window.scrollY;

    // Set the background color based on the scroll position
    if (scrollY > 100) {
      setBackgroundColor("black"); // Change to your desired background color
    } else {
      setBackgroundColor("transparent");
    }
  };

  // Add scroll event listener when the component mounts
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  console.log(sidebar);

  return (
    <NAV style={{ backgroundColor : `${backgroundColor}`, transition: "background-color 0.8s ease"}} className="container-fluid nav px-5">
      <div className="cont">
        <div className="" >
          <img className="logo" src={logo} alt="logo" />
        </div>
        <div className="d-none d-sm-flex">
          <Link to="/" className="nav-link">
            Home
          </Link>

          <Link to="/about" className="nav-link">
            About
          </Link>

          <Link to="/message" className="nav-link">
            Message
          </Link>

          <Link to="/destination" className="nav-link">
            Destination
          </Link>
        </div>
        <div className="d-sm-none d-flex">
          <div onClick={() => handleSidebar()}>
            <Hamburger />
          </div>
          {sidebar ? (
            <SIDEBAR>
              <div style={{ textAlign: "center" }}>
                <br />
                <svg
                  onClick={handleSidebar}
                  style={{ margin: "auto" }}
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g fill="none" fillRule="evenodd">
                    <path d="M24 0v24H0V0h24ZM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018Zm.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022Zm-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01l-.184-.092Z" />
                    <path
                      fill="#000000"
                      d="m12 14.121l5.303 5.304a1.5 1.5 0 0 0 2.122-2.122L14.12 12l5.304-5.303a1.5 1.5 0 1 0-2.122-2.121L12 9.879L6.697 4.576a1.5 1.5 0 1 0-2.122 2.12L9.88 12l-5.304 5.303a1.5 1.5 0 1 0 2.122 2.122L12 14.12Z"
                    />
                  </g>
                </svg>
              </div>
              <Link style={{ color: "black" }} to="/" className="nav-link">
                Home
              </Link>

              <Link style={{ color: "black" }} to="/about" className="nav-link">
                About
              </Link>

              <Link
                style={{ color: "black" }}
                to="/message"
                className="nav-link"
              >
                Message
              </Link>

              <Link
                style={{ color: "black" }}
                to="/destination"
                className="nav-link"
              >
                Destination
              </Link>
            </SIDEBAR>
          ) : null}
        </div>
      </div>
    </NAV>
  );
};

export default Navbar;

const SIDEBAR = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  border: 1px solid white;
  background-color: white;
  height: 110vh;
  animation: sidebar ease 0.8s;
  text-align: center;

  @keyframes sidebar {
    0% {
      right: -20%;
    }
    100% {
      right: 0;
    }
  }
`;

const NAV = styled.div`
  position: fixed;

  z-index: 3;

  .cont {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .nav-link {
    color: white;
    /* font-size: 82%; */
    font-weight: bold;
  }

  .logo-container {
    height : 40px;
    width: 40px;
    border: 1px solid;
  }

  .logo {
    width: 12%;
  }

  @media screen and (max-width: 410px) and (min-width: 200px) {
    .logo {
      width: 20%;
    }
  }
 
  @media screen and (max-width: 820px) and (min-width: 410px) {
    .logo {
      width: 25%;
    }
  }

  @media screen and (max-width: 742px) and (min-width: 577px) {
    .logo {
      width: 35%;
    }
  }

  @media screen and (max-width: 845px) and (min-width: 821px) {
    .logo {
      width: 25%;
    }
  }

  @media screen and (min-width: 846px) and (max-width: 1100px) {
    /* .full-screen {
      display: none;
    } */

    .logo {
      width: 20%;
    }
  }
`;

{
  /* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="">
            <Link to="/message" className="nav-link">Message</Link>
          </li>
          <li className="">
            <Link to="/destination" className="nav-link">Destination</Link>
          </li>
        </ul> */
}
