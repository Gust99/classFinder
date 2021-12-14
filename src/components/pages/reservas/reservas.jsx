import React, { useState, useEffect  } from 'react'
import "./reservas.css"
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField} from "@mui/material"; 

export default function Reserva() {
///////////////////////////////// Constantes ////////////////////////////////////
const [reservas, setReservas] = useState([]);
const [reserva, setReserva] = useState("");
const [usuarios, setUsuarios] = useState([]);
const [clases, setClases] = useState([]);
const [tiempo, setTiempo] = useState("");
const [costoTotal, setCostoTotal] = useState("");

// const handleClase = (e) =>{
//     setClase(e.target.value);
// }
const handleReserva = (e) =>{
    setReserva(e);
}
const handleTiempo = (e) =>{
    setTiempo(e.target.value);
}
const handleCostoTotal = (e) =>{
    setCostoTotal(e.target.value);
}

///////////////////////////////// GET ////////////////////////////////////

useEffect(() => {
    const getReservas = ()=>{
        fetch('http://localhost:3800/api/getReservas')
        .then(res => res.json())
        .then(res => {
            if(res){
                setReservas(res.reserva);
                console.log(res.reserva);
            }
        })
    }
    getReservas()

    const getUsuarios = ()=>{
        fetch('http://localhost:3800/api/getUsuarios')
        .then(res => res.json())
        .then(res => {
            if(res){
                setUsuarios(res.usuarios);
                console.log(res.usuarios);
            }
        })
    }
    getUsuarios()

    const getClases = ()=>{
        fetch('http://localhost:3800/api/getClases')
        .then(res => res.json())
        .then(res => {
            if(res){
                setClases(res.Clases);
                console.log(res.Clases);
            }
        })
    }
    getClases()

}, [])

///////////////////////////////// PUT ////////////////////////////////////

const handleSubmit = () =>{
    if(reserva != ''){
        const requesInit ={
            method : 'PUT',
            headers : {
                'Content-Type':'application/json',
            },
            body : JSON.stringify({
                tiempo: tiempo,
                costo_total: costoTotal,
            })
        }
        fetch('http://localhost:3800/api/updateReserva/'+reserva,requesInit)
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

///////////////////////////////// DELETE ////////////////////////////////////

const handleDelete = (e) =>{
    
    const requesInit ={
        method : 'PUT',
        headers : {
            'Content-Type':'application/json',
        },
        body : JSON.stringify({
            visible: false,
        })
    }
    fetch('http://localhost:3800/api/deleteReserva/'+e,requesInit)
    .then(res => res.json())
    .then(res => {
        if(res){
            alert("Registro completado");
        }
    })

}

///////////////////////////////// COLUMNAS/TABLA ////////////////////////////////////
const columns = [
    {
      id: "Clase",
      label: "Clase",
      minWidth: 170,
      align: "center",
    },
    {
      id: "Usuario",
      label: "Usuario",
      minWidth: 170,
      align: "center",
    },
    
    {
        id: "Tiempo",
        label: "Tiempo",
        minWidth: 170,
        align: "center",
      },
    {
        id: "Costo_Total",
        label: "Costo_Total",
        minWidth: 170,
        align: "center",
    },
    {
        id: "Editar",
        label: "Eliminar",
        minWidth: 170,
        align: "center",
    },
    {
        id: "Eliminar",
        label: "Eliminar",
        minWidth: 170,
        align: "center",
    },
  ];


return (
    <div className='Reservas'>
    <h1>Administrar Reservas</h1>
    <form className='newUserForm' onSubmit={handleSubmit}>
    <div className='newUserItem'>
        <label>Administrar Reservas</label>

            <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
                    <TableHead>
                        <TableRow>
                        {columns.map((column) => (
                            <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ top: 57, minWidth: column.minWidth }}
                            >
                            <b>{column.label}</b>
                            </TableCell>
                        ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(reservas
                        ).map((row) => (
                        <TableRow key={row._id}>

                            <TableCell style={{ width: 160 }} align="center">
                            {row.id_usuario}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                            {row.id_clase}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                            {row.tiempo}
                            </TableCell>
                            <TableCell style={{ width: 160 }} align="center">
                            {row.costo_total}
                            </TableCell>


                            <TableCell style={{ width: 160 }} align="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    style={{ marginLeft: 16 }}
                                    onClick={() => {
                                        handleReserva(row._id)
                                        setTiempo(row.tiempo)
                                        setCostoTotal(row.costo_total)
                                    }}
                                >
                                    Editar
                                </Button>
                                </TableCell>

                                <TableCell style={{ width: 160 }} align="center">
                                <Button
                                    variant="contained"
                                    color="primary"
                                    size="small"
                                    style={{ marginLeft: 16 }}
                                    onClick={() => {
                                        handleDelete(row._id)
                                    }}
                                >
                                    Eliminar
                                </Button>
                                </TableCell>


                        </TableRow>
                        ))}

                    </TableBody>
                   
                    </Table>
                </TableContainer>
        </div>

        <div className='newUserItem'>
        <label>Editar</label>
                            
                <div className='newUserItem'>
                    <label>Tiempo</label>
                    <input onChange={handleTiempo} value={tiempo} type='text'/>
                </div>
                <div className='newUserItem'>
                    <label>Costo Total</label>
                    <input onChange={handleCostoTotal} value={costoTotal} type='number'/>
                </div>

        </div>
        <button className='newUserButton'>Editar</button>
    </form>
</div>
)
}