import React,{ useState, useEffect } from 'react'
import "./newClase.css"

export default function NewClase() {

    const [limite, setLimite] = useState(0);
    const [costo_hora, setCostoHora] = useState(0);
    const [direccion, setDireccion] = useState('');
    const [descripcion, setDescripcion] = useState('');
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

    const handleSubmit =()=>{
        if(direccion != '' && descripcion != ''){
            const requestInit ={
                method : 'POST',
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

            fetch('http://localhost:3800/api/addClase',requestInit)
            .then(res => res.json())
            .then(res => {
                if(res){
                    console.log(res.Clase);
                }
            })

        }
        else{
            alert('Introduzca todos los campos');
        }
    }

    return (
        <div className='newUser'>
            <h1>Nueva Clase</h1>
            <form className='newUserForm' onSubmit={handleSubmit}>
                <div className='newUserItem'>
                    <label>Limite</label>
                    <input onChange={handleLimite} value={limite} type='number'/>
                </div>
                <div className='newUserItem'>
                    <label>Costo por hora</label>
                    <input onChange={handleCostoHora} value={costo_hora} type='number'/>
                </div>
                <div className='newUserItem'>
                    <label>Direccion</label>
                    <input onChange={handleDireccion} value={direccion} type='text'/>
                </div>
                <div className='newUserItem'>
                    <label>Descripcion</label>
                    <input type='text' onChange={handleDescripcion} value={descripcion}/>
                </div>
                {/* <div className='newUserItem'>
                    <label>Tipo de usuario</label>
                    <select onChange={handleTipo}>
                        {
                            tipoUsuario?
                            (tipoUsuario.map(tipo => (
                                <option value={tipo._id}>{tipo.nombre}</option>
                            )))
                            : <option></option>
                        }
                    </select>
                </div> */}
                <button className='newUserButton'>Crear</button>
            </form>
        </div>
    )
}
