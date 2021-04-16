import React, { Component } from 'react';
import FlightService from '../services/FlightService';
import PropTypes from 'prop-types';
import { Box,Button,Container,Grid,Paper,Typography,withStyles,makeStyles} from "@material-ui/core";

//defining various elements properties
const useStyles = (theme) => ({
    
    center: {
        paddingTop:theme.spacing(1),
      textAlign: "center",
    },
    spacing:{
        marginTop:theme.spacing(3)
    },
    bottom:{
      marginTop:theme.spacing(4)
  },
  button:{
      marginTop:'20px',
      marginBottom:'30px',
      textAlign: "center"
  }
  });
  
 //This method is used to display the flight details of the flight id
  class ViewFlightComponent extends Component {
    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            flight: {}
              
        }
    }
    //componentDidMount is called immediately after the component is mounted and it will return promise
    //so,we will make axios call inside the componentDidMoount.
    componentDidMount(){
        
        FlightService.getFlightById(this.state.id).then(res =>{
            this.setState({flight: res.data});
        }).catch(error=>{
            console.log(error.message);
          })
    }
//This method will redirect the list of flights page
    done(){

        this.props.history.push('/viewAllFlights');
    }


    //The JS code will be rendered and returned inside the render method
     render() {
        const {classes} = this.props;
        return (
           
    <div>
        <Container className={classes.bottom} maxWidth="sm" >
            <Paper elevation={4}> 
                <Typography variant="h4" color="primary" className={classes.center}>
                    View Flight Details
                </Typography>
                 
              
                <Grid className ={classes.spacing} container spacing={3}>
                  <Grid item className={classes.center} xs={12}>
                    <Box>
                    <Typography color="error" >
                    Carrier Name : {this.state.flight.carrierName}</Typography>
                    </Box>
                   </Grid>
                   
                   <Grid item className={classes.center} xs={12}>
                    <Box>
                    <Typography color="error" >
                    Flight Model : {this.state.flight.flightModel}
                    </Typography>
                    </Box>
                    </Grid>
                    
                   <Grid item className={classes.center} xs={12} >
                    <Box>
                    <Typography color="error"  >
                    Seat Capacity : {this.state.flight.seatCapacity}
                    </Typography>
                    </Box>
                    </Grid>
                   </Grid>
               
                <Grid container spacing={3}>
                <Grid item className={classes.button} xs={12}>
                    <Button variant="contained" color="secondary" onClick={this.done.bind(this)}>Done</Button>
                </Grid>
            </Grid>
         
             </Paper>
             </Container>
            </div>
        
        );
    }
}
ViewFlightComponent.propTypes={classes:PropTypes.object.isRequired,};

export default withStyles(useStyles)(ViewFlightComponent);