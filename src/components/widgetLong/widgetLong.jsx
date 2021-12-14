import React from 'react'
import "./widgetLong.css"

export default function widgetLong() {

    const Button = ({type}) => {
        return <button className={"widgetLongButton "+type}>{type}</button>
    }

    return (
        <div className='widgetLong'>
            <span className='widgetLongTitle'>Ultimas transacciones</span>
            <table className='widgetLongTable'>
                <tr className='widgetLongTr'>
                    <th className='widgetLongTh'>Cliente</th>
                    <th className='widgetLongTh'>Fecha</th>
                    <th className='widgetLongTh'>Monto</th>
                    <th className='widgetLongTh'>Estado</th>
                </tr>
                <tr>
                    <td className='widgetLongUser'>
                        <img className='widgetLongPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt=''/>
                        <span className='widgetLongName'>Horacio Acebey</span>
                    </td>
                    <td className='widgetLongFecha'>09/11/2021</td>
                    <td className='widgetLongMonto'>1000 bs.</td>
                    <td className='widgetLongEstado'><Button type='Aprobado'/></td>
                </tr>
                <tr>
                    <td className='widgetLongUser'>
                        <img className='widgetLongPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt=''/>
                        <span className='widgetLongName'>Horacio Acebey</span>
                    </td>
                    <td className='widgetLongFecha'>09/11/2021</td>
                    <td className='widgetLongMonto'>1000 bs.</td>
                    <td className='widgetLongEstado'><Button type='Pendiente'/></td>
                </tr>
                <tr>
                    <td className='widgetLongUser'>
                        <img className='widgetLongPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt=''/>
                        <span className='widgetLongName'>Horacio Acebey</span>
                    </td>
                    <td className='widgetLongFecha'>09/11/2021</td>
                    <td className='widgetLongMonto'>1000 bs.</td>
                    <td className='widgetLongEstado'><Button type='Rechazado'/></td>
                </tr>
                <tr>
                    <td className='widgetLongUser'>
                        <img className='widgetLongPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt=''/>
                        <span className='widgetLongName'>Horacio Acebey</span>
                    </td>
                    <td className='widgetLongFecha'>09/11/2021</td>
                    <td className='widgetLongMonto'>1000 bs.</td>
                    <td className='widgetLongEstado'><Button type='Rechazado'/></td>
                </tr>
                <tr>
                    <td className='widgetLongUser'>
                        <img className='widgetLongPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt=''/>
                        <span className='widgetLongName'>Horacio Acebey</span>
                    </td>
                    <td className='widgetLongFecha'>09/11/2021</td>
                    <td className='widgetLongMonto'>1000 bs.</td>
                    <td className='widgetLongEstado'><Button type='Pendiente'/></td>
                </tr>
                <tr>
                    <td className='widgetLongUser'>
                        <img className='widgetLongPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt=''/>
                        <span className='widgetLongName'>Horacio Acebey</span>
                    </td>
                    <td className='widgetLongFecha'>09/11/2021</td>
                    <td className='widgetLongMonto'>1000 bs.</td>
                    <td className='widgetLongEstado'><Button type='Aprobado'/></td>
                </tr>
                <tr>
                    <td className='widgetLongUser'>
                        <img className='widgetLongPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt=''/>
                        <span className='widgetLongName'>Horacio Acebey</span>
                    </td>
                    <td className='widgetLongFecha'>09/11/2021</td>
                    <td className='widgetLongMonto'>1000 bs.</td>
                    <td className='widgetLongEstado'><Button type='Aprobado'/></td>
                </tr>
            </table>
        </div>
    )
}
