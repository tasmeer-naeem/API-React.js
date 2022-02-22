import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import { addUser } from '../Redux/Actions';
//import {useHistory} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
      marginTop:50,
    '& > *': {
      margin: theme.spacing(2),
      width: '50ch',
    },
  },
}));


const AddUser = () => {
    const [state, setstate] = useState({name:"",email:"",contact:"",address:"" })
    const [error, seterror] = useState()
    const classes = useStyles();
    const dispatch = useDispatch()
    //const history = useHistory()
    const navigate=useNavigate()
    
    

    const {name,email,contact,address } = state

const handleInput=(e)=>{
        const {name,value}=e.target;
        setstate({...state,[name]:value})
        console.log()
}

const submitform=(e)=>{
    e.preventDefault()
    if(!name || !email || !contact || !address ){
        seterror("Please fill input fields")
    }else{
        dispatch(addUser(state))
        navigate("/")
        seterror("")
    }
}
           
    return (
        <div>
        <h1>ADD USER DATA</h1>
        {error && <h3 style={{color:"red" }}>{error}</h3>}
        <form className={classes.root} noValidate autoComplete="off" style={{alignItems:"center"  }} onSubmit={submitform} > 
        <TextField id="outlined-basic" label="name" variant="outlined" name="name" value={name} type="text"  onChange={handleInput} /><br/>
        <TextField id="outlined-basic" label="email" variant="outlined" name="email" value={email} type="text" onChange={handleInput}/><br/>
        <TextField id="outlined-basic" label="address" variant="outlined" name="address" value={address} type="text" onChange={handleInput}/><br/>
        <TextField id="outlined-basic" label="contact" variant="outlined" name="contact" value={contact} type="text" onChange={handleInput}/><br/>
        <div  style={{ display:"flex" , marginLeft:"35%" }}   >
       <Button variant="contained" color="primary"   type="submit" style={{width:"15rem"}} >SUBMIT</Button>
        <Button  color="inherit"   style={{width:"12rem",marginLeft:"9px"}} onClick={()=>navigate("/")}  >GO BACK</Button>
        </div>
        </form>
        </div>
    )
}

export default AddUser
