import React from 'react'
import "./boxInfo.css"
import {ArrowDownward, ArrowUpward} from '@material-ui/icons'

export default function boxInfo() {
  return (
    <div className='box'>
        <div className='boxItem'>
            <span className='boxTittle'>BOX 1</span>
            <div className='boxContainer'>
                <span className='boxMoney'>Bs. 200</span>
                <span className='boxRate'>-15.0
                <ArrowDownward className='boxIcon negative'/></span>
            </div>
            <span className='downText'>Inserte un texto aqui!</span>
        </div>
        <div className='boxItem'>
            <span className='boxTittle'>BOX 2</span>
            <div className='boxContainer'>
                <span className='boxMoney'>Bs. 300</span>
                <span className='boxRate'>-15.0
                <ArrowDownward className='boxIcon negative'/></span>
            </div>
            <span className='downText'>Inserte un texto aqui!</span>
        </div>
        <div className='boxItem'>
            <span className='boxTittle'>BOX 2</span>
            <div className='boxContainer'>
                <span className='boxMoney'>Bs. 800</span>
                <span className='boxRate'>11.0
                <ArrowUpward className='boxIcon'/></span>
            </div>
            <span className='downText'>Inserte un texto aqui!</span>
        </div>
    </div>
  )
}
