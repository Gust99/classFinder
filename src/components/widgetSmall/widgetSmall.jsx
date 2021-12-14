import React from 'react'
import "./widgetSmall.css"
import { Visibility } from '@material-ui/icons'

export default function widgetSmall() {
    return (
        <div className='widgetSmall'>
        <span className='widgetSmallTitle'>Miembros nuevos</span>
            <ul className='widgetSmallList'>
                <li className='widgetSmallListItem'>
                    <img className='widgetSmallPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt=''/>
                    <div className='widgetSmallUser'>
                        <span className='widgetSmallName'>Horacio Acebey</span>
                        <span className='widgetSmallType'>Admin</span>
                    </div>
                    <button className='widgetSmallButton'>
                        <Visibility className='widgetSmallIcon'/>
                        Mostrar
                    </button>
                </li>
                <li className='widgetSmallListItem'>
                    <img className='widgetSmallPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt=''/>
                    <div className='widgetSmallUser'>
                        <span className='widgetSmallName'>Horacio Acebey</span>
                        <span className='widgetSmallType'>Admin</span>
                    </div>
                    <button className='widgetSmallButton'>
                        <Visibility className='widgetSmallIcon'/>
                        Mostrar
                    </button>
                </li>
                <li className='widgetSmallListItem'>
                    <img className='widgetSmallPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt=''/>
                    <div className='widgetSmallUser'>
                        <span className='widgetSmallName'>Horacio Acebey</span>
                        <span className='widgetSmallType'>Admin</span>
                    </div>
                    <button className='widgetSmallButton'>
                        <Visibility className='widgetSmallIcon'/>
                        Mostrar
                    </button>
                </li>
                <li className='widgetSmallListItem'>
                    <img className='widgetSmallPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt=''/>
                    <div className='widgetSmallUser'>
                        <span className='widgetSmallName'>Horacio Acebey</span>
                        <span className='widgetSmallType'>Admin</span>
                    </div>
                    <button className='widgetSmallButton'>
                        <Visibility className='widgetSmallIcon'/>
                        Mostrar
                    </button>
                </li>
                <li className='widgetSmallListItem'>
                    <img className='widgetSmallPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt=''/>
                    <div className='widgetSmallUser'>
                        <span className='widgetSmallName'>Horacio Acebey</span>
                        <span className='widgetSmallType'>Admin</span>
                    </div>
                    <button className='widgetSmallButton'>
                        <Visibility className='widgetSmallIcon'/>
                        Mostrar
                    </button>
                </li>
            </ul>
        </div>
    )
}
