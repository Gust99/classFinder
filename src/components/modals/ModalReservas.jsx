import React, {useState, useEffect } from "react";
import { Button, Dialog, DialogContent, DialogTitle, Divider, Grid, Slide, TextField, Typography} from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
export default function ModalReservas(clase) {  

  const [idEstudiante, setIdEstudiante] = useState([]);
  const [usuario, setUsuario] = useState([]);

  const [data2, setData2] = useState([]);
    useEffect(() => {
      try {
        setUsuario(JSON.parse(localStorage.getItem('usuario')));
      } catch(err){}

        const getClases = () =>{
            fetch('http://localhost:3800/api/getClase2/'+aux2)
            .then(res => res.json())
            .then(res => {
                if(res) {
                    setData2(res.Clase.costo_hora);

                    console.log(data2)
                }
            })
        }
        getClases()

        console.log(localStorage.getItem('usuario'));

        // setIdEstudiante(localStorage.getItem('usuario'));

    }, [])
    
    //MODAL
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    //Reserva
    const [tiempo, setTiempo] = React.useState(0);
    const [costo, setCosto] = React.useState(0);
    const [aux, setAux] = React.useState(clase);
    const aux2 = Object.values(aux)[0];

    const handleInputChange = (e) => {
        setTiempo(e.target.value)
        setCosto(data2* e.target.value)
    };


    const handleSubmit =(e)=>{
      e.preventDefault();
        if(tiempo != '' && costo != ''){
            const requestInit ={
                method : 'POST',
                headers : {
                    'Content-Type':'application/json',
                },
                body : JSON.stringify({
                    tiempo: tiempo,
                    costo_total: costo,
                    id_clase: aux2,
                    id_usuario: usuario.sudId
                })
            }
            fetch('http://localhost:3800/api/addReserva',requestInit)
            .then(res => res.json())
            .then(res => {
                if(res){
                  console.log(res.tiempo);
                  window.location.replace('/');
                }
            })
    
        }
        else{ alert('Introduzca todos los campos');
        }
    }

    return (
        <div>
          <Grid align="right"  style={{ marginCenter: 75 }}>
            <Button variant="contained" color="primary" size="small"
              onClick={() => {
                handleClickOpen();
              }}
            >
              Reservar
            </Button>
          </Grid>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"

            maxWidth="xs"
          >
            <DialogTitle align="center">
              <Typography>
                  Nueva Reserva
              </Typography>
            </DialogTitle>
            <Divider></Divider>
            <DialogContent>
              <form onSubmit={handleSubmit}>
                <Grid container  sx={{p: 1,m: 1,}}>     
                        <TextField
                        label="Tiempo"
                        variant="outlined"
                        required
                        type="number"
                        InputProps={{
                            inputProps: { min: 0, max: 10 } ,
                            startAdornment: <InputAdornment position="start">Hrs.</InputAdornment>,
                          }}
                        value={tiempo}
                        onChange={(e) => {
                            handleInputChange(e);
                        }}
                        />
                </Grid>
                <Grid container  sx={{p: 1,m: 1,}} >     
                        <TextField
                        label="Costo Total"
                        variant="outlined"
                        type="number"
                        disabled
                        InputProps={{
                            inputProps: { min: 0, max: 10000 } ,
                            startAdornment: <InputAdornment position="start">Bs.</InputAdornment>,
                          }}
                        value={costo}

                        />
                </Grid>

                <button className='newUserButton'>Crear</button>

              </form>
            </DialogContent>
    
          </Dialog>
        </div>
      );

}
