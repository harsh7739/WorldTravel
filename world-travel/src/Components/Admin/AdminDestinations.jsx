import React, { useState, useEffect } from 'react'
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useDisclosure,
    Button,
    Center,
    Spinner,
} from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Table, Thead, Tbody, Tr, Th, Td, TableContainer, Box, Select, Heading, Input, Text
} from "@chakra-ui/react";
import {
    Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton,
} from "@chakra-ui/react";
import styled from 'styled-components';
import AdminProducts from './AdminProducts';
// import Pagination from './Pagination';
import { useDispatch, useSelector } from 'react-redux';
import {deleteProduct, editProduct, getProduct, postUsers, getUsers, getHotels } from "../Admin/AdminReducer/action";

const initState = {
    ind: 0,
    name: "",
    id: "",
};

const AdminDestinations = () => {

    const [product, setProduct] = useState({
        rating: 0,
        city: '',
        country: '',
        locality: '',
        estimated_price: 0,
        image: '',
    });
    const [images, setImages] = useState("");
    const [name, setName] = useState("");
    // const [imagesOne,setImagesOne] = useState('');
    // const [cost,setCost]  = useState("")
    const [city, setCity] = useState('');
    const [eprice, seteprice] = useState('');
    const [country, setCountry] = useState('');
    const [id, setid] = useState(0);
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState("destinations");

    const handleTab = () => {
        dispatch(getHotels())
        console.log("hotels")
    }
    const handleTabChange = (tabName) => {
        setActiveTab(tabName);
    };
    const showSuccessToast = (message) => {
        toast.success(message, {
            position: 'top-center',
            autoClose: 5000,
        });
    };

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    const showErrorToast = (message) => {
        toast.error(message, {
            position: 'top-center',
            autoClose: 5000,
        });
    };

    const destinations = useSelector((store) => store.adminReducer.destinations);

    const isLoading = useSelector((store) => store.adminReducer.isLoading);
    const isError = useSelector((store) => store.adminReducer.isError);

    const handleDeleteProduct = (id) => {
        if (isLoading) {
            return (
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <Spinner
                        thickness='4px'
                        speed='0.65s'
                        emptyColor='gray.200'
                        color='blue.500'
                        size='xl'
                    />
                </div>
            );
        } else {
            dispatch(deleteProduct(id)).then((res) => {
                showSuccessToast('Destination Deleted.');
                dispatch(getProduct());
            });
        }
    };

    const [data, setData] = useState(initState);    

    const handelChange = (e) => {
        const { name, value } = e.target;

        setData((pre) => {
            return {
                ...pre,
                [name]: value,
            };
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postUsers(data));
        setData(initState);
    };
    const handleClick = ()=>{
        dispatch(getProduct());
    }

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);


    const showdetails = (id) => {
        const product = destinations.find((el) => el.id === id);
        console.log(destinations)
        if (product) {
            setCity(product.city);
            setCountry(product.country);
            seteprice(product.estimated_price);
            setImages(product.image)
            setid(product.id);
        }
    };

    
    const handleEditProduct = () => {
        const payload = {
            city: city,
            estimated_price: +eprice,
            country: country,
            // image:images
        };

        dispatch(editProduct(id, payload)).then(() => {
            showSuccessToast('Destination Details have been updated');
            onClose();
            dispatch(getProduct());
        });
    };

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <div>
            <DVIVS>
                <Tabs style={{ marginTop: "100px" }}>
                    <TabList>
                        <Tab onClick={handleClick} style={{ display: "flex", justifyContent: "cenetr", alignItems: "center", margin: "auto", fontSize: "20px" }} >
                            <b>Destinations</b>
                        </Tab>
                        <Tab onClick={() => handleTabChange("hotels")} style={{ display: "flex", justifyContent: "cenetr", alignItems: "center", margin: "auto", fontSize: "20px" }}>
                            <b>Hotels</b>
                        </Tab>
                    </TabList>

                    <TabPanels>
                        <TabPanel>
                            {isError ? ("Error") : ("")}
                            {isLoading ? (
                                <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
                                    <Spinner
                                        thickness='4px'
                                        speed='0.65s'
                                        emptyColor='gray.200'
                                        color='blue.500'
                                        size='xl'
                                    />
                                </div>
                            ) : (
                                <div id="editProduct"  >
                                    <Center>
                                        <TableContainer borderRadius={8} boxShadow={"md"} m={8} p={8} w={{ base: "100%", sm: "100%", md: "100%" }}>
                                            <Table variant="striped" colorScheme="grey" w="100%" style={{ marginLeft: "-15px" }}>
                                                <Thead>
                                                    <Tr style={{ backgroundColor: "skyblue" }} >
                                                        <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>City</Th>
                                                        <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Country</Th>
                                                        <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Image</Th>
                                                        {/* <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Locality</Th> */}
                                                        <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Price</Th>
                                                        <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Edit</Th>
                                                        <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Delete</Th>
                                                        {/* <Th sx={{ textAlign: 'center' }}>View</Th> */}
                                                    </Tr>
                                                </Thead>
                                                <Tbody>

                                                    {Array.isArray(destinations) &&
                                                        destinations.map((e) => (
                                                            <Tr key={e.id} size="lg">
                                                                <Td className='tdiv' sx={{ textAlign: 'center' }}>{e.city}</Td>
                                                                <Td className='tdiv' sx={{ textAlign: 'center' }}>{e.country}</Td>
                                                                <Td className='tdiv' sx={{ textAlign: 'center' }} size="lg"  >
                                                                    <img src={e.image} alt="" />
                                                                </Td>
                                                                <Td className='tdiv' sx={{ textAlign: 'center' }}>{e.estimated_price}</Td>
                                                                {/* <Td className='tdiv' sx={{ textAlign: 'center' }}>{e.rating}</Td> */}
                                                                <Td className='tdiv' sx={{ textAlign: 'center' }} w={"200px"}>
                                                                    <button onClick={() => { onOpen(); showdetails(e.id); }} id="edit">
                                                                        Edit
                                                                    </button>
                                                                </Td>
                                                                <Td className='tdiv' sx={{ textAlign: 'center' }}>
                                                                    <button onClick={() => handleDeleteProduct(e.id)} id="delete">
                                                                        Delete
                                                                    </button>
                                                                </Td>

                                                            </Tr>
                                                        ))
                                                    }
                                                    {/* )} */}
                                                </Tbody>


                                            </Table>
                                           
                                        </TableContainer>


                                    </Center>
                                    <Modal isOpen={isOpen} onClose={onClose}>
                                        <ModalOverlay />
                                        <ModalContent>
                                            <ModalHeader>Edit Product</ModalHeader>
                                            <ModalCloseButton />
                                            {isLoading ? (
                                                <div style={{ display: "flex", justifyContent: "center" }}>
                                                    <Spinner
                                                        thickness='4px'
                                                        speed='0.65s'
                                                        emptyColor='gray.200'
                                                        color='blue.500'
                                                        size='xl'
                                                    />
                                                </div>

                                            ) : (
                                                <ModalBody>
                                                    <form
                                                        action=""
                                                        style={{
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            gap: '10px',
                                                        }}
                                                    >
                                                        <input
                                                            style={{
                                                                width: '35%;',
                                                                border: '2px solid black',
                                                                height: ' 60px',
                                                                padding: '10px',
                                                                fontSize: '18px',
                                                                borderRadius: ' 5px',
                                                            }}
                                                            required
                                                            type="text"
                                                            value={city}
                                                            placeholder="City"
                                                            onChange={(e) => setCity(e.target.value)}
                                                        />
                                                        <input
                                                            style={{
                                                                width: '35%;',
                                                                border: '2px solid black',
                                                                height: ' 60px',
                                                                padding: '10px',
                                                                fontSize: '18px',
                                                                borderRadius: ' 5px',
                                                            }}
                                                            required
                                                            type="text"
                                                            value={country}
                                                            placeholder="Country"
                                                            onChange={(e) => setCountry(e.target.value)}
                                                        />
                                                        <input
                                                            style={{
                                                                width: '35%;',
                                                                border: '2px solid black',
                                                                height: ' 60px',
                                                                padding: '10px',
                                                                fontSize: '18px',
                                                                borderRadius: ' 5px',
                                                            }}
                                                            required
                                                            type="number"
                                                            placeholder="Price"
                                                            value={eprice}
                                                            onChange={(e) => seteprice(e.target.value)}
                                                        />
                                                        <Button
                                                            variant="ghost"
                                                            onClick={handleEditProduct}
                                                            sx={{
                                                                backgroundColor: '#bee3f8',
                                                                fontSize: '18px',
                                                                color: '#2c5282',
                                                                borderRadius: '20px',
                                                                fontWeight: '700',
                                                                width: '50%',
                                                                padding: '5px 20px 5px 20px',
                                                                margin: 'auto',
                                                            }}
                                                        >
                                                            Edit
                                                        </Button>
                                                    </form>

                                                </ModalBody>
                                            )}
                                        </ModalContent>

                                    </Modal>
                                </div>


                            )}
                        </TabPanel>
                        <TabPanel>
                            {activeTab === "hotels" && <AdminProducts onClick={handleTab} />}
                        </TabPanel>
                        {/* <Pagination
              totalItems={totalItems}
              page={page}
              handlePageClick={handlePageClick}
            /> */}
                    </TabPanels>

                </Tabs>
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
                {/* </Space> */}
            </DVIVS></div>
    )
}

