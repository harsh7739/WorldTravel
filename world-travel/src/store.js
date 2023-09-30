import thunk from 'redux-thunk'
import { reducer as loginReducer } from "./Components/Redux/authReducer/reducer";

import { reducer as adminReducer } from "./Components/Admin/AdminReducer/reducer"
import { applyMiddleware, combineReducers, legacy_createStore } from "redux"

import { reducer as destinationReducer } from './Destination Page/redux/reducer'


const rootReducer = combineReducers({loginReducer, destinationReducer,adminReducer})

const store=legacy_createStore(rootReducer,applyMiddleware(thunk))

export default store;


// import React, { useState, useEffect } from 'react';
// import { BiSolidDashboard } from 'react-icons/bi';
// import { IoMdAddCircle } from 'react-icons/io';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import styled from 'styled-components';
// import adminPic from '../Image/profile-pic.png';
// import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
// import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
// import { TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
// import { deleteProduct, editProduct, getProduct } from '../Admin/AdminReducer/action';
// import { useDispatch, useSelector } from 'react-redux';
// import { useDisclosure } from '@chakra-ui/hooks';
// import { useNavigate } from 'react-router';
// import { Button } from '@chakra-ui/button';
// import { Tab, TabList } from '@chakra-ui/react';
// import { addProduct } from '../Admin/AdminReducer/action';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Admin = () => {
//   const showSuccessToast = (message) => {
//     toast.success(message, {
//       position: 'top-center',
//       autoClose: 5000,
//     });
//   };

//   const showErrorToast = (message) => {
//     toast.error(message, {
//       position: 'top-center',
//       autoClose: 5000,
//     });
//   };

//   const dispatch = useDispatch();
//   const [toggle, setToggle] = useState(false);
//   const [product, setProduct] = useState({
//     rating: 0,
//     city: '',
//     country: '',
//     locality: '',
//     about: '',
//     price: 0,
//     images: '',
//   });

//   const [images, setImages] = useState([]);
//   const [city, setCity] = useState('');
//   const [eprice, seteprice] = useState('');
//   const [country, setCountry] = useState('');
//   const [id, setid] = useState(0);

