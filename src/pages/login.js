import React, { Component } from 'react'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import PropTypes from 'prop-types'
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import axios from 'axios';
import { MenuItem } from '@material-ui/core';
const useStyles = (theme) => ({
    formControl: {
        minWidth: '200px',
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

 class Login extends Component {
    constructor(props){
        super(props);
        this.state={
           
                userName:'',
                userType:'',
                password:'',
           
           userNameError:'',
           userTypeError:'',
           passwordError:'', 
        }
    }

    validate =()=>{
       
        let userNameError="";
        let passwordError="";
      
        if(this.userNameref.value==""){
            userNameError="Please enter the User Name";
        }
        
        if(this.passwordref.value==""){
            passwordError="Please enter password";
        }
        
       
        if(userNameError ||  passwordError ){
            this.setState({
                userNameError,passwordError
            })
            return false;
        }
        return true;

    }
    
    handler=(event)=>{
        event.preventDefault();
        console.log(event);
        this.props.history.push('/register')
    }

    signIn=(event)=>{
        
        event.preventDefault();
        const isValid=this.validate();
        let user={
            userName:'',
            password:'',
            userType:''
        }
        console.log(this.state.userNameError+"hi");
       let userName=this.userNameref.value;
        let password=this.passwordref.value;
        let userType=this.userTyperef.value;
        axios.get('http://localhost:8080/fms/user/validateUser',{params:{userName,password,userType}}).then((Response)=>{
            
            if(Response.data.userType=="admin"){
                this.props.history.push('/adminmain')
                
            }else{
                this.props.history.push(`/booking/${Response.data.userId}`)
                
            }
        }).catch(error=>{alert("Invalid Credintials")});
        

    }

    render() {
        const { classes } = this.props;
        
        return (
            <div>
               <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>

                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>


                <Typography component="h1" variant="h5">
                    Sign in
        </Typography>
                <form className={classes.form} noValidate>
                <Grid container spacing={1}>
                <Grid item xs={12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="userName"
                        label="User Name"
                        name="userName"
                        autoComplete="userName"
                        autoFocus
                        inputRef={value => (this.userNameref = value)}  pattern="[a-zA-Z0-9]+" minLength="6"
                    />
                    <span style={{fontSize:"2",color:"red"}}>{this.state.userNameError}</span>
                    </Grid>
                    <Grid item  xs={12}>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        inputRef={value => (this.passwordref = value)} minLength="6"
                    />
                     <span style={{fontSize:"2",color:"red"}}>{this.state.passwordError}</span>
                    </Grid>
                    <Grid item  xs={12}>
                    <FormControl variant="outlined" className={classes.formControl}>
                                    <InputLabel htmlFor="outlined-age-native-simple">UserType</InputLabel>
                                    <Select
                                        native
                                        required
                                        label="userType"
                                        inputRef={value => (this.userTyperef = value)}
                                    >
                                        
                                       <option value="customer">customer</option>
                                        <option value="admin">admin</option>
                                        
                                    </Select>
                       </FormControl>
                       </Grid>
                       </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit} onClick={this.signIn}>
                        Sign In
                     </Button>
                    <Grid container>
                        <Grid item align='center'>
                            <Link href="/register" onClick={this.handler} variant="body2">
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </form>

            </div>

        </Container>  
            </div>
        )
    }
}
Login.propTypes={
    classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles,{ withTheme: true })(Login);