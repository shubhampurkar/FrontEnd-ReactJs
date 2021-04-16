import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import FlightService from '../services/FlightService';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import {Box, Container, Paper } from "@material-ui/core";
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import Navbar from '../components/Navbar/Navbar';

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
        
    }
    searchSchedule=(event)=>{
        event.preventDefault();
        this.props.history.push('/searchScheduled')
    }
    handler=(event)=>{
        event.preventDefault();
        this.props.history.push('/flight')
    }

    viewSchedule=(event)=>{
        event.preventDefault();
        this.props.history.push('/viewSchedule')
    }
    handlerAdd=(event)=>{
        event.preventDefault();
        this.props.history.push('/AddFlight')
    }
    addSchedule=(event)=>{
      event.preventDefault();
      this.props.history.push('/Scheduleflight')
  }
    render() {
        const {classes} = this.props;
        return (
            <div>
                 <Container maxWidth="md"><br></br>
                   <Paper elevation={3}>
                     <Navbar></Navbar>
                   <Box p={2}>
                       <center>
                       <div>
                       
                           <h1>Welcome Admin</h1><br></br>
                           <Button variant="contained" color="primary" className={classes.mainButton}  onClick={this.handlerAdd} >Add A Flight</Button>
                           <Button variant="contained" color="primary" className={classes.mainButton}   onClick={this.addSchedule}>Schedule  A Flight</Button>
                           <Button variant="contained" color="primary" className={classes.mainButton}  onClick={this.handler} style={{marginLeft:"5x"}}>View Flights Avaliable</Button>

                           <Button variant="contained" color="primary" className={classes.mainButton}  onClick={this.searchSchedule}>Search Scheduled Flight</Button>
                           <Button variant="contained" color="primary" className={classes.mainButton}  onClick={this.viewSchedule}  >View Scheduled Flight</Button>
                          
                       </div>
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