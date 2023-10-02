import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Navigate } from 'react-router-dom';
import styled from "styled-components";
import { RiErrorWarningFill } from "react-icons/ri";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
  Button,
} from "@chakra-ui/react";
import { useToast } from "@chakra-ui/react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { loginUser, createAccount } from "../Components/Redux/authReducer/action";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import queryString from 'query-string';

import CaptionCarousel from "../Components/CaptionCarousel";
import { ADMIN_LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "../Components/Redux/authReducer/actionTypes";

export default function LoginAndRegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const showSuccessToast = (message) => {
    toast.success(message, {
      position: "top-center",
      autoClose: 5000,
    });
  };

  const showErrorToast = (message) => {
    toast.error(message, {
      position: "top-center",
      autoClose: 5000,
    });
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {
    register: register1,
    handleSubmit: hS1,
    formState: { errors: errors1 },
  } = useForm();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  useEffect(() => {
    const params = queryString.parse(window.location.search);
    const queryEmail = params.email;
    const queryPassword = params.password;

    if (queryEmail && queryPassword) {
      // Check if the query parameters match the expected values
      const expectedAdminEmail = "admin@example.com";
      const expectedAdminPassword = "admin";

      if (queryEmail === expectedAdminEmail && queryPassword === expectedAdminPassword) {
        showSuccessToast("Login Successfully!");
        navigate("/admin"); // Redirect to the admin page
      } else {
        showErrorToast("Invalid email or password");
      }
    }
  }, []);



  const onLoginSubmit = (dat) => {
    const email = dat.Email;
    const password = dat.Password;

    dispatch(loginUser(email))
      .then((userData) => {
        if (userData && userData.data[0].password === password) {
          showSuccessToast("Login Successfully!");
          dispatch({type:LOGIN_SUCCESS})
          navigate("/");
          document.getElementById("loginform").reset();
        } else {
          showErrorToast("Invalid email or password"); // Changed error message
        }
      })
      .catch(() => {
        showErrorToast("Account Not Found. Create a new account");
      });
  };
  const onAccountCreateSubmit = (data) => {
    let obj = {
    
      name: data.Name,
      email: data.Email, 
      password: data.Password,

    };

    dispatch(createAccount(obj))
      .then(() => {
        showSuccessToast("Account Created Successfully.");
      })
      .catch(() => {
        showErrorToast("Something went wrong!");
      });

    document.getElementById("ca").reset();
  };



  return (

    <Container>
      <STYLEDIV>
        <CaptionCarousel />
      </STYLEDIV>
      <DIV>
        <Tabs variant="soft-rounded" id="modal">
          <TabList>
            <Tab>Login</Tab>
            <Tab>Signup</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <form action="" id="loginform" onSubmit={hS1(onLoginSubmit)}>
                <label style={{ marginTop: "10px" }}>Enter your Email</label>
                <input required
                  autoComplete="off"
                  {...register1("Email", {
                  })}
                  placeholder="Enter Email"
                />

                <label style={{ marginTop: "12px" }}>Enter your Password</label>
                <input required
                  type="password"
                  placeholder="Enter Password"
                  autoComplete="off"
                  {...register1("Password", {
                  })}
                />

                <br />
                <small
                  style={{
                    margin: "auto",
                    padding: "10px",
                    fontSize: "16px",
                    color: "gray",
                    fontWeight: "bold",
                    textDecoration: "underline",
                    cursor: "pointer",
                    marginBottom: "-18px",
                  }}
                  onClick={onOpen}>
                  Login As Admin
                </small>
                <br />
                <input type="submit" className="submitBtn" />
              </form>
            </TabPanel>
            <TabPanel>
              <form id="ca" onSubmit={handleSubmit(onAccountCreateSubmit)}>
                <label>Enter your Name</label>
                <input required
                  autoComplete="off"
                  {...register("Name", {
                  })}
                />

                <label style={{ marginTop: "2px" }}>Enter your Email</label>
                <input required
                  autoComplete="off"
                  {...register("Email", {
                  })}
                />

                <label>Create your Password</label>
                <input required
                  type="password"
                  autoComplete="off"
                  {...register("Password", {
                  })}
                />

                <button type="submit" className="submitBtn">Submit</button>
              </form>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Modal isOpen={isOpen} onClose={onClose} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          <ModalOverlay />
          <ModalContent style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <DVIV>

              <ModalBody className="modalBody" style={{ width: "400px", backgroundColor: "white",marginTop:"20px"}}>
                <ModalCloseButton style={{ marginLeft: "360px", marginTop: "15px" }} />
                <h1
                  className="login-title"
                  style={{
                    textAlign: "center",
                    paddingBottom: "20px",
                    fontSize: "30px",
                    fontWeight: "bold",
                  }}
                >
                  Admin Login
                </h1>
                <form
                  className="login_form"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                    fontSize: "20px",
                  }}
                >
                  <div style={{ margin: "auto", marginTop: "-20px" }}>
                    <label htmlFor="email">Email </label>
                    <br />
                    <input
                      id="email"
                      type="email"
                      placeholder="me@example.com"
                      name="email"
                      required
                      style={{
                        backgroundColor: "transparent",
                        height: "50px",
                        marginTop: "15px",
                        marginBottom: "10px",
                        border: "1px solid",
                        borderRadius: "10px",
                      }}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div style={{ margin: "auto" }}>
                    <label htmlFor="password" style={{ textAlign: "center", margin: "auto" }}>Password </label>
                    <br />
                    <input
                      id="password"
                      type="password"
                      placeholder="Password"
                      name="password"
                      required
                      style={{
                        backgroundColor: "transparent",
                        height: "50px",
                        marginTop: "15px",
                        marginBottom: "10px",
                        border: "1px solid",
                        borderRadius: "10px",
                      }}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <Button style={{ margin: "auto", width: "100px", borderRadius: "20px", height: "50px", marginBottom: "20px" }}
                    background="black"
                    _hover={{ bg: "black" }}
                    onClick={() => window.location.href = `/login?email=${email}&password=${password}`}
                    color="white"
                    type="submit"
                  >
                    <b>Log in</b>
                  </Button>
                </form>
              </ModalBody>
            </DVIV>

          </ModalContent>
        </Modal>



      </DIV>
      <ToastContainer
        position="top-center"
        margin="auto"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover

      />
    </Container>



  );
}
const Container = styled.div`
margin-top : 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  height: 600px;
  overflow: hidden;
`;
const STYLEDIV = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
  margin-top: 5px;

 
  @media screen and (min-width: 1024px) {
    width: 35%;
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    width: 100%;
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    display: none;
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    display: none;
  }
