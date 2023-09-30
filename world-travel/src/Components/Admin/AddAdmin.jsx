import React, { useEffect, useState } from "react";
import adminPic from '../Image/profile-pic.png';
import logo from "../Image/LogoImage.png"
import styled from "styled-components";
import {
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    useDisclosure,
    Button,
    Center,
} from "@chakra-ui/react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BiSolidDashboard } from 'react-icons/bi';
import { IoMdAddCircle } from "react-icons/io";
import { HiOutlineLogout } from "react-icons/hi";

import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Box,
    Select,
    Heading,
    Input,
    Text
} from "@chakra-ui/react";
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
} from "@chakra-ui/react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteProduct, editProduct, getProduct, postUsers, getUsers, deleteUsers } from "../Admin/AdminReducer/action";
import { Spinner } from "@chakra-ui/spinner";

const initState = {
    ind: 0,
    name: "",
    id: "",
};
export default function Admin({options}) {
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
        about: '',
        price: 0,
        images: '',
    });

    const [images, setImages] = useState([]);
    const [city, setCity] = useState('');
    const [eprice, seteprice] = useState('');
    const [country, setCountry] = useState('');
    const [id, setid] = useState(0);

    const navigate = useNavigate();
    const { isOpen, onOpen, onClose } = useDisclosure();
    const handleClick = () => {
        dispatch(getProduct())
    }
    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleImages = (e) => {
        if (e.target.value !== '') {
            setProduct({ ...product, images: e.target.value });
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
                rating: 0,
                city: '',
                country: '',
                locality: '',
                about: '',
                price: 0,
                images: '',
            });
            document.getElementById("form").reset();
        } catch (error) {
            console.error('Error adding product:', error);
            showErrorToast('Error adding product. Please try again.');
        }
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
                showSuccessToast('Product Deleted.');
                dispatch(getProduct());
            });
        }
    };
    const [data, setData] = useState(initState);
    const users = useSelector((store) => store.adminReducer.users);
    const {
        isOpen: addUsersModalOpen,
        onOpen: onAddUsersModalOpen,
        onClose: onAddUsersModalClose,
    } = useDisclosure();


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

    useEffect(() => {
        dispatch(getUsers());
    }, [dispatch]);

    const handleDelete = (id) => {
        dispatch(deleteUsers(id));
    };

    const showdetails = (id) => {
        const product = destinations.find((el) => el.id === id);
        console.log(destinations)
        if (product) {
            setCity(product.city);
            setCountry(product.country);
            // seteprice(product.price);
            setImages(product.images)
            setid(product.id);
        }
    };

    const handleEditProduct = () => {
        const payload = {
            city: city,
            price: +eprice,
            country: country,
            // image:images
        };

        dispatch(editProduct(id, payload)).then(() => {
            showSuccessToast('Product Details have been updated');
            onClose();
            dispatch(getProduct());
        });
    };

    const handleUser = ()=>{
        dispatch(getUsers())
    }
    // const {
    //     isOpen: addAdminModalOpen,
    //     onOpen: onAddAdminModalOpen,
    //     onClose: onAddAdminModalClose,
    //   } = useDisclosure();
    

      

    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', float: 'right', marginRight: '20px', marginTop: '20px' }}>
                <div>
                    <p>Hey, <b>Admin</b></p>
                    <p style={{ marginTop: '-20px', marginLeft: '40px' }}>admin</p>
                </div>
                <div>
                    <img
                        style={{
                            width: ' 2.8rem',
                            height: '2.8rem',
                            borderRadius: '50%',
                            overflow: 'hidden',
                            marginLeft: '15px',
                            marginTop: '-10px',

                        }}
                        src={adminPic}
                        alt=""
                    />
                </div>
            </div>
            <DIV>
                <Tabs
                    // variant="soft-rounded"
                    // colorScheme="blue"
                    sx={{ display: "flex" }}
                >
                    <TabList style={{
                        position: "sticky",
                        top: "0",
                    }}
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100vh",
                            width: "30%",
                            padding: "20px",
                            gap: "3%",
                        }}
                    >
                        <img
                            src={logo}
                            alt=""
                            onClick={() => navigate("/")}
                            style={{
                                cursor: "pointer", width: "100px", marginLeft: "20px", position: "sticky",
                                top: "0%"
                            }}
                        />
                        <DIV>
                            <Tab className='list-group-item py-2' style={{ marginTop: "20px" }}>
                                <BiSolidDashboard />
                                <span> Dashboard</span>
                            </Tab>
                            <Tab className='list-group-item py-2 ' onClick={handleClick}>
                                <i className="bi bi-table"></i>
                                <span>Products</span>
                            </Tab>
                            <Tab className='list-group-item py-2' onClick={handleUser}>
                                <i className='bi bi-people'></i>
                                <span >Add Users</span>
                            </Tab>
                            <Tab className='list-group-item py-2' >
                                <i className='bi bi-clipboard-data '></i>
                                <span >Analytics</span>
                            </Tab>

                            <Tab className='list-group-item py-2' onClick={() => navigate("/")}>
                                <HiOutlineLogout />
                                <span> Logout</span>
                            </Tab>
                        </DIV>
                    </TabList>
                    <TabPanels sx={{ margin: "2%" }}>
                        <TabPanel className="addProduct">

                            <TABFORM>
                                {/* <div style={{ display: 'flex' }}> */}
                                <div style={{ marginTop: '50px', height: "100px", marginLeft: '60px', display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                                    <div className='division'>

                                        <p style={{ fontWeight: 'bolder', paddingTop: "10px", fontSize: "20px" }}> Add Products</p>
                                        <p style={{ fontSize: '16px', marginTop: '-10px' }}>Add details of the product here !</p>
                                    </div>
                                    <div style={{ marginRight: '40px', fontSize: '32px' }}>
                                        <button onClick={handleToggle}> <IoMdAddCircle /></button>
                                    </div>
                                </div>

                                {toggle && (
                                    <div >
                                        {/* <DVIVS> */}
                                        <Tabs >
                                            <TabPanels sx={{ margin: '2%' }}>
                                                <TabPanel className="addProduct">
                                                    <form action="" onSubmit={handleAddProduct} id="form">
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
                                                            type="text"
                                                            placeholder="Locality"
                                                            onChange={(e) =>
                                                                setProduct({ ...product, locality: e.target.value })
                                                            }
                                                        />
                                                        <input
                                                            required
                                                            type="text"
                                                            placeholder="About"
                                                            onChange={(e) =>
                                                                setProduct({ ...product, about: e.target.value })
                                                            }
                                                        />
                                                        <input
                                                            required
                                                            type="number"
                                                            placeholder="Rating"
                                                            onChange={(e) =>
                                                                setProduct({ ...product, rating: +e.target.value })
                                                            }
                                                        />
                                                        <button style={{ marginTop: '20px' }}>Submit</button>
                                                    </form>
                                                </TabPanel>
                                            </TabPanels>
                                        </Tabs>
                                        {/* </DVIVS> */}
                                    </div>

                                )}
                                {/* </div> */}
                            </TABFORM>
                        </TabPanel>
                        <DVIVS>
                            {isError ? ("Error") : ("")}
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
                                <TabPanel id="editProduct" style={{ marginTop: "50px" }} >
                                    <Center>
                                        <TableContainer borderRadius={8} boxShadow={"md"} m={8} p={8} >
                                            <Table variant="striped" colorScheme="grey">
                                                <Thead>
                                                    <Tr style={{ backgroundColor: "skyblue" }} >
                                                        <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>City</Th>
                                                        <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Country</Th>
                                                        <Th sx={{ textAlign: 'center' }} w={"100%"} style={{ fontSize: "20px" }}>Image</Th>
                                                        <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Locality</Th>
                                                        {/* <Th sx={{ textAlign: 'center' }}>Price</Th> */}
                                                        <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Edit</Th>
                                                        <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Delete</Th>
                                                        {/* <Th sx={{ textAlign: 'center' }}>View</Th> */}
                                                    </Tr>
                                                </Thead>
                                                <Tbody>

                                                    {Array.isArray(destinations) &&
                                                        destinations.map((e) => (
                                                            <Tr key={e.id} size="lg">
                                                                <Td sx={{ textAlign: 'center' }}>{e.city}</Td>
                                                                <Td sx={{ textAlign: 'center' }}>{e.country}</Td>
                                                                <Td sx={{ textAlign: 'center' }} size="lg"  >
                                                                    <img src={e.image} alt="" />
                                                                </Td>
                                                                <Td sx={{ textAlign: 'center' }}>{e.locality}</Td>
                                                                {/* <Td sx={{ textAlign: 'center' }}>{e.rating}</Td> */}
                                                                <Td sx={{ textAlign: 'center' }} w={"200px"}>
                                                                    <button onClick={() => { onOpen(); showdetails(e.id); }} id="edit">
                                                                        Edit
                                                                    </button>
                                                                </Td>
                                                                <Td sx={{ textAlign: 'center' }}>
                                                                    <button onClick={() => handleDeleteProduct(e.id)} id="delete">
                                                                        Delete
                                                                    </button>
                                                                </Td>
                                                                {/* <Td sx={{ textAlign: 'center' }}>
                                                            <button onClick={() => handleViewProduct(e.id)} id="view">
                                                                View
                                                            </button>
                                                        </Td> */}
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
                                </TabPanel>
                            )}
                        </DVIVS>
                        <TabPanel>
                            <Center>
                                <Box
                                    gap={8}
                                    w="70%"
                                    // border="1px solid red"
                                    display="flex"
                                    justifyContent="space-evenly"
                                    alignItems="baseline"
                                    m={8}
                                    p={8}
                                    borderRadius={8}
                                    boxShadow={"md"}
                                >
                                    <Box>
                                        <Button onClick={onAddUsersModalOpen} boxShadow={"md"} style={{textAlign:"center",paddingTop:"5px"}}>
                                            {/* <img src={logo} alt="" width={30} /> */}
                                            {/* <BsPersonFillAdd/> */}
                                             <Text>Add New Users</Text>
                                        </Button>

                                        <Modal isOpen={addUsersModalOpen} onClose={onAddUsersModalClose}>
                                            <ModalOverlay />
                                            <ModalContent>
                                                <ModalHeader>Add New Users</ModalHeader>
                                                <ModalCloseButton />
                                                <ModalBody>
                                                    <form onSubmit={handleSubmit} >
                                                        <Heading as="h5" size="sm" pb={4}>
                                                            Id:
                                                        </Heading>
                                                        <Input
                                                            type="number"
                                                            placeholder="User Id"
                                                            mb={4}
                                                            name="ind"
                                                            value={data.ind}
                                                            onChange={handelChange}
                                                        />
                                                        <Heading as="h5" size="sm" pb={4}>
                                                            Users Name:
                                                        </Heading>
                                                        <Input
                                                            type="text"
                                                            placeholder="User Name"
                                                            mb={4}
                                                            name="name"
                                                            value={data.name}
                                                            onChange={handelChange}
                                                        />
                                                        <Heading as="h5" size="sm" pb={4}>
                                                            Users Email:
                                                        </Heading>
                                                        <Input
                                                            type="email"
                                                            placeholder="User Email"
                                                            mb={4}
                                                            name="id"
                                                            value={data.id}
                                                            onChange={handelChange}
                                                        />
                                                        <Center>
                                                            <Button variant="solid" type="submit">
                                                                Add Users
                                                            </Button>
                                                        </Center>
                                                    </form>
                                                </ModalBody>

                                            </ModalContent>
                                        </Modal>
                                    </Box>

                                    <Box display="flex" gap={8}>
                                        <Select w="16rem" boxShadow={"md"}>
                                            <option value="">Sort by Name</option>
                                        </Select>
                                    </Box>
                                </Box>
                            </Center>

                            <Center>
                                <TableContainer w={"70%"} borderRadius={8} boxShadow={"lg"} m={8} p={8}>
                                    <Table>
                                        <Thead>
                                            <Tr>
                                                <Th>Id</Th>
                                                <Th>Users Name</Th>
                                                <Th>Users Email</Th>
                                                <Th>Delete</Th>
                                            </Tr>
                                        </Thead>
                                        <Tbody>
                                            {Array.isArray(users) &&users.map((el) => (
                                                <Tr key={el.id}>
                                                    <Td>{el.ind}</Td>
                                                    <Td>{el.name}</Td>
                                                    <Td>{el.id}</Td>
                                                    <Td>
                                                        <Button onClick={() => handleDelete(el.id)} id="delete">Delete</Button>
                                                    </Td>
                                                </Tr>
                                            ))}
                                        </Tbody>
                                    </Table>
                                </TableContainer>
                            </Center>
                        </TabPanel>
                         {/* <TabPanel>
                      <Center>
                     <CHARTDIV>
                     
                      
</CHARTDIV>

<Bar options={options} data={data} />;
                      </Center>
                        </TabPanel>  */}
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
            </DIV>

        </>
    );
}
const DIV = styled.div`
.list-group-item
{
    margin-bottom:15px;
}
  .tab {
    font-size: 24px;
    display: flex;
    align-items: center;
    /* gap: 5px; */
    color: black;
  }
  span{
    margin-left:15px;
    /* margin-bottom:15px; */
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
      width: 35%;
      border: 2px solid black;
      height: 60px;
      padding: 10px;
      font-size: 18px;
      border-radius: 5px;
    }
  }
  /* .editProduct{
    margin-top:"50px"
  } */
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
`;
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
`;
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
    /* margin-top:20px; */
    /* height: 80vh; */
    /* width:800px; */
   
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
  }`

const CHARTDIV =styled.div`
.chart {
  margin: 20px;
  padding: 20px;
  -webkit-box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 15px -10px rgba(0, 0, 0, 0.75);
}

.chartTitle {
  margin-bottom: 20px;
}`