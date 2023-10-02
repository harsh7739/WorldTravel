import React, { useEffect, useState } from "react";
import Hamburger from "./Hamburger";
import logo from "../Common/logo/logo2.png";
import { Link, useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);
  const [destination, setDestination] = useState(3);
  const [backgroundColor, setBackgroundColor] = useState("transparent");
  const location = useLocation();
  const id = useParams()
  const isAuth = useSelector((store) => store.authReducer.isAuth);
  console.log(isAuth, "isAuth");
  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 100) {
      setBackgroundColor("#4C6FA3");
    } else {
      setBackgroundColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  useEffect(() => {
    const dest = localStorage.getItem("destinationParamas")
    setDestination(dest)
  }, [location.pathname])

  console.log(location.pathname);
  const handleSidebar = () => {
    setSidebar(!sidebar);
  };

  console.log(sidebar);

  return (
    <NAV
      style={{
        backgroundColor:
          location.pathname === "/destination"
            ? "#567EB9"
            : location.pathname === "/login"
            ? "#567EB9"
            : location.pathname === `/destination/${destination}`
            ? "#567EB9"
            : location.pathname.slice(0, 7) === `/hotel/`
            ? "#567EB9"
            : `${backgroundColor}`,
        transition: "background-color 0.5s ease",
         display:location.pathname === "./admin" ? "none" : "flex"
      }}
      className="container-fluid nav px-4"
    >
      <div className="cont">
        {/* <div className=""> */}
        <img className="logo" src={logo} alt="logo" />
        {/* </div> */}
        <div className="d-none navBar d-sm-flex gap-4">
          <Link to="/" className="navLinks">
            Home
          </Link>

          <Link to="/about" className="navLinks">
            About
          </Link>

          <Link to="/message" className="navLinks">
            Message
          </Link>

          <Link to="/destination" className="navLinks">
            Destination
          </Link>
          {!isAuth ? (
            <Link to="/login" className="navLinks">
              Sign Up
            </Link>
          ) : (
            <Link className="navLinks">Profile</Link>
          )}
        </div>
        <div className="d-sm-none d-flex">
          <div onClick={() => handleSidebar()}>
            <Hamburger />
          </div>
          {sidebar ? (
            <SIDEBAR>
              <div
                style={{
                  textAlign: "center",
                  borderRadius: "50%",
                  backgroundColor: "black",
                }}
              >
                <br />
                <svg
                  onClick={handleSidebar}
                  style={{ margin: "auto" }}
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="white"
                    d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6L6.4 19Z"
                  />
                </svg>
              </div>
              <Link style={{ color: "white" }} to="/" className="navLinks">
                Home
              </Link>

              <Link style={{ color: "white" }} to="/about" className="navLinks">
                About
              </Link>

              <Link
                style={{ color: "white" }}
                to="/message"
                className="navLinks"
              >
                Message
              </Link>

              <Link
                style={{ color: "white" }}
                to="/destination"
                className="navLinks"
              >
                Destination
              </Link>
              {!isAuth ? (
                <Link to="/login" className="navLinks">
                  Sign Up
                </Link>
              ) : (
                <Link>Profile</Link>
              )}
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
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 20px;
  background-color: black;
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
  top: 0;

  z-index: 10;

  .cont {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .navLinks {
    color: white;
    font-size: 120%;
    font-weight: bold;
  }

  .navLinks:focus,
  .navLinks:hover {
    color: none;
  }

  .logo-container {
    height: 40px;
    width: 40px;
    border: 1px solid;
  }

  .logo {
    width: 8%;
  }

  @media screen and (max-width: 410px) and (min-width: 200px) {
    .logo {
      width: 16%;
    }
  }

  @media screen and (max-width: 820px) and (min-width: 410px) {
    .logo {
      width: 15%;
    }
  }

  @media screen and (max-width: 742px) and (min-width: 577px) {
    .logo {
      width: 15%;
    }
    .navLinks {
      font-size: 90%;
    }
  }

  @media screen and (max-width: 845px) and (min-width: 821px) {
    .logo {
      width: 15%;
    }
  }

  @media screen and (min-width: 846px) and (max-width: 1100px) {
    /* .full-screen {
      display: none;
    } */

    .logo {
      width: 10%;
    }
  }
`;
