import React,{ useState, useEffect } from 'react'
import "./newMateriaParticular.css"

export default function NewMateriaParticular() {

    const [nombre_materia, setNombreMateria] = useState('');
    const [descripcion, setDescripcion] = useState('');
    // const [usuario, setUsuario] = useState([]);
    // const [usuarioSend, setUsuarioSend] = useState("");
    //const id_usuario = "619ff56d24cfbf08d311601d";

    const [usuario, setUsuario] = useState('');

    useEffect(() => {
        try {
            setUsuario(JSON.parse(localStorage.getItem('usuario')));
            console.log(usuario);
        } catch(err) {

        }
    }, [])

    const handleNombreMateria = (e) =>{
        setNombreMateria(e.target.value);
    }
    const handleDescripcion = (e) =>{
        setDescripcion(e.target.value);
    }

    // const handleUsuario = (e) =>{
    //     setUsuarioSend(e.target.value);
    // }

    const handleSubmit =(e)=>{
        e.preventDefault();
        if(nombre_materia != '' && descripcion != ''){
            const requestInit ={
                method : 'POST',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    nombre_materia: nombre_materia,
                    descripcion: descripcion,
                    id_usuario: usuario.sudId
                })
            }

            fetch('http://localhost:3800/api/addMateriaParticular',requestInit)
            .then(res => res.json())
            .then(res => {
                if(res){
                    console.log(res.materia_particular);
                }
            })

        }
        else{
            alert('Introduzca todos los campos');
        }
    }

    return (
        <div className='newMateriaParticular'>
            <h1>Nueva Materia</h1>
            <form className='newMateriaParticularForm' onSubmit={handleSubmit}>
                <div className='newMateriaParticularItem'>
                    <label>Materia</label>
                    <input onChange={handleNombreMateria} value={nombre_materia} type='text'/>
                </div>
                <div className='newMateriaParticularItem'>
                    <label>Descripcion</label>
                    <input type='text' onChange={handleDescripcion} value={descripcion}/>
                </div>
                {/* <div className='newMateriaParticularItem'>
                    <label>Profesor</label>
                    <select onChange={handleUsuario}>
                        {
                            usuario?
                            (usuario.map(usuario => (
                                <option value={usuario._id}>{usuario.nombre}</option>
                            )))
                            : <option></option>
                        }
                    </select>
                </div> */}
                <button className='newMateriaParticularButton'>Crear</button>
            </form>
        </div>
    )
}

