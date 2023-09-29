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
    Text,
    Th,
    Thead,
    Tr,
    useDisclosure,
  } from "@chakra-ui/react";
  import React from "react";
//   import { plush } from "../assets";
  
  const AddAdmin = () => {
    const {
      isOpen: addAdminModalOpen,
      onOpen: onAddAdminModalOpen,
      onClose: onAddAdminModalClose,
    } = useDisclosure();
  
    // const {
    //   isOpen: editAdminModalOpen,
    //   onOpen: onEditAdminModalOpen,
    //   onClose: onEditAdminModalClose,
    // } = useDisclosure();
  
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
              <Button onClick={onAddAdminModalOpen} boxShadow={"md"}>
                {/* <img src={plush} alt="" width={30} /> */}
                 <Text>Add New Admin</Text>
              </Button>
  
              <Modal isOpen={addAdminModalOpen} onClose={onAddAdminModalClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Add New Admin</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Heading as="h5" size="sm" pb={4}>
                      Id:
                    </Heading>
                    <Input type="number" placeholder="Product Id" mb={4} />
                    <Heading as="h5" size="sm" pb={4}>
                      Admin Name:
                    </Heading>
                    <Input type="text" placeholder="Product Name" mb={4} />
                    <Heading as="h5" size="sm" pb={4}>
                      Admin Email:
                    </Heading>
                    <Input type="text" placeholder="Product Price" mb={4} />
                  </ModalBody>
  
                  <ModalFooter>
                    <Button variant="solid">Add Admin</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Box>
  
            <Box display="flex" gap={8}>
              {/* <Select w="16rem" boxShadow={"md"}>
                <option value="">Select Category</option>
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
              </Select> */}
              <Select w="16rem" boxShadow={"md"}>
                <option value="">Sort by Name</option>
              </Select>
            </Box>
  
            {/* <Box>
              <Button onClick={onEditAdminModalOpen} boxShadow={"md"}>
                <img src={plush} alt="" width={30} /> <Text>Edit Admin</Text>
              </Button>
              <Modal isOpen={editAdminModalOpen} onClose={onEditAdminModalClose}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Edit Admin</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Heading as="h5" size="sm" pb={4}>
                      Id:
                    </Heading>
                    <Input type="number" placeholder="Product Id" mb={4} />
                    <Heading as="h5" size="sm" pb={4}>
                      Admin Name:
                    </Heading>
                    <Input type="text" placeholder="Product Name" mb={4} />
                    <Heading as="h5" size="sm" pb={4}>
                      Admin Email:
                    </Heading>
                    <Input type="text" placeholder="Product Price" mb={4} />
                  </ModalBody>
  
                  <ModalFooter>
                    <Button variant="solid">Edit Admin</Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>{" "}
            </Box> */}
          </Box>
        </Center>
  
        <Center>
          <TableContainer w="70%" borderRadius={8} boxShadow={"md"} m={8} p={8}>
            <Table>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Admin Name</Th>
                  <Th>Admin Email</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
            </Table>
          </TableContainer>
        </Center>
      </>
    );
  };
  
  export default AddAdmin;