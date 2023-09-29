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
} from "@chakra-ui/react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BiSolidDashboard } from 'react-icons/bi';
import { MdSpaceDashboard } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
import { DiGoogleAnalytics } from "react-icons/di";
import { HiOutlineLogout } from "react-icons/hi";
import { RiAdminFill, RiShoppingCartFill } from "react-icons/ri";
import { BsPencilSquare, BsPersonFillAdd } from "react-icons/bs";
import { useToast } from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
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
import { addProduct, deleteProduct, editProduct, getProduct } from "../Admin/AdminReducer/action";



export default function Admin() {
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
            setProduct({ ...product, images });
        
            try {
              const addedProduct = await dispatch(addProduct(product));
              showSuccessToast('Product Added Successfully.');
              console.log('Product added:', addedProduct);
              setProduct({
                rating: 0,
                city: '',
                country: '',
                locality: '',
                about: '',
                price: 0,
                images: '',
              });
              document.getElementById('form').reset();
            } catch (error) {
              console.error('Error adding product:', error);
              showErrorToast('Error adding product. Please try again.');
            }
          };
        
          const destinations = useSelector((store) => store.adminReducer.destinations);
          const isLoading = useSelector((store) => store.adminReducer.isLoading);
          const isError = useSelector((store) => store.adminReducer.isError);
        
          const handleDeleteProduct = (id) => {
            dispatch(deleteProduct(id)).then((res) => {
              toast({
                title: 'Product Deleted.',
                status: 'success',
                duration: 2000,
                isClosable: true,
                position: 'top-center',
              });
              dispatch(getProduct());
            });
          };
        
          const showdetails = (id) => {
            const product = destinations.find((el) => el.id === id);
            if (product) {
              setCity(product.city);
              setCountry(product.country);
              seteprice(product.price);
              setid(product.id);
            }
          };
        
          const handleEditProduct = () => {
            const payload = {
              city: city,
              price: +eprice,
              country: country,
            };
        
            dispatch(editProduct(id, payload)).then(() => {
              toast({
                position: 'top-center',
                title: 'Product Details have been updated',
                status: 'success',
                duration: 2000,
                isClosable: true,
              });
              onClose();
              dispatch(getProduct());
            });
          };
        

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
          variant="soft-rounded"
          colorScheme="blue"
          sx={{ display: "flex" }}
        >
          <TabList
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
              style={{ cursor: "pointer" }}
            />
            {/* <Tab className="tab">
              <MdSpaceDashboard />
              Dashboard
            </Tab> */}
            <Tab  className='list-group-item py-2'>
            <BiSolidDashboard />
              Dashboard
            </Tab>
            {/* <Tab  className='list-group-item py-2'>
            <i className='bi bi-person-fill'></i>
            <span >Customers</span>
            </Tab> */}
            <Tab  className='list-group-item py-2 '>
            <i className="bi bi-table"></i>
                   <span>Products</span>
            </Tab>
            <Tab  className='list-group-item py-2' >
            <i className='bi bi-clipboard-data '></i>
                  <span >Analytics</span>
                </Tab>
            <Tab  className='list-group-item py-2' >
            <i className='bi bi-people'></i>
                   <span >Customers</span>
            </Tab>
            <Tab  className='list-group-item py-2'  onClick={() => navigate("/")}>
              <HiOutlineLogout />
              Logout
            </Tab>
          </TabList>
          <TabPanels sx={{ margin: "2%" }}>
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
                     <input
                       required
                       type="number"
                       placeholder="Price"
                       onChange={(e) =>
                         setProduct({ ...product, price: e.target.value })
                       }
                     />
                     <button style={{ marginBottom: '30px', marginTop: '20px' }}>Submit</button>
                   </form>
            </TabPanel>
            <TabPanel id="editProduct" style={{marginTop:"50px"}}>
                       <TableContainer>
                         <Table variant="striped" colorScheme="teal">
                           <Thead>
                             <Tr>
                               <Th sx={{ textAlign: 'center' }}>City</Th>
                               <Th sx={{ textAlign: 'center' }}>Country</Th>
                               <Th sx={{ textAlign: 'center' }} style={{width:"100%"}}>Image</Th>
                               <Th sx={{ textAlign: 'center' }}>Locality</Th>
                               <Th sx={{ textAlign: 'center' }}>Price</Th>
                               <Th sx={{ textAlign: 'center' }}>Edit</Th>
                               <Th sx={{ textAlign: 'center' }}>Delete</Th>
                             </Tr>
                           </Thead>
                           <Tbody>
                             {destinations?.map((e) => (
                               <Tr key={e.id}>
                                 <Td sx={{ textAlign: 'center' }}>{e.city}</Td>
                                 <Td sx={{ textAlign: 'center' }}>{e.country}</Td>
                                 <Td sx={{ textAlign: 'center' }}  >
                                   <img src={e.image} style={{ display: 'block', width: '100%', margin: 'auto' }} alt="" />
                                 </Td>
                                 <Td sx={{ textAlign: 'center' }}>{e.locality}</Td>
                                 <Td sx={{ textAlign: 'center' }}>{e.price}</Td>
                                 <Td sx={{ textAlign: 'center' }}>
                                   <button onClick={() => { onOpen(); showdetails(e.id); }} id="edit">
                                     Edit
                                   </button>
                                 </Td>
                                 <Td sx={{ textAlign: 'center' }}>
                                   <button onClick={() => handleDeleteProduct(e.id)} id="delete">
                                     Delete
                                   </button>
                                 </Td>
                               </Tr>
                             ))}
                           </Tbody>
                         </Table>
              </TableContainer>
              <Modal isOpen={isOpen} onClose={onClose}>
                 <ModalOverlay />
                 <ModalContent>
                   <ModalHeader>Edit Product</ModalHeader>
                   <ModalCloseButton />
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
                 </ModalContent>
               </Modal>
            </TabPanel>
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
  .tab {
    font-size: 24px;
    display: flex;
    align-items: center;
    gap: 5px;
    color: black;
  }
  .addProduct form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    height: 80vh;
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
  .editProduct{
    margin-top:"50px"
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
`;