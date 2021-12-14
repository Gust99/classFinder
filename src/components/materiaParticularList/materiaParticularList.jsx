import React ,{ useState, useEffect } from 'react'
import { DataGrid} from '@material-ui/data-grid'
import './materiaParticularList.css'
import {userRows} from '../../dataTest'
import {Link, useLocation} from 'react-router-dom'
import ModalClases from "../modals/ModalClases";
import { DeleteOutlineOutlined } from "@material-ui/icons"

export default function MateriaParticularList() {
    const [data, setData] = useState([]);
    const location = useLocation();
    //  const materiaParticular = location.state.materiaParticularSend;
    //  const id_usuario = materiaParticular.id;
    let usuario = null;
    
    useEffect(async () => {
        try {
            usuario = JSON.parse(localStorage.getItem('usuario'));

            const getMateriasProfesor = () =>{
                fetch('http://localhost:3800/api/getMateriasProfesor/'+usuario.sudId)
                .then(res => res.json())
                .then(res => {
                    if(res) {
                        setData(res.materiasProfesor)
                    }
                })
            }
            getMateriasProfesor()
        } catch(err) {
            alert('Usuario no encontrado');
        }
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
        },
        { field: 'crear_clases', headerName: 'Asignar', width: 150, headerStyle: {textjustify: 'center'},
        renderCell: (params) =>{
            return(
                <>  
                     <ModalClases clase={params.row._id}/>
                </>
            )
        }
        },
        { field: 'ver_clases', headerName: 'Clases', width: 150,
            renderCell: (params) =>{
                return(
                    <>  
                        <Link to={"/clasesProfesor/"+params.row.id_usuario+"/"+params.row._id} state={{ claseSend : params.row }}>
                            <button className='materiaParticularListEdit'>Ver Clases</button>
                        </Link>
                    </>
                )
            }
        },
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
                <Link to={"/newMateriaParticular/"}>+ Add</Link>
            </div>
        )
}
