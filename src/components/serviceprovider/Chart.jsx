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

export const Chart = () => {
  const [services, setService] = useState([]);

  const data = services?.map((serv) => ({
    name: serv.Service_Name,
    uv: Number(serv.Fees),
    pv: 1000,
    amt: Number(serv.Fees),
  }));

  const loadService = async () => {
    const res = await axios.get("http://localhost:1000/services/service");
    console.log(res.data.data);
    setService(res.data.data);
  };

  useEffect(() => {
    loadService();
  }, []);

  return (
    <div className="service-list-container">
      <div className="flex flex-d mt-5  h-50 d-inline-block container justify-content-center ">
        <ResponsiveContainer width={250} height={300}>
          <BarChart width={10} height={100} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="uv" fill="#67C6E3" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
