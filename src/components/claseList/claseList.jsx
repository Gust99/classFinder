import React ,{ useState, useEffect } from 'react'
import { DataGrid } from '@material-ui/data-grid'
import Divider from '@mui/material/Divider'
import './claseList.css'
import ModalReservas from "../modals/ModalReservas";
export default function ClaseList() {

    //GET CLASES
    const [data, setData] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [contenido, setContenido] = useState([]);

    useEffect(() => {
        try {
            setUsuario(JSON.parse(localStorage.getItem('usuario')));
        } catch(err){}

        const getClases = async () =>{
            await fetch('http://localhost:3800/api/getClases')
            .then(res => res.json())
            .then(res => {
                if(res) {
                    console.log(res.Clases)
                    var clases1 = res.Clases;
                    clases1.forEach(Clase => {
                        Clase.id_materia_particular1 = Clase.id_materia_particular._id;
                        Clase.nombre_materia1 = Clase.id_materia_particular.nombre_materia;
                    });
                    setData(clases1);
                    console.log(data);
                }
            })
        }
        getClases()
    }, [])
 
    //COLUMNAS TABLA
    const columns = [
      { field: "nombre_materia1", headerName: 'Materia', width: 250 },
      { field: 'direccion', headerName: 'Direccion', width: 150 },
      { field: 'limite', headerName: 'Limite', width: 150 },
      { field: 'costo_hora', headerName: 'Costo x Hora', width: 150,},
      { field: 'Acciones', headerName: 'Asignar', width: 150, headerStyle: {textjustify: 'center'},
      renderCell: (params) =>{
          return(
              (usuario.tipo === 'Profesor') ?<>Ninguna</> : <><ModalReservas clase={params.row._id}/></>
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
