import React, { useEffect, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import {
  Box,
  Button,
  Center,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
  useDisclosure,
  Spinner,
} from "@chakra-ui/react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, getUsers, postUsers } from "../Admin/AdminReducer/action";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from "styled-components";

const initState = {
  id: 0,
  name: "",
  email: ""
};

const AdminUsers = () => {
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

  const [data, setData] = useState(initState);
  const [sortedUsers, setSortedUsers] = useState([]); // State for sorted users
  const [selectedOption, setSelectedOption] = useState(""); // State for selected sorting option
  const users = useSelector((store) => store.adminReducer.users);
  const isLoading = useSelector((store) => store.adminReducer.isLoading);

  const dispatch = useDispatch();
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
    showSuccessToast('User added successfully.');
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUsers(id));
    showSuccessToast('User deleted successfully.');
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  // Handler to update the selected sorting option
  const handleSortChange = (event) => {
    setSelectedOption(event.target.value);
  };

  // Function to sort the items based on the selected option
  const sortItems = (items, option) => {
    if (option === "asc") {
      return [...items].sort((a, b) => a.name.localeCompare(b.name));
    } else if (option === "desc") {
      return [...items].sort((a, b) => b.name.localeCompare(a.name));
    } else {
      return items;
    }
  };

  useEffect(() => {
    // Sort the users based on the selected option
    setSortedUsers(sortItems(users, selectedOption));
  }, [users, selectedOption]);

  return (
    <>
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
        <>
          <TABLECON className="container">
            <Center>
              <Box className="container"
                gap={8}
                w="70%"
                display="flex"
                justifyContent="space-evenly"
                alignItems="baseline"
                m={8}
                p={8}
                borderRadius={8}
                boxShadow={"md"}
              >
                <Box>
                  <Button onClick={onAddUsersModalOpen} boxShadow={"md"} style={{ textAlign: "center", paddingTop: "5px" }}>
                    <div style={{display:'flex',alignItems:"center",justifyContent:"center"}}>
                    <IoMdAdd style={{fontSize:"24px",marginRight:"11px",marginTop:"-5px"}}/>
                    <Text style={{marginTop:"10px"}}>Add New Users</Text>
                    </div>
                  </Button>

                  <Modal isOpen={addUsersModalOpen} onClose={onAddUsersModalClose}>
                    <ModalOverlay />
                    <ModalContent>
                      <ModalHeader>Add New Users</ModalHeader>
                      <ModalCloseButton />
                      <ModalBody>
                        <form onSubmit={handleSubmit}>
                          <Heading as="h5" size="sm" pb={4}>
                            Id:
                          </Heading>
                          <Input
                            type="number"
                            placeholder="User Id"
                            mb={4}
                            name="id"
                            value={data.id}
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
                            name="email"
                            value={data.email}
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

                <Box display="flex" gap={8} >
                  <Select w={{ base: "100%" }} boxShadow={"md"} onChange={handleSortChange}>
                    <option className="opt" value="">Sort by Name</option>
                    <option className="opt" value="asc">Ascending Order</option>
                    <option className="opt" value="desc">Descending Order</option>
                  </Select>
                </Box>

              </Box>
            </Center>
          </TABLECON>
          <TABLECON>
            <Center>
              <TableContainer w={"100%"} borderRadius={8} boxShadow={"lg"} m={8} p={8} className="container">
                <Table variant="striped" colorScheme="linkedin" >
                  <Thead>
                    <Tr>
                      <Th style={{fontSize:"18px"}}>Id</Th>
                      <Th style={{fontSize:"18px"}}>Users Name</Th>
                      <Th style={{fontSize:"18px"}}>Users Email</Th>
                      <Th style={{fontSize:"18px"}}>Delete</Th>
                    </Tr>
                  </Thead>
                  <Tbody style={{marginTop:"20px"}}>
                    {Array.isArray(sortedUsers) &&
                      sortedUsers.map((el) => (
                        <Tr key={el.id}>
                          <Td>{el.id}</Td>
                          <Td>{el.name}</Td>
                          <Td>{el.email}</Td>
                          <Td>
                            <Button onClick={() => handleDelete(el.id)} id="delete">
                              Delete
                            </Button>
                          </Td>
                        </Tr>
                      ))}
                  </Tbody>
                </Table>
              </TableContainer>
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
            </Center>
          </TABLECON>
        </>
      )}
    </>
  );
};

export default AdminUsers;

const TABLECON = styled.div`
 @media screen and (max-width:900px) {
  .container{
    width:100%;
  }
  Select{
    width:60%
  }
  option{
    width:100px;
    font-size:10px;
    height:60px;
  }
  
 }
`