`;
const DIV = styled.div`
  /* border:2px solid red; */
  /* margin-left:-20px; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-position: center;
  position: relative;

  #modal {
    border: 2px solid black;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    
    button {
      width: 150px;
      color: black;
      background-color:transparent;
      border:none;
      height: 35px;
      font-size:large;

    }
    button[aria-selected="true"] {
      background-color: gray;
      color: white;
      font-weight: 700;
      border-radius:10px;
      
    }
    #loginform,
    #ca {
      display: flex;
      flex-direction: column;
      color: black;
      margin-top:20px;

      input {
        text-indent: 10px; 
        font-size:17px
      }
      input,
      button {

        background-color: transparent;
        height: 45px;
        margin-top: 15px;
        margin-bottom: 10px;
        border: 1px solid;
        border-radius: 10px;
      }
       .submitBtn{
        width: 50%;
        margin: auto;
        margin-top: 15px;
        color: white;
        border-radius: 50px;
        border: 0;
        background-color: gray;
        font-size: 18px;
        font-weight: 700;
        height: 40px;
        padding: 0px;
        cursor: pointer;
      }
      caret-color: #f76f22;
      p {
        display: flex;
        align-items: center;
        gap: 5px;
        padding-bottom: 5px;
        color: red;
      }
     
    
    }
  }
  @media screen and (min-width: 1024px) {
    #modal {
      width: 100%;
    }
  }
  @media screen and (min-width: 769px) and (max-width: 1024px) {
    #modal {
      width: 100%;
    }
  }
  @media screen and (min-width: 481px) and (max-width: 768px) {
    #modal {
      width: 100%;
    }
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    #modal {
      width: 100%;
    }
  }
`;

const DVIV = styled.div
  ` 
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    
    
  input{
    height:10px;
    width:300px;
  
      text-indent: 10px; 
      font-size:17px
    
  }
  ModalBody
  {
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    margin:center;
    margin-top:200px
   
  }
`;