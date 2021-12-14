import React from 'react'
import "./home.css"
import Box from '../../boxInfo/boxInfo'
import Chart from '../../chart/chart'
import { data_1 } from '../../../dataTest'
import { data_2 } from '../../../dataTest_2'

import WidgetSmall from '../../widgetSmall/widgetSmall'
import WidgetLong from '../../widgetLong/widgetLong'

export default function home() {
  return (
    <div className='home'>
        <Box />
        <Chart data={data_1} title='Ventas' dataKey='venta' />
        <div className='homeWidgets'>
          <WidgetSmall/>
          <WidgetLong/>
        </div>
    </div>
  )
}