//   const navigate = useNavigate();
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   useEffect(() => {
//     dispatch(getProduct());
//   }, [dispatch]);

//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   const handleImages = (e) => {
//     if (e.target.value !== '') {
//       setProduct({ ...product, images: e.target.value });
//     }
//   };

//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     setProduct({ ...product, images });

//     try {
//       const addedProduct = await dispatch(addProduct(product));
//       showSuccessToast('Product Added Successfully.');
//       console.log('Product added:', addedProduct);
//       setProduct({
//         rating: 0,
//         city: '',
//         country: '',
//         locality: '',
//         about: '',
//         price: 0,
//         images: '',
//       });
//       document.getElementById('form').reset();
//     } catch (error) {
//       console.error('Error adding product:', error);
//       showErrorToast('Error adding product. Please try again.');
//     }
//   };

//   const destinations = useSelector((store) => store.adminReducer.destinations);
//   const isLoading = useSelector((store) => store.adminReducer.isLoading);
//   const isError = useSelector((store) => store.adminReducer.isError);

//   const handleDeleteProduct = (id) => {
//     dispatch(deleteProduct(id)).then((res) => {
//       toast({
//         title: 'Product Deleted.',
//         status: 'success',
//         duration: 2000,
//         isClosable: true,
//         position: 'top-center',
//       });
//       dispatch(getProduct());
//     });
//   };

//   const showdetails = (id) => {
//     const product = destinations.find((el) => el.id === id);
//     if (product) {
//       setCity(product.city);
//       setCountry(product.country);
//       seteprice(product.price);
//       setid(product.id);
//     }
//   };

//   const handleEditProduct = () => {
//     const payload = {
//       city: city,
//       price: +eprice,
//       country: country,
//     };

//     dispatch(editProduct(id, payload)).then(() => {
//       toast({
//         position: 'top-center',
//         title: 'Product Details have been updated',
//         status: 'success',
//         duration: 2000,
//         isClosable: true,
//       });
//       onClose();
//       dispatch(getProduct());
//     });
//   };

//   return (
//     <div>
//       <div style={{ display: 'flex', alignItems: 'center', float: 'right', marginRight: '20px', marginTop: '20px' }}>
//         <div>
//           <p>Hey, <b>Admin</b></p>
//           <p style={{ marginTop: '-20px', marginLeft: '40px' }}>admin</p>
//         </div>
//         <div>
//           <img
//             style={{
//               width: ' 2.8rem',
//               height: '2.8rem',
//               borderRadius: '50%',
//               overflow: 'hidden',
//               marginLeft: '15px',
//               marginTop: '-10px',
//             }}
//             src={adminPic}
//             alt=""
//           />
//         </div>
//       </div>
//       <div style={{ display: 'flex' }}>
//         <div className='bg-white sidebar p-2' style={{ width: '250px', marginLeft: '50px' }}>
//           <div className='m-2'>
//             <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
//             <span className='brand-name fs-4'>Yousaf</span>
//           </div>
//           <br />
//           <div>
//             <Tabs variant='soft-rounded' colorScheme='blue' sx={{ display: 'flex' }}>
//               <TabList
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   height: '100vh',
//                   width: '30%',
//                   padding: '20px',
//                   gap: '3%',
//                 }}
//               >
//                 <Tab className='list-group-item py-2'>
//                   <div className='display'>
//                     <BiSolidDashboard />
//                     <span >Dashboard</span>
//                   </div>
//                 </Tab>
//                 <Tab className='list-group-item py-2 '>
//                   <i className='bi bi-person-fill'></i>
//                   <span >Customers</span>
//                 </Tab>
//                 <Tab className="list-group-item py-2">
//                   <i className="bi bi-table"></i>
//                   <span>Products</span>
//                 </Tab>
//                 <Tab className='list-group-item py-2'>
//                   <i className='bi bi-clipboard-data '></i>
//                   <span >Analytics</span>
//                 </Tab>
//                 <Tab className='list-group-item py-2'>
//                   <i className='bi bi-people '></i>
//                   <span >Customers</span>
//                 </Tab>
//                 <Tab className='list-group-item py-2'>
//                   <i className='bi bi-power '></i>
//                   <span >Logout</span>
//                 </Tab>
//               </TabList>
//             </Tabs>
//           </div>
//         </div>
//         <div style={{ marginTop: '50px', marginLeft: '60px' }}>
//           <div>
//             <p style={{ fontWeight: 'bolder' }}> Add Products</p>
//             <p style={{ fontSize: '16px', marginTop: '-10px' }}>Add details of the product here !</p>
//           </div>
//           <div style={{ marginLeft: '20px', fontSize: '32px' }}>
//             <button onClick={handleToggle}> <IoMdAddCircle /></button>
//           </div>
//         </div>
//         {toggle && (
//           <div>
//             <Tabs>
//               <TabPanels sx={{ margin: '2%' }}>
//                 <TabPanel className="addProduct">
//                   <form action="" onSubmit={handleAddProduct} id="form">
//                     <input
//                       required
//                       type="text"
//                       placeholder="City"
//                       onChange={(e) =>
//                         setProduct({ ...product, city: e.target.value })
//                       }
//                     />
//                     <input
//                       required
//                       type="text"
//                       placeholder="Country"
//                       onChange={(e) =>
//                         setProduct({ ...product, country: e.target.value })
//                       }
//                     />
//                     <input
//                       required
//                       type="url"
//                       placeholder="Image"
//                       onChange={handleImages}
//                     />
//                     <input
//                       required
//                       type="text"
//                       placeholder="Locality"
//                       onChange={(e) =>
//                         setProduct({ ...product, locality: e.target.value })
//                       }
//                     />
//                     <input
//                       required
//                       type="text"
//                       placeholder="About"
//                       onChange={(e) =>
//                         setProduct({ ...product, about: e.target.value })
//                       }
//                     />
//                     <input
//                       required
//                       type="number"
//                       placeholder="Rating"
//                       onChange={(e) =>
//                         setProduct({ ...product, rating: +e.target.value })
//                       }
//                     />
//                     <input
//                       required
//                       type="number"
//                       placeholder="Price"
//                       onChange={(e) =>
//                         setProduct({ ...product, price: e.target.value })
//                       }
//                     />
//                     <button style={{ marginBottom: '30px', marginTop: '20px' }}>Submit</button>
//                   </form>
//                 </TabPanel>
//               </TabPanels>
//             </Tabs>
//           </div>
//         )}
//         <Tabs>
//         <TabPanels>
//           <TabPanel>
//             <div>
//               {isLoading ? (
//                 <div>Loading...</div>
//               ) : isError ? (
//                 <div>Error...</div>
//               ) : (
//                 <Tabs>
//                   <TabPanels>
//                     <TabPanel id="editProduct">
//                       <TableContainer>
//                         <Table variant="striped" colorScheme="teal">
//                           <Thead>
//                             <Tr>
//                               <Th sx={{ textAlign: 'center' }}>City</Th>
//                               <Th sx={{ textAlign: 'center' }}>Country</Th>
//                               <Th sx={{ textAlign: 'center' }} style={{ width: '20%' }}>Image</Th>
//                               <Th sx={{ textAlign: 'center' }}>Locality</Th>
//                               <Th sx={{ textAlign: 'center' }}>Price</Th>
//                               <Th sx={{ textAlign: 'center' }}>Edit</Th>
//                               <Th sx={{ textAlign: 'center' }}>Delete</Th>
//                             </Tr>
//                           </Thead>
//                           <Tbody>
//                             {destinations?.map((e) => (
//                               <Tr key={e.id}>
//                                 <Td sx={{ textAlign: 'center' }}>{e.city}</Td>
//                                 <Td sx={{ textAlign: 'center' }}>{e.country}</Td>
//                                 <Td sx={{ textAlign: 'center' }} style={{ width: '20%' }}>
//                                   <img src={e.image} style={{ display: 'block', width: '100%', height: '150px', margin: 'auto' }} alt="" />
//                                 </Td>
//                                 <Td sx={{ textAlign: 'center' }}>{e.locality}</Td>
//                                 <Td sx={{ textAlign: 'center' }}>{e.price}</Td>
//                                 <Td sx={{ textAlign: 'center' }}>
//                                   <button onClick={() => { onOpen(); showdetails(e.id); }} id="edit">
//                                     Edit
//                                   </button>
//                                 </Td>
//                                 <Td sx={{ textAlign: 'center' }}>
//                                   <button onClick={() => handleDeleteProduct(e.id)} id="delete">
//                                     Delete
//                                   </button>
//                                 </Td>
//                               </Tr>
//                             ))}
//                           </Tbody>
//                         </Table>
//                       </TableContainer>
//                     </TabPanel>
//                   </TabPanels>
//                 </Tabs>
//               )}
//             </div>
//             <Tabs>
//               <Modal isOpen={isOpen} onClose={onClose}>
//                 <ModalOverlay />
//                 <ModalContent>
//                   <ModalHeader>Edit Product</ModalHeader>
//                   <ModalCloseButton />
//                   <ModalBody>
//                     <form
//                       action=""
//                       style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         gap: '10px',
//                       }}
//                     >
//                       <input
//                         style={{
//                           width: '35%;',
//                           border: '2px solid black',
//                           height: ' 60px',
//                           padding: '10px',
//                           fontSize: '18px',
//                           borderRadius: ' 5px',
//                         }}
//                         required
//                         type="text"
//                         value={city}
//                         placeholder="City"
//                         onChange={(e) => setCity(e.target.value)}
//                       />
//                       <input
//                         style={{
//                           width: '35%;',
//                           border: '2px solid black',
//                           height: ' 60px',
//                           padding: '10px',
//                           fontSize: '18px',
//                           borderRadius: ' 5px',
//                         }}
//                         required
//                         type="text"
//                         value={country}
//                         placeholder="Country"
//                         onChange={(e) => setCountry(e.target.value)}
//                       />
//                       <input
//                         style={{
//                           width: '35%;',
//                           border: '2px solid black',
//                           height: ' 60px',
//                           padding: '10px',
//                           fontSize: '18px',
//                           borderRadius: ' 5px',
//                         }}
//                         required
//                         type="number"
//                         placeholder="Price"
//                         value={eprice}
//                         onChange={(e) => seteprice(e.target.value)}
//                       />
//                       <Button
//                         variant="ghost"
//                         onClick={handleEditProduct}
//                         sx={{
//                           backgroundColor: '#bee3f8',
//                           fontSize: '18px',
//                           color: '#2c5282',
//                           borderRadius: '20px',
//                           fontWeight: '700',
//                           width: '50%',
//                           padding: '5px 20px 5px 20px',
//                           margin: 'auto',
//                         }}
//                       >
//                         Edit
//                       </Button>
//                     </form>
//                   </ModalBody>
//                 </ModalContent>
//               </Modal>
//             </Tabs>
//           </TabPanel>
//         </TabPanels>
//         </Tabs>
//       </div>
//       <ToastContainer
//         position="top-center"
//         margin="auto"
//         autoClose={5000}
//         hideProgressBar={false}
//         newestOnTop={false}
//         closeOnClick
//         rtl={false}
//         pauseOnFocusLoss
//         draggable
//         pauseOnHover
//       />
//     </div>
//   );
// }
// export default Admin;


// const DIV = styled.div`
// font-size:24px;

//     .display{
//         display:flex;
//         align-items:center;
//     }
//     span{
//         padding-left:15px;
//     }
//     a{
//         margin-bottom:15px;
//     }
//     .last-item {
//     margin-bottom: 0;
//   }

// `
// const DVIV = styled.div`
// .division
// {
//     font-size:25px;
//     display:flex;
//     justify-content:space-between;
//     align-items:center;
//     background-color:white;
//     margin-bottom:30px;
//     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;width:600px;
//     height:120px;
//     padding:0px 35px 0px 35px;
//     border-radius:10px;

// }
// .division:hover {
//     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     transition: 0.3s;
//     z-index: 2; 
//   }
// `

// const TABFORM = styled.div`
//         /* border:2px solid black; */
//         box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
//   .tab {
//     font-size: 24px;
//     display: flex;
//     align-items: center;
//     /* gap: 5px; */
//     color: black;
//     margin-left:"-20px";
//   }
//   .addProduct form {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 10px;
//     margin-top:20px;
//     /* height: 80vh; */
//     /* width:800px; */
   
//     button {
//       background-color: #bee3f8;
//       font-size: 18px;
//       color: #2c5282;
//       border-radius: 20px;
//       font-weight: 700;
//       padding: 5px 20px 5px 20px;
//     }
//     input,
//     select {
//       width: 70%;
//       padding-top:100px;
//       margin:auto;
//       display:flex;
//       justify-content:center;
//       align-items:center;
//       border: 2px solid black;
//       height: 50px;
//       padding: 10px;
//       font-size: 18px;
//       padding-left:"20px";
//       border-radius: 5px;
//     }
//     form
//     {
//         border:2px solid black;
//         padding-top:20px;
//         /* padding-left:"-20px" */
//     }
//   }`

// const DVIVS = styled.div`
// .tab {
//   font-size: 24px;
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   color: black;
// }
// .addProduct form {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
//   height: 80vh;
//   button {
//     background-color: #bee3f8;
//     font-size: 18px;
//     color: #2c5282;
//     border-radius: 20px;
//     font-weight: 700;
//     padding: 5px 20px 5px 20px;
//   }
//   input,
//   select {
//     width: 35%;
//     border: 2px solid black;
//     height: 60px;
//     padding: 10px;
//     font-size: 18px;
//     border-radius: 5px;
//   }
// }
// #edit {
//   background-color: green;
//   padding: 5px 20px 5px 20px;
//   color: white;
//   border-radius: 5px;
//   font-weight: 600;
// }
// #delete {
//   background-color: red;
//   padding: 5px 20px 5px 20px;
//   color: white;
//   border-radius: 5px;
//   font-weight: 600;
// }
// `;









// import React, { useState, useEffect } from 'react';
// import { BiSolidDashboard } from 'react-icons/bi';
// import { IoMdAddCircle } from 'react-icons/io';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import styled from 'styled-components';
// import adminPic from '../Image/profile-pic.png';
// import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
// import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
// import { TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
// import { deleteProduct, editProduct, getProduct } from '../Admin/AdminReducer/action';
// import { useDispatch, useSelector } from 'react-redux';
// import { useDisclosure } from '@chakra-ui/hooks';
// import { useNavigate } from 'react-router';
// import { Button } from '@chakra-ui/button';
// import { Tab, TabList } from '@chakra-ui/react';
// import { addProduct } from '../Admin/AdminReducer/action';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const Admin = () => {
//   const showSuccessToast = (message) => {
//     toast.success(message, {
//       position: 'top-center',
//       autoClose: 5000,
//     });
//   };

//   const showErrorToast = (message) => {
//     toast.error(message, {
//       position: 'top-center',
//       autoClose: 5000,
//     });
//   };

//   const dispatch = useDispatch();
//   const [toggle, setToggle] = useState(false);
//   const [product, setProduct] = useState({
//     rating: 0,
//     city: '',
//     country: '',
//     locality: '',
//     about: '',
//     price: 0,
//     images: '',
//   });

//   const [images, setImages] = useState([]);
//   const [city, setCity] = useState('');
//   const [eprice, seteprice] = useState('');
//   const [country, setCountry] = useState('');
//   const [id, setid] = useState(0);

//   const navigate = useNavigate();
//   const { isOpen, onOpen, onClose } = useDisclosure();

//   useEffect(() => {
//     dispatch(getProduct());
//   }, [dispatch]);

//   const handleToggle = () => {
//     setToggle(!toggle);
//   };

//   const handleImages = (e) => {
//     if (e.target.value !== '') {
//       setProduct({ ...product, images: e.target.value });
//     }
//   };

//   const handleAddProduct = async (e) => {
//     e.preventDefault();
//     setProduct({ ...product, images });

//     try {
//       const addedProduct = await dispatch(addProduct(product));
//       showSuccessToast('Product Added Successfully.');
//       console.log('Product added:', addedProduct);
//       setProduct({
//         rating: 0,
//         city: '',
//         country: '',
//         locality: '',
//         about: '',
//         price: 0,
//         images: '',
//       });
//       document.getElementById('form').reset();
//     } catch (error) {
//       console.error('Error adding product:', error);
//       showErrorToast('Error adding product. Please try again.');
//     }
//   };

//   const destinations = useSelector((store) => store.adminReducer.destinations);
//   const isLoading = useSelector((store) => store.adminReducer.isLoading);
//   const isError = useSelector((store) => store.adminReducer.isError);

//   const handleDeleteProduct = (id) => {
//     dispatch(deleteProduct(id)).then((res) => {
//       toast({
//         title: 'Product Deleted.',
//         status: 'success',
//         duration: 2000,
//         isClosable: true,
//         position: 'top-center',
//       });
//       dispatch(getProduct());
//     });
//   };

//   const showdetails = (id) => {
//     const product = destinations.find((el) => el.id === id);
//     if (product) {
//       setCity(product.city);
//       setCountry(product.country);
//       seteprice(product.price);
//       setid(product.id);
//     }
//   };

//   const handleEditProduct = () => {
//     const payload = {
//       city: city,
//       price: +eprice,
//       country: country,
//     };

//     dispatch(editProduct(id, payload)).then(() => {
//       toast({
//         position: 'top-center',
//         title: 'Product Details have been updated',
//         status: 'success',
//         duration: 2000,
//         isClosable: true,
//       });
//       onClose();
//       dispatch(getProduct());
//     });
//   };

//   return (
//     <div>
//       <div style={{ display: 'flex', alignItems: 'center', float: 'right', marginRight: '20px', marginTop: '20px' }}>
//         <div>
//           <p>Hey, <b>Admin</b></p>
//           <p style={{ marginTop: '-20px', marginLeft: '40px' }}>admin</p>
//         </div>
//         <div>
//           <img
//             style={{
//               width: ' 2.8rem',
//               height: '2.8rem',
//               borderRadius: '50%',
//               overflow: 'hidden',
//               marginLeft: '15px',
//               marginTop: '-10px',
//             }}
//             src={adminPic}
//             alt=""
//           />
//         </div>
//       </div>
//       <div style={{ display: 'flex' }}>
//         <div className='bg-white sidebar p-2' style={{ width: '250px', marginLeft: '50px' }}>
//           <div className='m-2'>
//             <i className='bi bi-bootstrap-fill me-3 fs-4'></i>
//             <span className='brand-name fs-4'>Yousaf</span>
//           </div>
//           <br />
//           <div>
//             <Tabs variant='soft-rounded' colorScheme='blue' sx={{ display: 'flex' }}>
//               <TabList
//                 sx={{
//                   display: 'flex',
//                   flexDirection: 'column',
//                   height: '100vh',
//                   width: '30%',
//                   padding: '20px',
//                   gap: '3%',
//                 }}
//               >
//                 <Tab className='list-group-item py-2'>
//                   <div className='display'>
//                     <BiSolidDashboard />
//                     <span >Dashboard</span>
//                   </div>
//                 </Tab>
//                 <Tab className='list-group-item py-2 '>
//                   <i className='bi bi-person-fill'></i>
//                   <span >Customers</span>
//                 </Tab>
//                 <Tab className="list-group-item py-2">
//                   <i className="bi bi-table"></i>
//                   <span>Products</span>
//                 </Tab>
//                 <Tab className='list-group-item py-2'>
//                   <i className='bi bi-clipboard-data '></i>
//                   <span >Analytics</span>
//                 </Tab>
//                 <Tab className='list-group-item py-2'>
//                   <i className='bi bi-people '></i>
//                   <span >Customers</span>
//                 </Tab>
//                 <Tab className='list-group-item py-2'>
//                   <i className='bi bi-power '></i>
//                   <span >Logout</span>
//                 </Tab>
//               </TabList>
//             </Tabs>
//           </div>
//         </div>
        // <div style={{ marginTop: '50px', marginLeft: '60px' }}>
        //   <div>
        //     <p style={{ fontWeight: 'bolder' }}> Add Products</p>
        //     <p style={{ fontSize: '16px', marginTop: '-10px' }}>Add details of the product here !</p>
        //   </div>
        //   <div style={{ marginLeft: '20px', fontSize: '32px' }}>
        //     <button onClick={handleToggle}> <IoMdAddCircle /></button>
        //   </div>
        // </div>
//         {toggle && (
//           <div>
//             <Tabs>
//               <TabPanels sx={{ margin: '2%' }}>
//                 <TabPanel className="addProduct">
//                   <form action="" onSubmit={handleAddProduct} id="form">
//                     <input
//                       required
//                       type="text"
//                       placeholder="City"
//                       onChange={(e) =>
//                         setProduct({ ...product, city: e.target.value })
//                       }
//                     />
//                     <input
//                       required
//                       type="text"
//                       placeholder="Country"
//                       onChange={(e) =>
//                         setProduct({ ...product, country: e.target.value })
//                       }
//                     />
//                     <input
//                       required
//                       type="url"
//                       placeholder="Image"
//                       onChange={handleImages}
//                     />
//                     <input
//                       required
//                       type="text"
//                       placeholder="Locality"
//                       onChange={(e) =>
//                         setProduct({ ...product, locality: e.target.value })
//                       }
//                     />
//                     <input
//                       required
//                       type="text"
//                       placeholder="About"
//                       onChange={(e) =>
//                         setProduct({ ...product, about: e.target.value })
//                       }
//                     />
//                     <input
//                       required
//                       type="number"
//                       placeholder="Rating"
//                       onChange={(e) =>
//                         setProduct({ ...product, rating: +e.target.value })
//                       }
//                     />
//                     <input
//                       required
//                       type="number"
//                       placeholder="Price"
//                       onChange={(e) =>
//                         setProduct({ ...product, price: e.target.value })
//                       }
//                     />
//                     <button style={{ marginBottom: '30px', marginTop: '20px' }}>Submit</button>
//                   </form>
//                 </TabPanel>
//               </TabPanels>
//             </Tabs>
//           </div>
//         )}
//         <Tabs>
//         <TabPanels>
//           <TabPanel>
//             <div>
//               {isLoading ? (
//                 <div>Loading...</div>
//               ) : isError ? (
//                 <div>Error...</div>
//               ) : (
//                 <Tabs>
//                   <TabPanels>
//                     <TabPanel id="editProduct">
//                       <TableContainer>
//                         <Table variant="striped" colorScheme="teal">
//                           <Thead>
//                             <Tr>
//                               <Th sx={{ textAlign: 'center' }}>City</Th>
//                               <Th sx={{ textAlign: 'center' }}>Country</Th>
//                               <Th sx={{ textAlign: 'center' }} style={{ width: '20%' }}>Image</Th>
//                               <Th sx={{ textAlign: 'center' }}>Locality</Th>
//                               <Th sx={{ textAlign: 'center' }}>Price</Th>
//                               <Th sx={{ textAlign: 'center' }}>Edit</Th>
//                               <Th sx={{ textAlign: 'center' }}>Delete</Th>
//                             </Tr>
//                           </Thead>
//                           <Tbody>
//                             {destinations?.map((e) => (
//                               <Tr key={e.id}>
//                                 <Td sx={{ textAlign: 'center' }}>{e.city}</Td>
//                                 <Td sx={{ textAlign: 'center' }}>{e.country}</Td>
//                                 <Td sx={{ textAlign: 'center' }} style={{ width: '20%' }}>
//                                   <img src={e.image} style={{ display: 'block', width: '100%', height: '150px', margin: 'auto' }} alt="" />
//                                 </Td>
//                                 <Td sx={{ textAlign: 'center' }}>{e.locality}</Td>
//                                 <Td sx={{ textAlign: 'center' }}>{e.price}</Td>
//                                 <Td sx={{ textAlign: 'center' }}>
//                                   <button onClick={() => { onOpen(); showdetails(e.id); }} id="edit">
//                                     Edit
//                                   </button>
//                                 </Td>
//                                 <Td sx={{ textAlign: 'center' }}>
//                                   <button onClick={() => handleDeleteProduct(e.id)} id="delete">
//                                     Delete
//                                   </button>
//                                 </Td>
//                               </Tr>
//                             ))}
//                           </Tbody>
//                         </Table>
//                       </TableContainer>
//                     </TabPanel>
//                   </TabPanels>
//                 </Tabs>
//               )}
//             </div>
//             <Tabs>
//               <Modal isOpen={isOpen} onClose={onClose}>
//                 <ModalOverlay />
//                 <ModalContent>
//                   <ModalHeader>Edit Product</ModalHeader>
//                   <ModalCloseButton />
//                   <ModalBody>
//                     <form
//                       action=""
//                       style={{
//                         display: 'flex',
//                         flexDirection: 'column',
//                         gap: '10px',
//                       }}
//                     >
//                       <input
//                         style={{
//                           width: '35%;',
//                           border: '2px solid black',
//                           height: ' 60px',
//                           padding: '10px',
//                           fontSize: '18px',
//                           borderRadius: ' 5px',
//                         }}
//                         required
//                         type="text"
//                         value={city}
//                         placeholder="City"
//                         onChange={(e) => setCity(e.target.value)}
//                       />
//                       <input
//                         style={{
//                           width: '35%;',
//                           border: '2px solid black',
//                           height: ' 60px',
//                           padding: '10px',
//                           fontSize: '18px',
//                           borderRadius: ' 5px',
//                         }}
//                         required
//                         type="text"
//                         value={country}
//                         placeholder="Country"
//                         onChange={(e) => setCountry(e.target.value)}
//                       />
//                       <input
//                         style={{
//                           width: '35%;',
//                           border: '2px solid black',
//                           height: ' 60px',
//                           padding: '10px',
//                           fontSize: '18px',
//                           borderRadius: ' 5px',
//                         }}
//                         required
//                         type="number"
//                         placeholder="Price"
//                         value={eprice}
//                         onChange={(e) => seteprice(e.target.value)}
//                       />
//                       <Button
//                         variant="ghost"
//                         onClick={handleEditProduct}
//                         sx={{
//                           backgroundColor: '#bee3f8',
//                           fontSize: '18px',
//                           color: '#2c5282',
//                           borderRadius: '20px',
//                           fontWeight: '700',
//                           width: '50%',
//                           padding: '5px 20px 5px 20px',
//                           margin: 'auto',
//                         }}
//                       >
//                         Edit
//                       </Button>
//                     </form>
//                   </ModalBody>
//                 </ModalContent>
//               </Modal>
//             </Tabs>
//           </TabPanel>
//         </TabPanels>
//         </Tabs>
//       </div>
    //   <ToastContainer
    //     position="top-center"
    //     margin="auto"
    //     autoClose={5000}
    //     hideProgressBar={false}
    //     newestOnTop={false}
    //     closeOnClick
    //     rtl={false}
    //     pauseOnFocusLoss
    //     draggable
    //     pauseOnHover
    //   />
//     </div>
//   );
// }
// export default Admin;


// const DIV = styled.div`
// font-size:24px;

//     .display{
//         display:flex;
//         align-items:center;
//     }
//     span{
//         padding-left:15px;
//     }
//     a{
//         margin-bottom:15px;
//     }
//     .last-item {
//     margin-bottom: 0;
//   }

// `
// const DVIV = styled.div`
// .division
// {
//     font-size:25px;
//     display:flex;
//     justify-content:space-between;
//     align-items:center;
//     background-color:white;
//     margin-bottom:30px;
//     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;width:600px;
//     height:120px;
//     padding:0px 35px 0px 35px;
//     border-radius:10px;

// }
// .division:hover {
//     box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
//     transition: 0.3s;
//     z-index: 2; 
//   }
// `

// const TABFORM = styled.div`
//         /* border:2px solid black; */
//         box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        
//   .tab {
//     font-size: 24px;
//     display: flex;
//     align-items: center;
//     /* gap: 5px; */
//     color: black;
//     margin-left:"-20px";
//   }
//   .addProduct form {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     gap: 10px;
//     margin-top:20px;
//     /* height: 80vh; */
//     /* width:800px; */
   
//     button {
//       background-color: #bee3f8;
//       font-size: 18px;
//       color: #2c5282;
//       border-radius: 20px;
//       font-weight: 700;
//       padding: 5px 20px 5px 20px;
//     }
//     input,
//     select {
//       width: 70%;
//       padding-top:100px;
//       margin:auto;
//       display:flex;
//       justify-content:center;
//       align-items:center;
//       border: 2px solid black;
//       height: 50px;
//       padding: 10px;
//       font-size: 18px;
//       padding-left:"20px";
//       border-radius: 5px;
//     }
//     form
//     {
//         border:2px solid black;
//         padding-top:20px;
//         /* padding-left:"-20px" */
//     }
//   }`

// const DVIVS = styled.div`
// .tab {
//   font-size: 24px;
//   display: flex;
//   align-items: center;
//   gap: 5px;
//   color: black;
// }
// .addProduct form {
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 10px;
//   height: 80vh;
//   button {
//     background-color: #bee3f8;
//     font-size: 18px;
//     color: #2c5282;
//     border-radius: 20px;
//     font-weight: 700;
//     padding: 5px 20px 5px 20px;
//   }
//   input,
//   select {
//     width: 35%;
//     border: 2px solid black;
//     height: 60px;
//     padding: 10px;
//     font-size: 18px;
//     border-radius: 5px;
//   }
// }
// #edit {
//   background-color: green;
//   padding: 5px 20px 5px 20px;
//   color: white;
//   border-radius: 5px;
//   font-weight: 600;
// }
// #delete {
//   background-color: red;
//   padding: 5px 20px 5px 20px;
//   color: white;
//   border-radius: 5px;
//   font-weight: 600;
// }
// `;