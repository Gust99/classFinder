import React from 'react'
import "./home.css"
import Box from '../../boxInfo/boxInfo'
import Chart from '../../chart/chart'
import { data_1 } from '../../../dataTest'
import { data_2 } from '../../../dataTest_2'

import WidgetSmall from '../../widgetSmall/widgetSmall'
import WidgetLong from '../../widgetLong/widgetLong'

import ClaseList from '../../claseList/claseList'

export default function home() {
  return (
    <div className='home'>
        <ClaseList/>
    </div>
  )
}
