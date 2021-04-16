import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

import { withStyles } from '@material-ui/core/styles';
import NavBar1 from "../components/Navbar/NavBar1";
import {Box, Container, Paper } from "@material-ui/core";

import PropTypes from 'prop-types';


const useStyles = ({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
    mainButton:{
      width : '300px',
      margin : "1rem ",
      height: "48px"
    }
  });
class AdminMain extends Component {
    constructor(props) {
        super(props)
        this.state={
          id:this.props.match.params.id
        }
    }
    
    delete=(event)=>{
        event.preventDefault();
        this.props.history.push(`/deleteBooking/${this.state.id}`)
    }
    view=(event)=>{
      event.preventDefault();
      this.props.history.push(`/myOrder/${this.state.id}`)
    }
    
    booking=(event)=>{
      event.preventDefault();
      this.props.history.push(`/addBooking/${this.state.id}`)
  }
    render() {
        const {classes} = this.props;
        return (
            <div>
              
                 <Container maxWidth="md"><br></br>
                   <Paper elevation={3}>
                   <NavBar1></NavBar1>
                   <Box p={2}>
                       <center>
                       <div>
                       
                           <h1>Welcome Customer</h1><br></br>
                           <Button variant="contained" color="primary" className={classes.mainButton} onClick={this.booking} >Booking</Button>
                           <Button variant="contained" color="primary" className={classes.mainButton} onClick={this.view} >View My Booking</Button>


                          
                       </div>
                       <div><Button variant="contained" color="primary" className={classes.mainButton} onClick={this.delete} >Cancel Booking</Button></div>
                       </center>
                   </Box>
                   </Paper>
                   </Container>
            </div>
        );
    }
}
AdminMain.propTypes={
    classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles,{ withTheme: true })(AdminMain);