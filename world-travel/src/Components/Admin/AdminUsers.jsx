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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, getUsers, postUsers } from "../Admin/AdminReducer/action";

const initState = {
  id: 0,
  name: "",
  email: "",
};

const AdminUsers = () => {
  const [data, setData] = useState(initState);
  const users = useSelector((store) => store.adminReducer.users);
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
  };

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteUsers(id));
  };
 
   useEffect(()=>{
    dispatch(getUsers())
   },[dispatch])
  return (
    <>
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
            <Button onClick={onAddUsersModalOpen} boxShadow={"md"} style={{ textAlign: "center", paddingTop: "5px" }}>
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
              {Array.isArray(users) && users.map((el) => (
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
    </>
  );
};

export default AdminUsers;