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
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  spacing: {
    marginTop: "1.0rem",
  },
  formControl: {
    minWidth: "30ch",
    height: "5ch",
  },
});
//defining various elements properties
class UpdateScheduleFlight extends Component {
  constructor(props) {
    super(props)
    this.state={
        id: this.props.match.params.id,
      schedule:{
        scheduleId:''
      },
      flights:[       
      ],
      scheduledFlight: {
        flight: {
          flightId: '',
          carrierName: "",
          flightModel: "",
          seatCapacity: ''
        },
        schedule:{
            airrivalTime: "",
            departureTime: "",
            destinationAirport: {
                airportid: '',
              airportLocation: ""
            },            
            sourceAirport: {
                airportid: '',
              airportLocation: ""          
            },
        },
        availableSeats:'',
        fares: ''
      }
    }
  }
  //This component Updates the flight details
  updateSchedule=()=>{
    let scheduleFlight={
        availableSeats:'',
        fares:'',
        schedule:{
          scheduleId:''
        },
       flight:{
          flightId:''
      },
      scheduleFlightId:''
  }
    scheduleFlight.availableSeats=this.availableSeatsref.value;
      scheduleFlight.fares=this.ticketCostref.value;
      scheduleFlight.flight.flightId=this.state.scheduledFlight.flight.flightId;
      scheduleFlight.schedule.scheduleId=this.state.scheduledFlight.schedule.scheduleId;
      scheduleFlight.scheduleFlightId=this.props.match.params.id
      alert(this.state.scheduledFlight.flight.flightId+" "+this.state.scheduledFlight.schedule.scheduleId)
      ScheduleService.updateScheduledFlight(scheduleFlight).then(
          (response)=>{
            console.log(response.data)
          }
      )
}
  flightupdate=()=>{
      console.log(this.state.scheduledFlight.flight.flightId)
      this.props.history.push(`/updateFlight/${this.state.scheduledFlight.flight.flightId}`)
  }

  componentDidMount(){   
    ScheduleService.getScheduleById(this.state.id).then((response) => {
        console.log(response.data)
        this.setState({scheduledFlight:response.data})
     
      this.sourceTyperef.value=this.state.scheduledFlight.schedule.sourceAirport.airportid
      this.destinationTyperef.value=this.state.scheduledFlight.schedule.destinationAirport.airportid
      this.arrivalTimeref.value=this.state.scheduledFlight.schedule.airrivalTime
      this.departureTimeref.value=this.state.scheduledFlight.schedule.departureTime
      this.ticketCostref.value=this.state.scheduledFlight.fares
      this.availableSeatsref.value=this.state.scheduledFlight.availableSeats
      console.log(this.state.scheduledFlight.flight.flightId)
    });   
  }
  render() {
    const { classes } = this.props;
    return (
      <Container maxWidth="sm">
        <Paper className={classes.paper} elevation={4}>
          <Box>
            <center>
              <h1>Update A Schedule</h1>
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
                    <Select inputRef={value => (this.sourceTyperef = value)} value={this.state.scheduledFlight.schedule.sourceAirport.airportid} label="Source Airport">
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
                    <Select inputRef={value => (this.destinationTyperef = value)} value={this.state.scheduledFlight.schedule.destinationAirport.airportid} label="Destination Airport">
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
                <Grid item xs={12} className={classes.spacing}>
                  <Button variant="outlined" color="secondary" >Update A Flight</Button>
                </Grid>
                <Grid item xs={12} className={classes.spacing}>
                  <Button
                    className={classes.primaryButton}
                    variant="contained"
                    color="primary"
                    onClick={this.updateSchedule}
                  >
                    Update
                  </Button>
                  <Button
                    className={classes.primaryButton}
                    variant="contained"
                    color="primary"
                  >
                    cancel
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Container>
    );
  }
}
UpdateScheduleFlight.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles, { withTheme: true })(UpdateScheduleFlight);
// 