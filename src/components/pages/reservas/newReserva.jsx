import React,{ useState, useEffect } from 'react';
import "./newReserva.css"; 


export default function NewReserva() {
 
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    const usuario = "6198313e733dcf64a2256aea";
    const clase = "619fd553e1d6dd277bc3429b";
    //const [clase, setClase] = useState([]);
    const [tiempo, setTiempo] = useState("");
    const [costoTotal, setCostoTotal] = useState("");

    // const handleClase = (e) =>{
    //     setClase(e.target.value);
    // }
    const handleTiempo = (e) =>{
        setTiempo(e.target.value);
    }
    const handleCostoTotal = (e) =>{
        setCostoTotal(e.target.value);
    }

///////  GET  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    useEffect(() => {
        const getTipo = ()=>{
            fetch('http://localhost:3800/api/getClases')
            .then(res => res.json())
            .then(res => {
                if(res){
                    console.log(res.Clases);
                    //setClase(res.Clases);
                }
            })
        }
        getTipo()
    }, [])

///////  POST  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const handleSubmit =()=>{
    if(tiempo != '' && costoTotal != ''){
        const requestInit ={
            method : 'POST',
            headers : {
                'Content-Type':'application/json',
            },
            body : JSON.stringify({
                tiempo: tiempo,
                costo_total: costoTotal,
                id_clase: clase,
                id_usuario: usuario
            })
        }
        fetch('http://localhost:3800/api/addReserva',requestInit)
        .then(res => res.json())
        .then(res => {
            if(res){console.log(res.tiempo);}
        })

    }
    else{ alert('Introduzca todos los campos');
    }
}
///////  RETURN  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    return (
        <div className='newUser'>
            <h1>Formulario - Reservación de Clase</h1>
            <form className='newUserForm' onSubmit={handleSubmit}>

                <div className='newUserItem'>
                    <label>Tiempo</label>
                    <input onChange={handleTiempo} value={tiempo} type='text'/>
                </div>
                <div className='newUserItem'>
                    <label>Costo Total</label>
                    <input onChange={handleCostoTotal} value={costoTotal} type='number'/>
                </div>

                {/*<div className='newUserItem'>
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
                </div>
                    */}

                <button className='newUserButton'>Crear</button>
            </form>
        </div>
    )

}





