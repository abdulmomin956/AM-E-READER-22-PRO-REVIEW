import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';
import './Dashboard.css'

const Dashboard = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return (
        <main className='chart-container'>
            <div className='chart'>
                <div>
                    <h4 style={{ textAlign: "center" }}>Our Success Rate</h4>
                    <LineChart width={600} height={300} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Line dataKey="sell" />
                        <Tooltip />
                    </LineChart>
                </div>
                <div>
                    <h4 style={{ textAlign: "center" }}>Branch Increament</h4>
                    <BarChart width={600} height={300} data={data}>
                        <XAxis dataKey="month" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sell" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
            <div className='pie'>
                <h4 style={{ textAlign: "center" }}>Demand  by Age</h4>
                <PieChart width={730} height={400}>
                    <Pie data={data} dataKey="sell" nameKey='month' cx="50%" cy="50%" outerRadius={80} fill="blueviolet" />
                    <Pie data={data} dataKey="sell" nameKey='month' cx="50%" cy="50%" innerRadius={90} outerRadius={120} fill="#82ca9d" label />
                    <Tooltip />
                </PieChart>
            </div>


        </main>
    );
};

export default Dashboard;