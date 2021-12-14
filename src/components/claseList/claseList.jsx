import React ,{ useState, useEffect } from 'react'
import { DataGrid} from '@material-ui/data-grid'
import './claseList.css'
import {userRows} from '../../dataTest'
import {Link} from 'react-router-dom'
import { DeleteOutlineOutlined } from "@material-ui/icons"

export default function ClaseList() {
    const [data, setData] = useState([]);

    /*
        limite : Number,
        costo_hora : Number,
        direccion : String,
        descripcion : String,
        visible : Boolean,
        id_usuario : {type : Schema.ObjectId, ref : 'Usuario'},
        id_materia_particular : {type : Schema.ObjectId, ref : 'Materia_Particular'}
    */
    
    useEffect(() => {
        const getClases = () =>{
            fetch('http://localhost:3800/api/getClases')
            .then(res => res.json())
            .then(res => {
                if(res) {
                    setData(res.Clases)
                }
            })
        }
        getClases()
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
