import React ,{ useState, useEffect } from 'react'
import "./topbar.css"
import {NotificationsNone, Settings, Language} from '@material-ui/icons'
import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

export default function Topbar() {

    const [contenido, setContenido] = useState([]);
    var usuario = null;

    const handleLogOut = () => {
        localStorage.setItem('usuario','');
        window.location.reload();
    }

    useEffect(async () => {
        try {
            usuario = await localStorage.getItem('usuario');
        } catch(err) {
            alert('Usuario no encontrado');
        }

        var auxContenido = null;
        if(usuario) {
            auxContenido = <>
                            <div className='topbarIconContainer'>
                                    <Link className="Link" to="/login" onClick={handleLogOut}>Log Out</Link>
                            </div>
                            <img src='https://cdn-icons-png.flaticon.com/512/147/147144.png' alt='' className='avatar'/>
                        </>; 
            setContenido(auxContenido);
        }else {
            auxContenido = <>
                            <div className='topbarIconContainer'>
                                <Link className="Link" to="/login">Login</Link>
                            </div>
                            <div className='topbarIconContainer'>
                                <Link className="Link" to="/newUser">Sign Up</Link>
                            </div>
                        </>;
            setContenido(auxContenido);
        }  
    }, [])

    return (
    <div className='topbar'>
        <div className='topbarWrapper'>
            <div className='topleft'>
                <Link className="logo" to="/">ClassFinder</Link>
            </div>
            <div className='topRight'>
                {contenido}
            </div>
        </div>
    </div>
    )
}
