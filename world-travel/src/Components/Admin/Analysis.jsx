import { Center, Tbody } from "@chakra-ui/react";
import { FaArrowTrendUp } from "react-icons/fa6";
import "font-awesome/css/font-awesome.css";
import { Table, Th, Thead, Td, Tr } from "@chakra-ui/react";
import React from "react";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import styled from "styled-components";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 2975,
    pv: 4900,
    amt: 2800,
  },
  {
    name: "Sep",
    uv: 2590,
    pv: 5300,
    amt: 3100,
  },
  {
    name: "Oct",
    uv: 3900,
    pv: 3100,
    amt: 1500,
  },
  {
    name: "Nov",
    uv: 3800,
    pv: 3700,
    amt: 2900,
  },
  {
    name: "Dec",
    uv: 3490,
    pv: 4370,
    amt: 2170,
  },
];

const Analysis = () => {
  return (
    <div>

      <DIV>
        <h1 style={{ width: "fit-content", padding: "10px", marginTop: "-90px" }} ><u>Dashboard</u></h1>
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", marginLeft: "20px", marginTop: "50px" }}>
          <div style={{ marginLeft: "20px", border: "2px solid black", borderRadius: "10px", padding: "10px", backgroundColor: "#8884d8" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div>
                <h1>$635</h1>
                <div>Earn Money</div>
              </div>
              <div>
                <FaArrowTrendUp style={{ width: "100px", height: "40px", marginLeft: "-15px", marginRight: "-25px" }} />
                <span style={{ fontSize: "10px", color: "black", fontWeight: "bold" }}>8.5%</span>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "20px", border: "2px solid black", borderRadius: "10px", padding: "10px", backgroundColor: "#8884d8" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div>
                <h1>430+</h1>
                <div>Completed Tours</div>
              </div>
              <div>
                <FaArrowTrendUp style={{ width: "60px", height: "40px", marginLeft: "-15px" }} />
                <span style={{ fontSize: "10px", color: "black", fontWeight: "bold" }}>0.7%</span>
              </div>
            </div>
          </div>
          <div style={{ marginLeft: "20px", border: "2px solid black", borderRadius: "10px", padding: "10px", backgroundColor: "#8884d8" }}>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              <div>
                <h1>12K</h1>
                <div>Active Tours</div>
              </div>
              <div>
                <FaArrowTrendUp style={{ width: "60px", height: "40px", marginLeft: "-15px" }} />
                <span style={{ fontSize: "10px", color: "black", fontWeight: "bold" }}>4.5%</span>                        </div>
            </div>

          </div>
        </div>
      </DIV>
      <br />
      <div className="barchart">
        <Center style={{ marginTop: "80px" }} >
          <BarChart
            width={800}
            height={400}
            data={data}
            margin={{
              top: 0,
              right: 30,
              left: 20,
              bottom: 5
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </Center>
      </div>
      <Center>
        <div style={{ marginTop: "50px" }} >
          <div className="headings">
            <h2>Company Campaigns</h2>
            <h4>Plan your dream vacation effortlessly with our user-friendly travel website.</h4>
          </div>
          <div>
            <Table style={{ marginTop: "50px" }} className="tableContent">
              <Thead >
                <Tr>
                  <Th style={{ fontSize: "18px" }}>Image</Th>
                  <Th style={{ fontSize: "18px" }}>Location</Th>
                  <Th style={{ fontSize: "18px" }}>Locality</Th>
                  <Th style={{ fontSize: "18px" }}>Amount</Th>
                  <Th style={{ fontSize: "18px" }}>Status</Th>
                </Tr>
              </Thead>
              <Tbody className="body">
                <Tr>
                  <Td><img style={{ width: "200px" }} src="https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80" alt="" /></Td>
                  <Td>Tokyo</Td>
                  <Td>Beachfront</Td>
                  <Td>$129</Td>
                  <Td style={{ color: "green" }}><b>Active</b></Td>
                </Tr>
                <Tr>
                  <Td><img style={{ width: "200px" }} src="https://images.unsplash.com/photo-1499092346589-b9b6be3e94b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="" /></Td>
                  <Td>Sydney</Td>
                  <Td>Country Side</Td>
                  <Td>$100</Td>
                  <Td style={{ color: "green" }}><b>Active</b></Td>
                </Tr>
                <Tr>
                  <Td><img style={{ width: "200px" }} src="https://images.unsplash.com/photo-1418075285575-c402f1f7340f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" alt="" /></Td>
                  <Td>Cape Town</Td>
                  <Td>Trending</Td>
                  <Td>$257</Td>
                  <Td style={{ color: "red" }}><b>Closed</b></Td>
                </Tr>
                <Tr>
                  <Td><img style={{ width: "200px" }} src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/485684166.jpg?k=234227d2f4af3fe5596c46f6e370a0f1b26bf8403ed0d004380551ba71a84a87&o=&hp=11" alt="" /></Td>
                  <Td>Singapore</Td>
                  <Td>Trending</Td>
                  <Td>$394</Td>
                  <Td style={{ color: "green" }}><b>Active</b></Td>
                </Tr>
                <Tr>
                  <Td><img style={{ width: "200px" }} src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/485684211.jpg?k=74d966c8e0597d8749942489058cd6da991e79580d2d9911555bd2c7f6fd9522&o=&hp=1" alt="" /></Td>
                  <Td>New York</Td>
                  <Td>Country Side</Td>
                  <Td>$362</Td>
                  <Td style={{ color: "red" }}><b>Closed</b></Td>
                </Tr>
                <Tr>
                  <Td><img style={{ width: "200px" }} src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/245103760.jpg?k=c651ad3d621232036e8155167f8fa248c6b353b52e0f237857ed4d86e188931a&o=&hp=1" alt="" /></Td>
                  <Td>Bangkok</Td>
                  <Td>Beachfront</Td>
                  <Td>$538</Td>
                  <Td style={{ color: "red" }}><b>Closed</b></Td>
                </Tr>
              </Tbody>

            </Table>

          </div>
        </div>
      </Center>

    </div>
  );
}
export default Analysis;

const DIV = styled.div`
  width: 100%;
  .tableContent {
    width: 100%;
  }
  @media screen and (max-width: 900px) {
    width: 60%;
    margin-left: 30px;
    .barchart {
      display: none;
    }
    .tableContent {
      width: 60%;
      margin: auto;
      margin-left: 190px;
    }
    .headings {
      font-size: 18px;
      margin: auto;
      margin-left: 200px;
    }
    img {
      width: "100px";
    }
    .body {
      width: 60%;
    }
  }

 img
 {
    width:"100px"
 }
 .body
 {
    width:60%;
 }
`

