import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { Loader } from "../Loader";

export const Chart = () => {
  const [services, setService] = useState([]);
  const [isLoading, setisLoading] = useState(false);

  const colors = ["#FFD1E3", "#FFFAB7", "#7BC9FF"]; // Define your colors

  const data = services?.map((serv, index) => ({
    name: serv.Service_Name,
    uv: Number(serv.Fees),
    pv: 1000,
    amt: Number(serv.Fees),
    color: colors[index % colors.length], // Cycle through colors array
  }));

  const loadService = async () => {
    setisLoading(true);
    const res = await axios.get("http://localhost:1000/services/service");
    console.log(res.data.data);
    setService(res.data.data);
    setisLoading(false);
  };

  useEffect(() => {
    loadService();
  }, []);

  return (
    <div>
      <div className="flex flex-d mt-5  h-50 d-inline-block container justify-content-center ">
        <h4
          style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            padding: "12px",
            background: "skyblue",
            marginLeft: "10px",
            width: "1000px",
            color: "white",
            height: "50px",
            borderRadius: "10px",
            marginBottom: "50px",
          }}
        >
          Total Service Of Individual Of Category
        </h4>
        <ResponsiveContainer width={800} height={300} style={{paddingLeft:"80px"}}>
          <BarChart width={10} height={100} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            {/* Use custom color from data */}
            <Bar dataKey="uv">
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
