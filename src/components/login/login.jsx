import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import React,{ useState, useEffect } from 'react'
import './login.css';

export default function Login() {

    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const handleUsername = (e) =>{
        setUserName(e.target.value);
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(username !== '' && password !== ''){
            const requestInit ={
                method : 'POST',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    username: username,
                    password: password
                })
            };

            await fetch('http://localhost:3800/api/loginUsuario',requestInit)
            .then(res => res.json())
            .then(res => {
                if(res){
                    let buff = new Buffer(res.token.toString().split('.')[1], 'base64');
                    let usuario = buff.toString('ascii');
                    console.log(usuario);
                    localStorage.setItem('usuario',usuario);
                    alert("Iniciaste sesion correctamente");
                }
            });
            window.location.reload();
            window.location.replace('/');
        }
        else{
            alert('Introduzca todos los campos');
        }
    }

    return (
        <div className='container'>
            <form>
                <div className='form-inner'>
                    <h2>LOGIN</h2>
                    <div className='form-group'>
                        <input onChange={handleUsername} value={username} type='text' name='username' id='username' placeholder="Username"/>
                    </div>
                    <div className='form-group'>
                        <input onChange={handlePassword} value={password} type='password' name='password' id='password' placeholder="Password"/>
                    </div>
                    <button onClick={handleSubmit} id="button">LOGIN</button>
                </div>
            </form>
        </div>
    )
}
