import React, { useState, useEffect } from 'react'
import AdminDestinations from "../Admin/AdminDestinations"
import { IoMdAddCircle } from "react-icons/io";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Center,
   
} from "@chakra-ui/react";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, editProduct, getProduct, postUsers, getUsers, deleteUsers, getHotels, addHotels, deleteHotel } from "../Admin/AdminReducer/action";


import styled from 'styled-components';


const initState = {
    ind: 0,
    name: "",
    id: "",
};


const AddProducts = () => {
    // const handleTabChange = (tabName) => {
    //     setActiveTab(tabName);
    // };
    // const [activeTab, setActiveTab] = useState("hotels");

    const showSuccessToast = (message) => {
        toast.success(message, {
            position: 'top-center',
            autoClose: 5000,
        });
    };

    const showErrorToast = (message) => {
        toast.error(message, {
            position: 'top-center',
            autoClose: 5000,
        });
    };

    const dispatch = useDispatch();
    const [toggle, setToggle] = useState(false);
    const [product, setProduct] = useState({
        rating: 0,
        city: '',
        country: '',
        locality: '',
        estimated_price: 0,
        image: '',
    });

    const [hotel, setHotels] = useState({
        name: '',
        price: 0,
        imageOne: '',
    })
    

   
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleImages = (e) => {
        if (e.target.value !== '') {
            setProduct({ ...product, image: e.target.value });
        }
    };
    const handleImagesOne = (e) => {
        if (e.target.value !== '') {
            setHotels({ ...hotel, imageOne: e.target.value });
        }
    };

    const handleAddProduct = async (e) => {
        e.preventDefault();

        try {
            const addedProduct = await dispatch(addProduct(product));

            showSuccessToast('Product Added Successfully.');
            console.log('Product added:', addedProduct);
            // Reset the product state to an empty state object
            setProduct({
                name: "",
                rating: 0,
                city: '',
                country: '',
                locality: '',
                about: '',
                estimated_price: 0,
                images: '',
            });
            document.getElementById("form").reset();
            dispatch(getProduct());
        } catch (error) {
            console.error('Error adding product:', error);
            showErrorToast('Error adding product. Please try again.');
        }
    };
    const handleAddHotels = async (e) => {
        e.preventDefault();

        try {
            const addedHotels = await dispatch(addHotels(hotel));
            console.log(hotel)
            showSuccessToast('Hotels Added Successfully.');
            console.log('Hotels added:', addedHotels);
            setHotels({
                name: '',
                price: 0,
                imageOne: '',
            });
            document.getElementById("forms").reset();
            // setActiveTab("hotels");
            dispatch(getHotels());

        } catch (error) {
            console.error('Error adding Hotels:', error);
            showErrorToast('Error adding Hotels. Please try again.');
        }
    };

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);


   

   
    return (
        <div >
            
            <div sx={{ margin: "2%" }} >
                <div className="addProduct">

                    <TABFORM>
                        <div style={{ marginTop: '50px', height: "100px", marginLeft: '100px', display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                            <div >

                                <p style={{ fontWeight: 'bolder', paddingTop: "10px", fontSize: "20px" }}> Add Products</p>
                                <p style={{ fontSize: '16px', marginTop: '-10px' }}>Add details of the product here !</p>
                            </div>
                            <div style={{ marginRight: '40px', fontSize: '42px' }}>
                                <button onClick={handleToggle}> <IoMdAddCircle /></button>
                            </div>
                        </div>

                        {toggle && (
                            <Tabs>
                                <TabList style={{ display: "flex", justifyContent: "cenetr", alignItems: "center", margin: "auto" }}>
                                    <Tab style={{ display: "flex", justifyContent: "cenetr", alignItems: "center", margin: "auto", fontSize: "20px" }}>
                                        <b>Add Destination</b>
                                    </Tab>
                                    <Tab style={{ display: "flex", justifyContent: "cenetr", alignItems: "center", margin: "auto", fontSize: "20px" }}>
                                        <b> Add Hotel</b>
                                    </Tab>
                                </TabList>
                                <TabPanels>
                                    <TabPanel>
                                        <div sx={{ margin: '2%' }}>
                                            <div className="addProduct">
                                                <form action="" onSubmit={handleAddProduct} id="form" style={{ with: "600px" }}>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="City"
                                                        onChange={(e) =>
                                                            setProduct({ ...product, city: e.target.value })
                                                        }
                                                    />
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="Country"
                                                        onChange={(e) =>
                                                            setProduct({ ...product, country: e.target.value })
                                                        }
                                                    />
                                                    <input
                                                        required
                                                        type="url"
                                                        placeholder="Image"
                                                        onChange={handleImages}
                                                    />
                                                   
                                                    <input
                                                        required
                                                        type="number"
                                                        placeholder="Price"
                                                        onChange={(e) =>
                                                            setProduct({ ...product, estimated_price: +e.target.value })
                                                        }
                                                    />
                                                   
                                                    <button style={{ marginTop: '20px', marginBottom: "30px" }}>Submit</button>
                                                </form>
                                            </div>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                        <div sx={{ margin: '2%' }}>
                                            <div className="addProduct">
                                                <form action="" onSubmit={handleAddHotels} id="forms" style={{ with: "600px" }}>
                                                    <input
                                                        required
                                                        type="text"
                                                        placeholder="Name"
                                                        onChange={(e) =>
                                                            setHotels({ ...hotel, name: e.target.value })
                                                        }
                                                    />
                                                
                                                    <input
                                                        required
                                                        type="url"
                                                        placeholder="Image"
                                                        onChange={handleImagesOne}
                                                    />
                                                    
                                                    <input
                                                        required
                                                        type="number"
                                                        placeholder="Price"
                                                        onChange={(e) =>
                                                            setHotels({ ...hotel, price: +e.target.value })
                                                        }
                                                    />

                                                    <button style={{ marginTop: '20px', marginBottom: "30px" }}>Submit</button>
                                                </form>
                                            </div>
                                        </div>

                                    </TabPanel>

                                </TabPanels>
                            </Tabs>
                        )}

                    </TABFORM>
                </div>
                <AdminDestinations/>
            </div>
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

        </div>

    )
}
export default AddProducts

const TABFORM = styled.div`
        /* border:2px solid black; */
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
  .tab {
    font-size: 24px;
    display: flex;
    align-items: center;
    /* gap: 5px; */
    color: black;
    margin-left:"-20px";
  }
  .addProduct form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
   
    button {
      background-color: #bee3f8;
      font-size: 18px;
      color: #2c5282;
      border-radius: 20px;
      font-weight: 700;
      padding: 5px 20px 5px 20px;
      margin-top:"30px";
    }
    input,
    select {
      width: 70%;
      padding-top:100px;
      margin:auto;
      display:flex;
      justify-content:center;
      align-items:center;
      border: 2px solid black;
      height: 50px;
      padding: 10px;
      font-size: 18px;
      padding-left:"20px";
      border-radius: 5px;
    }
    form
    {
        border:2px solid black;
        padding-top:20px;
        /* padding-left:"-20px" */
    }
    .division
    {
        width:50%;
    }  }`

