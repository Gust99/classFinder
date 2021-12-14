import React, { useState } from 'react'
import "./materiaParticular.css"
import {PermIdentity, CalendarToday, PhoneAndroid, MailOutline, LocalActivity, Publish, Public, Description} from '@material-ui/icons'
import { Link, useLocation } from 'react-router-dom'

export default function MateriaParticular() {

    const location = useLocation();
    const materiaParticular = location.state.materiaParticularSend;

    const [nombre_materia, setNombreMateria] = useState(materiaParticular.nombre_materia);
    const [descripcion, setDescripcion] = useState(materiaParticular.descripcion);
    const id_usuario = "619ff56d24cfbf08d311601d";

    const handleNombreMateria = (e) =>{
        setNombreMateria(e.target.value);
    }
    const handleDescripcion = (e) =>{
        setDescripcion(e.target.value);
    }

    const handleSubmit = () =>{
        if(nombre_materia != ''){
            const requesInit ={
                method : 'PUT',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    nombre_materia: nombre_materia,
                    descripcion: descripcion,
                    id_usuario: id_usuario
                })
            }
            fetch('http://localhost:3800/api/updateMateriaParticular/'+materiaParticular._id,requesInit)
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
        <div className='materiaParticular'>
            <div className='materiaParticularTitleContainer'>
                <h1 className='materiaParticularTitle'>Editar MateriaParticular</h1>
                <Link to='/newMateriaParticular'>
                    <button className='materiaParticularAddButton'>Nuevo</button>
                </Link>
            </div>
            <div className='materiaParticularContainer'>
                <div className='materiaParticularShow'>
                    <div className='materiaParticularShowTop'>
                        <img className='materiaParticularShowPic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
                    </div>
                    <div className='materiaParticularShowBottom'>
                        <span className='materiaParticularShowTitle'>Materia</span>
                        <div className='materiaParticularShowInfo'>
                            <PermIdentity className='materiaParticularShowIcon'/>
                            <span className='materiaParticularShowInfoTitle'>{nombre_materia}</span>
                        </div>

                        <span className='materiaParticularShowTitle'>Descripcion</span>
                        <div className='materiaParticularShowInfo'>
                            <PermIdentity className='materiaParticularShowIcon'/>
                            <span className='materiaParticularShowInfoTitle'>{descripcion}</span>
                        </div>
                    </div>
                </div>
                <div className='materiaParticularUpdate'>
                    <span className='materiaParticularUpdateTitle'>Editar</span>
                    <form className='materiaParticularUpdateForm' onSubmit={handleSubmit} action='/materiasParticulares'>
                        <div className='materiaParticularUpdateLeft'>
                            <div className='materiaParticularUpdateItem'>
                                <label>Materia</label>
                                <input type='text' value={nombre_materia} onChange={handleNombreMateria} className='materiaParticularUpdateInput'/>
                                <label>Descripcion</label>
                                <input type='text' value={descripcion} onChange={handleDescripcion} className='materiaParticularUpdateInput'/>
                            </div> 
                            <button style={{marginTop:'20px'}} className='materiaParticularAddButton'>Editar</button>
                        </div>
                        
                        <div className='materiaParticularUpdateRight'>
                            <div className='materiaParticularUpdateUpload'>
                                <img className='materiaParticularUpdatePic' src='https://cdn-icons-png.flaticon.com/512/147/147144.png'/>
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
