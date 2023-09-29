import { Button } from '@chakra-ui/button';
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay } from '@chakra-ui/modal';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/table';
import { TabPanel, TabPanels, Tabs } from '@chakra-ui/tabs';
import { deleteProduct, editProduct, getProduct } from '../Admin/AdminReducer/action';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useDisclosure } from '@chakra-ui/hooks';
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';
import styled from 'styled-components';

export const AdminProducts = () => {
  const destinations = useSelector((store) => store.adminReducer.destinations);
  console.log(destinations)
  const isLoading = useSelector((store) => store.adminReducer.isLoading);
  const isError = useSelector((store) => store.adminReducer.isError);
  // const [error, setError] = useState(null); // Define the error state
  const [product, setProduct] = useState({
    rating: 0,
    city: "",
    country: "",
    locality: "",
    about: "",
    price: 0,
    images: "",
});
  const dispatch = useDispatch();
  // const [product, setProduct] = useState(initialState);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [city, setCity] = useState();
  const [eprice, seteprice] = useState();
  const [country, setCountry] = useState();
  const [id, setid] = useState(0);

   // Fetch products when the component mounts
   useEffect(() => {
    dispatch(getProduct()); // Call the fetchProducts action
  }, [dispatch]);

  // Delete Product
  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id)).then((res) => {
      toast({
        title: 'Product Deleted.',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top-center',
      });
      // Fetch product data again after deletion
      dispatch(getProduct());
    });
  };

  // Edit Product
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
      // Fetch product data again after editing
      dispatch(getProduct());
    });
  };
  return (
    <div>
     <DVIVS>
      {isLoading ? (
        <div>Loading...</div>
      ) : isError ? (
        <div>Error...</div>
      ) : (
        <Tabs>
          <TabPanels>
            <TabPanel id="editProduct">
              <TableContainer>
                <Table variant="striped" colorScheme="teal">
                  <Thead>
                    <Tr>
                      {/* <Th sx={{ textAlign: 'center' }}>Name</Th> */}
                      <Th sx={{ textAlign: 'center' }}>City</Th>
                      <Th sx={{ textAlign: 'center' }}>Country</Th>
                      <Th sx={{ textAlign: 'center' }} style={{ width:"20%"}}>Image</Th>
                      <Th sx={{ textAlign: 'center' }}>Locality</Th>
                      <Th sx={{ textAlign: 'center' }}>Price</Th>
                      <Th sx={{ textAlign: 'center' }}>Edit</Th>
                      <Th sx={{ textAlign: 'center' }}>Delete</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {destinations?.map((e) => (
                      <Tr key={e.id}>
                        {/* <Td sx={{ textAlign: 'center' }}>{e.name}</Td> */}
                        <Td sx={{ textAlign: 'center' }}>{e.city}</Td>
                        <Td sx={{ textAlign: 'center' }}>{e.country}</Td>
                        <Td sx={{ textAlign: 'center' }} style={{ width:"20%"}}>
                          <img src={e.image}  style={{ display:"block",width:"100%",height:"150px",margin:"auto" }} alt="" />
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
            </TabPanel>
          </TabPanels>
        </Tabs>)}
        </DVIVS>
        <Tabs>
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
                    onClick={() => handleEditProduct()}
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
          </Tabs>
          
    </div>
  );
};

const DVIVS = styled.div`
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