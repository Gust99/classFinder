import React ,{ useState, useEffect } from 'react'
import { DataGrid} from '@material-ui/data-grid'
import './materiaParticularList.css'
import {userRows} from '../../dataTest'
import {Link} from 'react-router-dom'
import { DeleteOutlineOutlined } from "@material-ui/icons"

export default function MateriaParticularList() {
    const [data, setData] = useState([]);
    
    useEffect(() => {
        const getMateriasParticulares = () =>{
            fetch('http://localhost:3800/api/getMateriasParticulares')
            .then(res => res.json())
            .then(res => {
                if(res) {
                    setData(res.materia_particular)
                }
            })
        }
        getMateriasParticulares()
    }, [])
    
    const handleDelete = (id) =>{
        setData(data.filter((item) => item.id !== id ))
    
        const requesInit ={
            method : 'PUT',
            headers : {
                'Content-Type':'application/json',
            },
        }
    
        fetch('http://localhost:3800/api/deleteMateriaParticular/'+id,requesInit)
        .then(res => res.json())
        .then(res => {if(res){
            console.log(res.MateriasParticulares);
            alert('La materia fue eliminada!');
        }})
    }
    
    const columns = [
        //{ field: '_id', headerName: 'ID', width: 250 },
        { field: 'nombre_materia', headerName: 'Materia', width: 150 },
        { field: 'descripcion', headerName: 'Descripcion', width: 150 },
        { field: 'actions', headerName: 'Acciones', width: 150,
            renderCell: (params) =>{
                return(
                    <>  
                        <Link to={"/materiaParticular/"+params.row._id} state={{ materiaParticularSend : params.row }}>
                            <button className='materiaParticularListEdit'>Edit</button>
                        </Link>
                        <DeleteOutlineOutlined className='materiaParticularListDelete' onClick={()=>handleDelete(params.row._id)}/>
                    </>
                )
            }
        }
      ];
      
        return (
            <div className='materiaParticularList'>
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
