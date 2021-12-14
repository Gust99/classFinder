import React, {useState} from "react";
import { Button, Dialog, DialogContent, DialogTitle, Divider, Grid, Slide, TextField, Typography} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ModalClases(materiaParticular) {  
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //Clases
    const [limite, setLimite] = useState(0);
    const [costo_hora, setCostoHora] = useState(0);
    const [direccion, setDireccion] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const id_usuario = "61a2256e6791151df4f0a508";
    const [aux, setAux] = React.useState(materiaParticular);
    const aux2 = Object.values(aux);

    //console.log(aux2);

    const handleLimite = (e) =>{
        setLimite(e.target.value);
    }
    const handleCostoHora = (e) =>{
        setCostoHora(e.target.value);
    }
    const handleDireccion = (e) =>{
        setDireccion(e.target.value);
    }
    const handleDescripcion = (e) =>{
        setDescripcion(e.target.value);
    }

    const handleSubmit =()=>{
        if(direccion !== '' && descripcion !== ''){
            const requestInit ={
                method : 'POST',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    limite: limite,
                    costo_hora: costo_hora,
                    direccion: direccion,
                    descripcion: descripcion,
                    id_usuario: id_usuario,
                    id_materia_particular: aux2,
                })
            }
            fetch('http://localhost:3800/api/addClase',requestInit)
            .then(res => res.json())
            .then(res => {
                if(res){console.log(res.tiempo);}
            })
    
        }
        else{ alert('Introduzca todos los campos');
        }
    }

    return (
        <div>
          <Grid align="right"  style={{ margincenter: 75 }}>
            <Button variant="contained" color="primary" size="small"
              onClick={() => {
                handleClickOpen();
              }}
            >
              Crear Clases
            </Button>
          </Grid>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
            fullWidth="true"
            maxWidth="xs"
          >
            <DialogTitle align="center">
              <Typography>
                  Nueva Clase
              </Typography>
            </DialogTitle>
            <Divider></Divider>

            <DialogContent>
              <form onSubmit={handleSubmit}>

                <Grid container  sx={{p: 1,m: 1,}}>     
                        <TextField
                        label="Limite"
                        variant="outlined"
                        required
                        type="number"
                        InputProps={{
                            inputProps: { min: 0, max: 10 } ,
                            startAdornment: <InputAdornment position="start">Estudiantes</InputAdornment>,
                          }}
                        value={limite}
                        onChange={(e) => {
                            handleLimite(e);
                        }}
                        />
                </Grid>

                <Grid container  sx={{p: 1,m: 1,}} >     
                        <TextField
                        label="Costo Hora"
                        variant="outlined"
                        type="number"
                        InputProps={{
                            inputProps: { min: 0, max: 100 } ,
                            startAdornment: <InputAdornment position="start">Bs.</InputAdornment>,
                          }}
                        value={costo_hora}
                        onChange={(e) => {
                            handleCostoHora(e);
                        }}
                        />
                </Grid>

                <Grid container  sx={{p: 1,m: 1,}} >     
                        <TextField
                        label="Dirección"
                        variant="outlined"
                        type="text"
                        value={direccion}
                        onChange={(e) => {
                            handleDireccion(e);
                        }}
                        />
                </Grid>

                <Grid container  sx={{p: 1,m: 1,}} >     
                        <TextField
                        label="Descripcion"
                        variant="outlined"
                        type="text"
                        value={descripcion}
                        onChange={(e) => {
                            handleDescripcion(e);
                        }}
                        />
                </Grid>

                <button className='newUserButton'>Crear</button>

              </form>
            </DialogContent>
    
          </Dialog>
        </div>
      );

}