import { Center } from "@chakra-ui/react";
import React from "react";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend
} from "recharts";

const data = [
    {
        name: "Jan",
        uv: 4000,
        pv: 2400,
        amt: 2400
    },
    {
        name: "Feb",
        uv: 3000,
        pv: 1398,
        amt: 2210
    },
    {
        name: "March",
        uv: 2000,
        pv: 9800,
        amt: 2290
    },
    {
        name: "April",
        uv: 2780,
        pv: 3908,
        amt: 2000
    },
    {
        name: "May",
        uv: 1890,
        pv: 4800,
        amt: 2181
    },
    {
        name: "June",
        uv: 2390,
        pv: 3800,
        amt: 2500
    },
    {
        name: "July",
        uv: 3490,
        pv: 4300,
        amt: 2100
    },
    {
        name: "Aug",
        uv: 2975,
        pv: 4900,
        amt: 2800
    },
    {
        name: "Sep",
        uv: 2590,
        pv: 5300,
        amt: 3100
    },
    {
        name: "Oct",
        uv: 3900,
        pv: 3100,
        amt: 1500
    },
    {
        name: "Nov",
        uv: 3800,
        pv: 3700,
        amt: 2900
    },
    {
        name: "Dec",
        uv: 3490,
        pv: 4370,
        amt: 2170
    }

];

export default function Analysis() {
    return (
        <div>
        
            <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <div>
                    <h1>635$</h1>
                    <h3>Earn Money</h3>
                    {/* <div><i style="color: #53c3a7;" class="fa-solid fa-arrow-trend-up fa-fade"></i></div> */}
                </div>
                <div>
                    <h1>430+</h1>
                    <h3>Completed Tours</h3>
                    {/* <div><i style="color: #53c3a7;" class="fa-solid fa-arrow-trend-up fa-fade"></i></div> */}
                </div>
                <div>
                     <h1>12K</h1>
                    <h3>Active Tours</h3>
                    {/* <div><i style={{"color: #53c3a7;" class="fa-solid fa-arrow-trend-up fa-fade"}}></i></div> */}
                </div>
            </div>
            <br/>
            <Center style={{marginTop:"150px"}}>
            <BarChart
                width={500}
                height={300}
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
    );
}
