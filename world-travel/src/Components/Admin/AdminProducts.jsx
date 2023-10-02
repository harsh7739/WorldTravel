import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import { IoMdAddCircle } from "react-icons/io";
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
import { Avatar, Rate, Space, Typography } from "antd";
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useDispatch, useSelector } from "react-redux";
import { addProduct, deleteHotel, deleteProduct, editHotels, editProduct, getHotels } from "../Admin/AdminReducer/action";
import { Spinner } from "@chakra-ui/spinner";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import styled from 'styled-components';
// import AdminProducts from './AdminProducts';

const initState = {
  ind: 0,
  name: "",
  id: "",
};

const AdminProducts = () => {


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
  const [hotel, setHotels] = useState({
    
    name: '',
    price: 0,
    imageOne: '',
  });

  const [images, setImages] = useState([]);
  const [name, setName] = useState('');
  const [eprice, seteprice] = useState('');  const [imagesOne,setImagesOne] = useState('');
  const [cost,setCost]  = useState("")
  const [id, setid] = useState(0);


  const { isOpen, onOpen, onClose } = useDisclosure();
 
  useEffect(() => {
    dispatch(getHotels());
  }, [dispatch]);


  
  const hotels = useSelector((store) => store.adminReducer.hotels);

  const isLoading = useSelector((store) => store.adminReducer.isLoading);
  const isError = useSelector((store) => store.adminReducer.isError);

  const handleDeleteHotel = (id) => {
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
      dispatch(deleteHotel(id)).then((res) => {
        showSuccessToast('Hotel Deleted.');
        dispatch(getHotels());
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
 

  const handleImagesOne = (e) => {
    if (e.target.value !== '') {
        setHotels({ ...hotel, imageOne: e.target.value });
    }
};

  const showdetails = (id) => {
    const hotel = hotels.find((el) => el.id === id);
    console.log(hotel)
    if (hotel) {
      setName(hotel.name);
      seteprice(hotel.price);
      setImages(hotel.imageOne)
      setid(hotel.id);
    }
  };

  const handleEditHotel = () => {
    const payload = {
      name: name,
      price: +eprice,
      // accommodation: accommodation,
      // image:images
    };

    dispatch(editHotels(id, payload)).then(() => {
      showSuccessToast('Hotel Details have been updated');
      onClose();
      dispatch(getHotels());
    });
  };

 
  return (
    <div>
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
            <TableContainer borderRadius={8} boxShadow={"md"} m={8} p={8} w={{ base: "100%" }}>
              <Table variant="striped" colorScheme="grey" w="100%" style={{ marginLeft: "-15px" }}>
                <Thead>
                  <Tr style={{ backgroundColor: "skyblue" }} >
                    <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Name</Th>
                    <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Image</Th>
                    <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Price</Th>
                    <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Edit</Th>
                    <Th sx={{ textAlign: 'center' }} style={{ fontSize: "20px" }}>Delete</Th>
                  </Tr>
                </Thead>
                <Tbody>

                  {Array.isArray(hotels) &&
                    hotels.map((e) => (
                      <Tr key={e.id} size="lg">
                        <Td className='tdiv' sx={{ textAlign: 'center' }}>{e.name}</Td>
                        {/* <Td className='tdiv' sx={{ textAlign: 'center' }}>{e.accommodation}</Td> */}
                        <Td className='tdiv' sx={{ textAlign: 'center' }} size="lg"  >
                          <img src={e.imageOne} alt="" />
                        </Td>
                        <Td className='tdiv' sx={{ textAlign: 'center' }}>{e.price}</Td>
                        {/* <Td className='tdiv' sx={{ textAlign: 'center' }}>{e.rating}</Td> */}
                        <Td className='tdiv' sx={{ textAlign: 'center' }} w={"200px"}>
                          <button onClick={() => { onOpen(); showdetails(e.id); }} id="edit">
                            Edit
                          </button>
                        </Td>
                        <Td className='tdiv' sx={{ textAlign: 'center' }}>
                          <button onClick={() => handleDeleteHotel(e.id)} id="delete">
                            Delete
                          </button>
                        </Td>

                      </Tr>
                    ))
                  }
                 
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
                      value={name}
                      placeholder="name"
                      onChange={(e) => setName(e.target.value)}
                    />
                    {/* <input
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
                      value={accommodation}
                      placeholder="accommodation"
                      onChange={(e) => setAccommodation(e.target.value)}
                  /> */}
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
                      onClick={handleEditHotel}
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

      {/* </DVIVS> */}

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

      {/* </div> */}
    </div>
  )
}

export default AdminProducts