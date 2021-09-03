import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './styles.scss';
const data = [
    { pv: 100, amt: 0 },
    { pv: 99, amt: 10 },
    { pv: 97, amt: 20 },
    { pv: 96, amt: 30 },
    { pv: 90, amt: 40 },
    { pv: 88, amt: 50 },
    { pv: 85, amt: 60 },
];

export default function Chart() {
    const [stats, setStats] = useState(data);
    useEffect(() => {
        const func = async () => {
            const response = await fetch('http://localhost:4000/api/batteryStats');
            const data = await response.json();
            const statsArray = data['value'];
            const setStatsValue = statsArray.map((element: any, index: any) => {
                return { pv: element, amt: index * 10 };
            });
            setStats(setStatsValue);
        };
        func();
        const secTimer = setInterval(() => {
            func();
        }, 1000);
        return () => clearInterval(secTimer);
    }, []);
    return (
        <ResponsiveContainer aspect={1.6}>
            <LineChart
                data={stats}
                // margin={{
                //     top: 5,
                //     right: 30,
                //     left: 20,
                //     bottom: 5,
                // }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis width={30} />
                <Line type="monotone" dataKey="pv" stroke="#8884d8" dot={false} />
            </LineChart>
        </ResponsiveContainer>
    );
}
