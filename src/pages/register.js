import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import {  withStyles } from '@material-ui/core/Styles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios';




const useStyles = (theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
});

class register extends Component {
    constructor(props){
        super(props);
        this.state={
           
                userName:'',
                email:'',
                password:'',
                mobileNumber:'',
           
           userNameError:'',
           emailError:'',
           passwordError:'',
           mobileNumberError:''
        }
    }
    validate =()=>{
       
        let userNameError="";
        let emailError="";
        let passwordError="";
        let mobileNumberError="";
        if(this.userNameref.value===""){
            userNameError="Please Enter the User Name";
        }
        else if(this.userNameref.value.length<3){
            userNameError="User Name should be more than 3 characters";
        }
        if(this.emailref.value===""){
            emailError="please enter EmailId";
        }
        else if(!this.emailref.value.match( /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/)){
            emailError="please enter valid EmailId";
        }

        if(this.passwordref.value===""){
            passwordError="please set the password";
        }
        else if(this.passwordref.length<6){
            passwordError="password should be more than 6 characters";
        }
        
        if(this.mobileNumberref.value===""){
            mobileNumberError="please enter your mobile number";
        }
        else if(!this.mobileNumberref.value.match(/^\d{10}$/)) {
            mobileNumberError="please enter valid mobile number"; 
    }
        if(userNameError || emailError || passwordError || mobileNumberError){
            this.setState({
                userNameError,emailError,passwordError,mobileNumberError
            })
            return false;
        }
        return true;

    }

  addUser=(event) => {
    event.preventDefault();
    const isValid=this.validate();
    let user={
      userName:'',
      userType:'',
      email:'',
      password:'',
      mobileNumber:'' 
    }
    console.log(this.state.userNameError+"hi");
    
     user.userName=this.userNameref.value;
     user.password=this.passwordref.value;
     user.email=this.emailref.value;
     user.userType='customer';
     user.mobileNumber=this.mobileNumberref.value;
    alert(user.userName+user.userType+user.email+user.password+user.mobileNumber)
    axios.post('http://localhost:8080/fms/user/addUser',user).then
    ((response) => { 
      alert('user added successfully')
      this.props.history.push('/');
    });
   
  }
handler=()=>{
    this.props.history.push('/');
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
                            Sign up
                         </Typography>
                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} >
                                    <TextField
                                        autoComplete="userName"
                                        name="userName"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="userName"
                                        label="UserName"
                                        autoFocus
                                        inputRef={value => (this.userNameref = value)} 
                                    />
                                     <span style={{fontSize:"2",color:"red"}}>{this.state.userNameError}</span>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        inputRef={value => (this.passwordref = value)}  minLength="6"
                                        
                                    />
                                     <span style={{fontSize:"2",color:"red"}}>{this.state.passwordError}</span>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        inputRef={value => (this.emailref = value)}
                                    />
                                     <span style={{fontSize:"2",color:"red"}}>{this.state.emailError}</span>
                                </Grid>
                               
                                <Grid item xs={12} >
                                    <TextField
                                        autoComplete="mobileNumber"
                                        name="mobileNumber"
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="mobileNumber"
                                        label="mobileNumber"
                                        inputRef={value => (this.mobileNumberref = value)}
                                        
                                    />
                                    <span style={{fontSize:"2",color:"red"}}>{this.state.mobileNumberError}</span>
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                onClick = {this.addUser}
                                className={classes.submit}>
                                Sign Up
                            </Button>
                            <Grid container >
                                <Grid item >
                                    <Link href="/" onclick={this.handler} variant="body2">
                                        Already have an account? Sign in
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
register.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(useStyles, { withTheme: true })(register);