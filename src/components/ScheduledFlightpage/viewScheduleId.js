import {
  Box,
    Button,
  Container,
  Grid,
  Paper,
  Typography,
  withStyles,
} from "@material-ui/core";
import React, { Component } from "react";
import PropTypes from "prop-types";
import ScheduleService from "../../services/ScheduleService";
import { Schedule } from "@material-ui/icons";
const useStyles = (theme) => ({
  root: {
    paddingLeft: theme.spacing(5),
  },
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
class ViewScheduleId extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,
      scheduledFlight: {
        flight: {
          carrierName: "",
          flightModel: "",
          seatCapacity: ''
        },
        schedule:{
            airrivalTime: "",
            departureTime: "",
            destinationAirport: {
              airportLocation: ""
            },            
            sourceAirport: {
              airportLocation: ""          
            },
        },
        availableSeats:'',
        fares: ''
      },
    }
  }
  componentDidMount() {
      
    ScheduleService.getScheduleById(this.state.id).then((response) => {
        console.log(response.data)
      this.setState({ scheduledFlight: response.data });
    });
   
  }
  handle=()=>{
    this.props.history.push('/adminmain')
}
  render() {
    const { classes } = this.props;
    return (
      <div>
        <Container className={classes.bottom} maxWidth="sm">
          <Paper elevation={4}>
            <Typography variant="h4" color="primary" className={classes.center}>
              Scheduled Flight
            </Typography>
            <Grid className ={classes.spacing} container spacing={3}>
              <Grid item className={classes.root} xs={6}>
                <Box>
                  <Typography
                    color="error"
                    display="block"
                    className={classes.root}
                  >
                    Source : {this.state.scheduledFlight.schedule.sourceAirport.airportLocation}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Typography
                    color="error"
                    display="block"
                    
                  >
                    Destination : {this.state.scheduledFlight.schedule.destinationAirport.airportLocation}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item className={classes.root} xs={6}>
                <Box>
                  <Typography
                    color="error"
                    display="block"
                    className={classes.root}
                  >
                    Fare : {this.state.scheduledFlight.fares}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Typography
                    color="error"
                    display="block"
                    
                  >
                    Available Seats : {this.state.scheduledFlight.availableSeats}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item className={classes.root} xs={6}>
                <Box>
                  <Typography
                    color="error"
                    display="block"
                    className={classes.root}
                  >
                    Flight-Model : {this.state.scheduledFlight.flight.flightModel}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Typography
                    color="error"
                    display="block"
                    
                  >
                    Carrier Name : {this.state.scheduledFlight.flight.carrierName}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item className={classes.root} xs={6}>
                <Box>
                  <Typography
                    color="error"
                    display="block"
                    className={classes.root}
                  >
                    Arrival Time : {this.state.scheduledFlight.schedule.airrivalTime}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Box>
                  <Typography
                    color="error"
                    display="block"
                    
                  >
                    Departure Time : {this.state.scheduledFlight.schedule.departureTime}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item className={classes.button} xs={12}>
                    <Button variant="contained" color="secondary" onClick={this.handle}>Done</Button>
                </Grid>
            </Grid>
          </Paper>
        </Container>
      </div>
    );
  }
}
ViewScheduleId.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles, { withTheme: true })(ViewScheduleId);
