
import { Grid, withStyles } from "@material-ui/core";
import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Box, Container, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import ScheduleService from '../../services/ScheduleService'
import FlightService from '../../services/FlightService'
import Navbar from '../Navbar/Navbar'

const useStyles = (theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: "30ch",
  },
  primaryButton: {
    margin: "0 0.5rem",
    right: 0,
    marginBottom: "2.5rem",
    width: "6rem",
  },
  form: {
    textAlign: "center",
    marginTop: theme.spacing(1),
    width: "100%",
  },
  spac:{
    marginTop:'2rem'
  },
  paper: {
    
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  spacing: {
    marginTop: "1.5rem",
  },
  formControl: {
    minWidth: "30ch",
    height: "5ch",
  },
  span1:{
  
    marginBottom:'0.6rem',
   
  },
  span2:{
    
    marginBottom:'0.1rem',
    marginLeft:theme.spacing(25)
    
  },
  span3:{
    
    marginBottom:'0.1rem',
    marginLeft:theme.spacing(20)
    
  },span4:{
    
    marginBottom:'0.1rem',
    marginLeft:theme.spacing(25)
    
  }
});

class ScheduleFlight extends Component {
  constructor(props) {
    super(props)
    this.state={
      schedule:{
        scheduleId:'',
      },
      arrivalTimeError:'',
       departureTimeError:'',
       flightTypeError:'',
       sourceAirportError:'',
       destinationAirportError:'',
       tickectCostError:'',
       availableSeatsError:'',
      flights:[       
      ]
    }
  }
  validate = () =>{
    let arrivalTimeError='';
    let departureTimeError='';
    let sourceAirportError='';
    let destinationAirportError='';
    let flightTypeError='';
    let tickectCostError='';
    let availableSeatsError='';
   
    if (!this.sourceTyperef.value) {
      sourceAirportError="Please select Source Airport";
    }
    if(!this.destinationTyperef.value) {
      destinationAirportError = "Please select Destination Airport";
    }
   else if(this.sourceTyperef.value==this.destinationTyperef.value){
      sourceAirportError="Source Airport And Destination AirportSame";
      destinationAirportError="Source Airport And Destination AirportSame";
    }
    if(!this.flightTyperef.value){
      flightTypeError="Please select Flight Name with Type";
     }
     if(!this.arrivalTimeref.value) {
      arrivalTimeError = "Please select Arrival Time";
    }
     if(!this.departureTimeref.value) {
      departureTimeError = "Please select depature Time";
    }
     if(!this.ticketCostref.value){
      tickectCostError ="please Enter the ticket cost";
    }
     if(!this.availableSeatsref.value){
     availableSeatsError="Please enter the number of seats avaliable";
    }
    if(arrivalTimeError || departureTimeError || flightTypeError ||sourceAirportError || destinationAirportError || tickectCostError || availableSeatsError){
      this.setState({
          arrivalTimeError,departureTimeError,flightTypeError,sourceAirportError,destinationAirportError,tickectCostError,availableSeatsError
      })
      return false;
  }
  return true;



  }
  addSchedule=()=>{
    const isValid=this.validate();
    if (isValid) {
      if(this.sourceTyperef.value!=this.destinationTyperef.value ){
        
      let schedule={
        airrivalTime:'',
        departureTime:'',
        sourceAirport:{
          airportid:''
        },
        destinationAirport:{
          airportid:''
        }
      }
      schedule.airrivalTime=this.arrivalTimeref.value;
      schedule.departureTime=this.departureTimeref.value;
      schedule.sourceAirport.airportid=this.sourceTyperef.value;
      schedule.destinationAirport.airportid=this.destinationTyperef.value;
      ScheduleService.addScheduleFlight(schedule).then((response)=>{
        this.setState({schedule:response.data})
        let scheduleFlight={
          availableSeats:'',
          fares:'',
          schedule:{
            scheduleId:''
          },
         flight:{
            flightId:''
        } 
        
        }
        
        scheduleFlight.availableSeats=this.availableSeatsref.value;
        scheduleFlight.fares=this.ticketCostref.value;
        scheduleFlight.flight.flightId=this.flightTyperef.value;
        scheduleFlight.schedule.scheduleId=this.state.schedule.scheduleId;
        console.log(scheduleFlight)
        ScheduleService.addScheduledFlight(scheduleFlight).then((response)=>{
          
          this.props.history.push('/adminmain')
        })
        
     
    })
  }
}else{
  alert("Data is not matching Format")
}
    }
   
  
cancel=()=>{
  this.props.history.push(`/adminmain`)
}
    
    
    