export default AdminDestinations


const DVIVS = styled.div`
Td{
    height:"200px";
    border:"2px solid black";
}
.tab {
  font-size: 24px;
  display: flex;
  align-items: center;
  /* gap: 5px; */
  color: black;
}
.addProduct form {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  /* height: 80vh; */
  button {
    background-color: #bee3f8;
    font-size: 18px;
    color: #2c5282;
    border-radius: 20px;
    font-weight: 700;
    padding: 5px 20px 5px 20px;
  }
  input,
  select {
    /* width: 35%; */
    border: 2px solid black;
    height: 60px;
    padding: 10px;
    font-size: 18px;
    border-radius: 5px;
  }
}
#edit {
  background-color: green;
  padding: 5px 20px 5px 20px;
  color: white;
  border-radius: 5px;
  font-weight: 600;
}
#delete {
  background-color: red;
  padding: 5px 20px 5px 20px;
  color: white;
  border-radius: 5px;
  font-weight: 600;
}
#view{
    background-color: blue;
  padding: 5px 20px 5px 20px;
  color: white;
  border-radius: 5px;
  font-weight: 600;
}


@media screen and (max-width: 600px) {
/* width:90%; */
#editProduct{
    width:90%;
    margin-left:10px;
    border:2px solid black;
    margin-right:200px;
}}
.tdiv{
 width:100%;
 /* border:2px solid red;
 padding:0px;
 margin-left:-30px; */
}
Table{
    size:sm;
    width:100%;
    /* border:3px solid black;
    margin-left:-30px;
    margin-right:30px; */
    /* margin:0px;
    padding:0px; */
}
`;