import React, { useState } from 'react'
import "./user.css"
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocalActivity, Publish, Public} from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

export default function User() {

    const location = useLocation();
    const usuario = location.state.userSend;

    const [nombre, setNombre] = useState(usuario.nombre);
    const [fecha_nacimiento, setFechaNacimiento] = useState(usuario.fecha_nacimiento);
    const [contacto, setContacto] = useState(usuario.contacto);
    const [username, setUsername] = useState(usuario.username);
    
    const handleNombre = (e) =>{
        setNombre(e.target.value);
    }
    const handleFechaNacimiento = (e) =>{
        setFechaNacimiento(e.target.value);
    }
    const handleContacto = (e) =>{
        setContacto(e.target.value);
    }
    const handleUsername = (e) =>{
        setUsername(e.target.value);
    }

    const handleSubmit = () =>{
        if(nombre != ''){
            const requesInit ={
                method : 'PUT',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    nombre: nombre,
                    fecha_nacimiento: fecha_nacimiento,
                    contacto: contacto,
                    username: username
                })
            }
            fetch('http://localhost:3800/api/updateUsuario/'+usuario._id,requesInit)
            .then(res => res.json())
            .then(res => {
                if(res){
                    alert("Registro completado");
                }
            })
        }
        else{
            alert('Introduzca los valores!');
        }
    }
    /*
        nombre : String,
        fecha_nacimiento : Date,
        contacto : String,
        username : String,
        password : String,
        visible : Boolean,
    */
    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Editar Usuario</h1>
                <Link to='/newUser'>
                    <button className='userAddButton'>Nuevo</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img className='userShowPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                        <div className='userShowTopTitle'>
                            <span className='userShowUserName'>{nombre}</span>
                            {/* <span className='userShowUserTitle'>...</span> */}
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Detalle</span>
                        <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon'/>
                            <span className='userShowInfoTitle'>{username}</span>
                        </div>
                        <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon'/>
                            <span className='userShowInfoTitle'>{fecha_nacimiento}</span>
                        </div>
                        
                        <span className='userShowTitle'>Contacto</span>
                        <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon'/>
                            <span className='userShowInfoTitle'>{contacto}</span>
                        </div>
                        {/* <div className='userShowInfo'>
                            <MailOutline className='userShowIcon'/>
                            <span className='userShowInfoTitle'>test@test.com</span>
                        </div>
                         <div className='userShowInfo'>
                            <LocalActivity className='userShowIcon'/>
                            <span className='userShowInfoTitle'>Tarija</span>
                        </div> */}
                    </div>
                </div>
                <div className='userUpdate'>
                    <span className='userUpdateTitle'>Editar</span>
                    <form className='userUpdateForm' onSubmit={handleSubmit} action='/users'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>Nombre</label>
                                <input type='text' value={nombre} onChange={handleNombre} className='userUpdateInput'/>
                                <label>Fecha de nacimiento</label>
                                <input type='date' value={fecha_nacimiento} onChange={handleFechaNacimiento} className='userUpdateInput'/>
                                <label>Contacto</label>
                                <input type='text' value={contacto} onChange={handleContacto} className='userUpdateInput'/>
                                <label>Username</label>
                                <input type='text' value={username} onChange={handleUsername} className='userUpdateInput'/>
                            </div> 
                            <button style={{marginTop:'20px'}} className='userAddButton'>Editar</button>
                        </div>
                        
                        <div className='userUpdateRight'>
                            <div className='userUpdateUpload'>
                                <img className='userUpdatePic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                                <label htmlFor='file'><Publish/></label>
                                <input type='file' id='file' style={{display:"none"}}/>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
