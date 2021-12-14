import React ,{ useState, useEffect } from 'react'
import { Home, Shop, Android} from '@material-ui/icons'
import "./sidebar.css"
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Sidebar() {

    const [contenido, setContenido] = useState([]);
    var usuario = null;

    useEffect(() => {
        try {
            usuario = JSON.parse(localStorage.getItem('usuario'));
            var auxContenido = null;
            if(usuario.tipo === 'Profesor') {
                auxContenido = <>
                                <li className='sidebarListItem'>
                                    <Home />  
                                    <Link className="Link" to={"/materiasParticulares/" + usuario.sudId}>Materias</Link>
                                </li>
                            </>; 
                setContenido(auxContenido);
            }else if(usuario.tipo === 'Estudiante'){
                auxContenido = <>
                                <li className='sidebarListItem'>
                                    <Home />  
                                    <Link className="Link" to={"/clasesEstudiante/"}>Clases</Link>
                                </li>
                            </>;
                setContenido(auxContenido);
            } 
        } catch(err) {
            alert('Usuario no encontrado');
        } 
    }, [])

    return (
    <div className='sidebar'>
        <div className='sidebarWrapper'>
            <div className='sidebarMenu'>
                <h3 className='sidebarTitle'>Menu</h3>
                <ul className='sidebarList'>
                    {contenido}
                </ul>
            </div>
        </div>
    </div>
    )
}
