import React ,{ useState, useEffect } from 'react'
import { DataGrid} from '@material-ui/data-grid'
import './profesorClaseList.css'
import {userRows} from '../../dataTest'
import {Link, useLocation} from 'react-router-dom'
import { DeleteOutlineOutlined } from "@material-ui/icons"

export default function ProfesorClaseList() {
    const [data, setData] = useState([]);
    const location = useLocation();
    const clase = location.state.claseSend;
    const id_usuario = "61a2256e6791151df4f0a508";
    
    useEffect(() => {
        const getClasesProfesor2 = () =>{
            fetch('http://localhost:3800/api/getClasesProfesor2/'+id_usuario+'/'+clase._id)
            .then(res => res.json())
            .then(res => {
                if(res) {
                    setData(res.clasesProfesor)
                }
            })
        }
        getClasesProfesor2()
    }, [])
    
    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id !== id ))
    
        const requesInit ={
            method : 'PUT',
            headers : {
                'Content-Type':'application/json',
            },
        }
    
        fetch('http://localhost:3800/api/deleteClase/'+id,requesInit)
        .then(res => res.json())
        .then(res => {if(res){
            console.log(res.Clase);
            alert('La clase fue eliminada!');
        }})
    }
    
    const columns = [
        //{ field: '_id', headerName: 'ID', width: 250 },
        { field: 'limite', headerName: 'Limite de estudiantes', width: 130 },
        { field: 'costo_hora',headerName: 'Costo/Hora',width: 150,},
        { field: 'direccion', headerName: 'Direccion', width: 150 },
        { field: 'descripcion', headerName: 'Descripcion', width: 150 },
        { field: 'actions', headerName: 'Acciones', width: 150,
            renderCell: (params) =>{
                return(
                    <>  
                        <Link to={"/clase/"+params.row._id} state={{ claseSend : params.row }}>
                            <button className='userListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlineOutlined className='userListDelete' onClick={()=>handleDelete(params.row._id)}/>
                    </>
                )
            }
        }
      ];
      
        return (
            <div className='userList'>
                <DataGrid
                    getRowId={(row)=>row._id}
                    rows={data}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
        )
}
