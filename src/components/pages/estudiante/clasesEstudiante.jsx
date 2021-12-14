import React ,{ useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import Divider from '@mui/material/Divider'
import './clasesEstudiante.css'
import { DeleteOutlineOutlined } from "@material-ui/icons"
// import ModalReservas from "../modals/ModalReservas";

export default function ClasesEstudiante() {

    //GET CLASES
    const [data, setData] = useState([]);
    let usuario = null;
    useEffect(async () => {
        try {
            usuario = JSON.parse(localStorage.getItem('usuario'));
            console.log(usuario);
            const getClases = () =>{
                fetch('http://localhost:3800/api/getReservasClasesEstudiante/'+usuario.sudId)
                .then(res => res.json())
                .then(res => {
                    if(res) {
                        console.log(res)
                        var clases1 = res.reservasClases;
                        clases1.forEach(Clase => {
                            Clase.descripcion = Clase.id_clase.descripcion;
                        });
                        setData(clases1);
                        console.log(data);
                    }
                })
            }
            getClases()
        } catch(err){}
    }, [])

    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id !== id ))
    
        const requesInit ={
            method : 'PUT',
            headers : {
                'Content-Type':'application/json',
            },
        }
    
        fetch('http://localhost:3800/api/deleteReserva/'+id,requesInit)
        .then(res => res.json())
        .then(res => {if(res){
            console.log(res.Clase);
            alert('La reserva fue eliminada!');
        }})
    }

    //COLUMNAS TABLA
    const columns = [
        // { field: "nombre_materia", headerName: 'Materia', width: 250 },
        { field: 'descripcion', headerName: 'Descripcion', width: 150 },
        { field: 'tiempo', headerName: 'Tiempo', width: 150 },
        { field: 'costo_total', headerName: 'Costo total', width: 150,},
        { field: 'Acciones', headerName: 'Acciones', width: 150, headerStyle: {textjustify: 'center'},
        renderCell: (params) =>{
            return(
                <>  
                    <DeleteOutlineOutlined className='userListDelete' onClick={()=>handleDelete(params.row._id)}/>
                </>
            )
        }
        }
    ];
        
    return (
    <div className='userList'>
        <h2>Clases disponibles</h2>
        {/* <Divider/> */}
        <DataGrid
            getRowId={(row)=>row._id}
            rows={data}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            />
    </div>
    );

}
