import React from 'react'
import "./chart.css"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"

export default function chart({title, data, dataKey}) {

  return (
    <div className='chart'>
        <h3 className='chartTitle'>{title}</h3>
        <ResponsiveContainer width='100%' aspect={4 / 1}>
            <LineChart data={data} width={500} height={300}>
                <CartesianGrid strokeDasharray='5 5'/>
                <XAxis dataKey='mes' stroke='#555'/>
                <Tooltip/>
                <Legend/>
                <Line type='montone' dataKey={dataKey} stroke='#666'/>
            </LineChart>
        </ResponsiveContainer>
    </div>
  )
}
