import React ,{ useState, useEffect } from 'react'
import { DataGrid} from '@material-ui/data-grid'
import "./userList.css"
import {userRows} from '../../dataTest'
import {Link} from 'react-router-dom'
import { DeleteOutlineOutlined } from "@material-ui/icons"


export default function UserList() {

const [data, setData] = useState([]);

useEffect(() => {
    const getUsuarios = () =>{
        fetch('http://localhost:3800/api/getUsuarios')
        .then(res => res.json())
        .then(res => {
            if(res) {
                res.Usuarios.forEach(usuario => {
                    usuario.fecha_nacimiento = usuario.fecha_nacimiento.split(":")[0].split("T")[0]
                });
                
                setData(res.Usuarios)
            }
        })
    }
    getUsuarios()
}, [])

const handleDelete = (id) =>{
    setData(data.filter((item) => item.id !== id ))

    const requesInit ={
        method : 'PUT',
        headers : {
            'Content-Type':'application/json',
        },
    }

    fetch('http://localhost:3800/api/deleteUsuario/'+id,requesInit)
    .then(res => res.json())
    .then(res => {if(res){
        console.log(res.Usuario);
        alert('El usuario fue eliminado!');
    }})
}

const columns = [
    //{ field: '_id', headerName: 'ID', width: 250 },
    { field: 'nombre', headerName: 'Nombre', width: 130 },
    { field: 'fecha_nacimiento',headerName: 'Fecha de nacimiento',width: 150,},
    { field: 'contacto', headerName: 'Contacto', width: 150 },
    { field: 'username', headerName: 'Nombre de usuario', width: 150 },
    { field: 'actions', headerName: 'Acciones', width: 150,
        renderCell: (params) =>{
            return(
                <>  
                    <Link to={"/user/"+params.row._id} state={{ userSend : params.row }}>
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
