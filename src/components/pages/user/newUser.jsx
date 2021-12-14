import React,{ useState, useEffect } from 'react'
import "./newUser.css"

export default function NewUser() {

    const [nombre, setNombre] = useState("");
    const [fecha_nacimiento, setFechaNacimiento] = useState("");
    const [contacto, setContacto] = useState("");
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [tipoUsuario, setTipoUsuario] = useState([]);
    const [tipoUsuarioSend, setTipoUsuarioSend] = useState("");

    useEffect(() => {
        const getTipo = ()=>{
            fetch('http://localhost:3800/api/getTiposUsuario')
            .then(res => res.json())
            .then(res => {
                if(res){
                    console.log(res.tipos_usuario);
                    setTipoUsuario(res.tipos_usuario);
                    setTipoUsuarioSend(res.tipos_usuario[0]._id);
                }
            })
        }
        getTipo()
    }, [])

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
        setUserName(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }
    const handleTipo = (e) =>{
        setTipoUsuarioSend(e.target.value);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(username != '' && password != ''){
            const requestInit ={
                method : 'POST',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    nombre: nombre,
                    fecha_nacimiento: fecha_nacimiento,
                    contacto: contacto,
                    username: username,
                    password: password,
                    id_tipo_usuario: tipoUsuarioSend
                })
            }

            await fetch('http://localhost:3800/api/addUsuario',requestInit)
            .then(res => res.json())
            .then(res => {
                if(res){
                    console.log(res.usuario);
                }
            })

        }
        else{
            alert('Introduzca todos los campos');
        }
    }

    return (
        <div className=''>
            <form className=''>
                <div className='form-inner'>
                    <h2>Sign Up</h2>
                    <div className='form-group'>
                        <input className="input" onChange={handleNombre} value={nombre} type='text' placeholder='Nombre'/>
                    </div>
                    <div className='form-group'>
                        <label>Fecha de nacimiento</label><br/>
                        <input className="input" onChange={handleFechaNacimiento} value={fecha_nacimiento} type='date'/>
                    </div>
                    <div className='form-group'>
                        <input className="input" onChange={handleContacto} value={contacto} type='text' placeholder='Contacto'/>
                    </div>
                    <div className='form-group'>
                        <input className="input" type='text' onChange={handleUsername} value={username} placeholder='Username'/>
                    </div>
                    <div className='form-group'>
                        <input className="input" type='password' onChange={handlePassword} value={password} placeholder='Password'/>
                    </div>
                    <div className='form-group'>
                        <label>Rol</label><br/>
                        <select className="input" onChange={handleTipo}>
                            {
                                tipoUsuario?
                                (tipoUsuario.map(tipo => (
                                    <option value={tipo._id}>{tipo.nombre}</option>
                                )))
                                : <option></option>
                            }
                        </select>
                    </div>
                    <button id="button"  onClick={handleSubmit}>Send</button>
                </div>
            </form>
        </div>
    )
}