  // }
  componentDidMount(){   
    FlightService.getFlights().then((response)=>{
      this.setState({flights:response.data})
      console.log(this.state.flights)
    })
  }
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="sm">
        <Paper className={classes.spac} elevation={4}><Navbar></Navbar>
        <Paper className={classes.paper} elevation={4}>
          <Box>
            <center>
              <h1>Add Flight Schedule</h1>
            </center>
            <form className={classes.form}>
              <Grid container spacing={1}>
                <Grid item className={classes.spacing} xs={12}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Source Airport
                    </InputLabel>
                    <Select inputRef={value => (this.sourceTyperef = value)} label="Source Airport">
                    <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                        <MenuItem value={1}>Pune</MenuItem>
                      <MenuItem value={21}>Mumbai</MenuItem>
                      <MenuItem value={31}>Goa</MenuItem>
                      <MenuItem value={41}>Delhi</MenuItem>
                      <MenuItem value={51}>Chennai</MenuItem>
                      <MenuItem value={61}>Kokata</MenuItem>
                      <MenuItem value={71}>Hyderabad</MenuItem>
                      <MenuItem value={81}>Banglore</MenuItem>
                    </Select>
                    <span className={classes.span1} style={{fontSize:"12.5px",color:"red"}}>{this.state.sourceAirportError}</span>
                  </FormControl>

                </Grid>
                <Grid item className={classes.spacing} xs={12}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Destination Airport
                    </InputLabel>
                    <Select inputRef={value => (this.destinationTyperef = value)} label="Destination Airport">
                    <MenuItem value="">
                        <em>None</em>
                      </MenuItem>
                        <MenuItem value={1}>Pune</MenuItem>
                      <MenuItem value={21}>Mumbai</MenuItem>
                      <MenuItem value={31}>Goa</MenuItem>
                      <MenuItem value={41}>Delhi</MenuItem>
                      <MenuItem value={51}>Chennai</MenuItem>
                      <MenuItem value={61}>Kokata</MenuItem>
                      <MenuItem value={71}>Hyderabad</MenuItem>
                      <MenuItem value={81}>Banglore</MenuItem>
                    </Select>
                    <span className={classes.span1} style={{fontSize:"12.5px",color:"red"}}>{this.state.destinationAirportError}</span>
                  </FormControl>
                </Grid>
                <Grid item className={classes.spacing} xs={12}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Flight Name with Type
                    </InputLabel>
                    <Select inputRef={value => (this.flightTyperef = value)} label="Flight Name with Type">
                      {
                        this.state.flights.map((fl)=>
                          <MenuItem value={fl.flightId}>{fl.carrierName} {fl.flightModel}</MenuItem>
                        )
                      }
                    </Select>
                    <span  className={classes.span1} style={{fontSize:"12.5px",color:"red"}}>{this.state.flightTypeError}</span>
                  </FormControl>
                </Grid>

                <Grid item xs={12} className={classes.spacing}>
                  <TextField
                    label="Arrival Time"
                    id="datetime-local"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={classes.textField}
                    InputLabelProps={{ shrink: true }}
                    inputRef={value => (this.arrivalTimeref = value)}
                  />
                   
                </Grid>
                <span className={classes.span2} style={{fontSize:"12.5px",color:"red"}}>{this.state.arrivalTimeError}</span>
                <Grid item xs={12} className={classes.spacing}>
                  <TextField
                    label="  Departure Time "
                    id="datetime-local"
                    type="datetime-local"
                    defaultValue="2017-05-24T10:30"
                    className={classes.textField}
                    InputLabelProps={{ shrink: true }}
                    inputRef={value => (this.departureTimeref = value)}
                  />
                   
                </Grid>
                <span className={classes.span2} style={{fontSize:"12.5px",color:"red"}}>{this.state.depatureTimeError}</span>
                <Grid item xs={12} className={classes.spacing}>
                  <TextField
                    label=" Ticket Cost"
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    className={classes.textField}
                    inputRef={value => (this.ticketCostref = value)}
                  ></TextField>
                   
                </Grid>
                <span className={classes.span4} style={{fontSize:"12.5px",color:"red"}}>{this.state.tickectCostError}</span>
                <Grid item xs={12} className={classes.spacing}>
                  <TextField
                    label=" Available Seats"
                    id="outlined-basic"
                    size="small"
                    variant="outlined"
                    className={classes.textField}
                    inputRef={value => (this.availableSeatsref = value)}
                  ></TextField>
                </Grid>
                <span className={classes.span3} style={{fontSize:"12.5px",color:"red"}}>{this.state.availableSeatsError}</span>

                <Grid item xs={12} className={classes.spacing}>
                  <Button
                    className={classes.primaryButton}
                    variant="contained"
                    color="primary"
                    onClick={this.addSchedule}
                  >
                    Add
                  </Button>
                  <Button
                    className={classes.primaryButton}
                    variant="contained"
                    onClick={this.cancel}
                    color="primary"
                  >
                    Cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper></Paper>
      </Container>
    );
  }
}
ScheduleFlight.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles, { withTheme: true })(ScheduleFlight);
