import React from "react"
import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis } from "recharts"
import "./index.scss"

const DATA = [
    {name: 'Jan', uv: 5400, pv: 5240, amt: 1240},
    {name: 'Feb', uv: 7300, pv: 4139, amt: 3221},
    {name: 'Mar', uv: 8200, pv: 7980, amt: 5229},
    {name: 'Apr', uv: 6278, pv: 4390, amt: 3200},
    {name: 'May', uv: 3189, pv: 7480, amt: 6218},
    {name: 'Jun', uv: 9478, pv: 6790, amt: 2200},
    {name: 'Jul', uv: 1289, pv: 1980, amt: 7218},
    {name: 'Aug', uv: 3139, pv: 2380, amt: 5150},
    {name: 'Sep', uv: 5349, pv: 3430, amt: 3210},
    {name: 'Oct', uv: 6548, pv: 2136, amt: 3210},
    {name: 'Nov', uv: 7545, pv: 1313, amt: 3210},
    {name: 'Dec', uv: 3166, pv: 131, amt: 3210},
]

const ChartCard = props => {
    return (
        <div className="chart-card">
            <ResponsiveContainer>
                <LineChart data={DATA} margin={{top: 0, right: 5, left: 5, bottom: 0}}>
                    <Line type="natural" dataKey="pv" stroke="#242426" strokeWidth={3} />
                    <Line type="natural" dataKey="uv" stroke="#d2c3f7" strokeWidth={3} />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <Tooltip />
                </LineChart>
            </ResponsiveContainer>            
        </div>
    )
}

export default ChartCard