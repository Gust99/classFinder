import React, { useState } from 'react'
import "./clase.css"
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocalActivity, Publish, Public, Description} from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

export default function Clase() {

    const location = useLocation();
    const clase = location.state.claseSend;

    /*
        limite : Number,
        costo_hora : Number,
        direccion : String,
        descripcion : String,
        visible : Boolean,
        id_usuario : {type : Schema.ObjectId, ref : 'Usuario'},
        id_materia_particular : {type : Schema.ObjectId, ref : 'Materia_Particular'}
    */

    const [limite, setLimite] = useState(clase.limite);
    const [costo_hora, setCostoHora] = useState(clase.costo_hora);
    const [direccion, setDireccion] = useState(clase.direccion);
    const [descripcion, setDescripcion] = useState(clase.descripcion);
    const id_usuario = "619ff56d24cfbf08d311601d";
    const id_materia_particular = "61a00db882bc878910015cf3";

    const handleLimite = (e) =>{
        setLimite(e.target.value);
    }
    const handleCostoHora = (e) =>{
        setCostoHora(e.target.value);
    }
    const handleDireccion = (e) =>{
        setDireccion(e.target.value);
    }
    const handleDescripcion = (e) =>{
        setDescripcion(e.target.value);
    }

    const handleSubmit = () =>{
        if(direccion != ''){
            const requesInit ={
                method : 'PUT',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    limite: limite,
                    costo_hora: costo_hora,
                    direccion: direccion,
                    descripcion: descripcion,
                    id_usuario: id_usuario,
                    id_materia_particular: id_materia_particular
                })
            }
            fetch('http://localhost:3800/api/updateClase/'+clase._id,requesInit)
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

    return (
        <div className='user'>
            <div className='userTitleContainer'>
                <h1 className='userTitle'>Editar Usuario</h1>
                <Link to='/newClase'>
                    <button className='userAddButton'>Nuevo</button>
                </Link>
            </div>
            <div className='userContainer'>
                <div className='userShow'>
                    <div className='userShowTop'>
                        <img className='userShowPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                        <div className='userShowTopTitle'>
                            <span className='userShowUserName'>{descripcion}</span>
                            {/* <span className='userShowUserTitle'>...</span> */}
                        </div>
                    </div>
                    <div className='userShowBottom'>
                        <span className='userShowTitle'>Detalle</span>
                        <div className='userShowInfo'>
                            <PermIdentity className='userShowIcon'/>
                            <span className='userShowInfoTitle'>{direccion}</span>
                        </div>
                        <div className='userShowInfo'>
                            <CalendarToday className='userShowIcon'/>
                            <span className='userShowInfoTitle'>{costo_hora} Bs./h</span>
                        </div>
                        
                        <span className='userShowTitle'>Limite</span>
                        <div className='userShowInfo'>
                            <PhoneAndroid className='userShowIcon'/>
                            <span className='userShowInfoTitle'>{limite} personas </span>
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
                    <form className='userUpdateForm' onSubmit={handleSubmit} action='/clases'>
                        <div className='userUpdateLeft'>
                            <div className='userUpdateItem'>
                                <label>Limite</label>
                                <input type='number' value={limite} onChange={handleLimite} className='userUpdateInput'/>
                                <label>Costo por hora</label>
                                <input type='number' value={costo_hora} onChange={handleCostoHora} className='userUpdateInput'/>
                                <label>Direccion</label>
                                <input type='text' value={direccion} onChange={handleDireccion} className='userUpdateInput'/>
                                <label>Descripcion</label>
                                <input type='text' value={descripcion} onChange={handleDescripcion} className='userUpdateInput'/>
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
