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
import BookingService from "../../services/BookingService";
import booking from "../../pages/booking";
import Navbar from "../Navbar/Navbar";
  const useStyles = (theme) => ({
    root: {
      paddingLeft: theme.spacing(4),
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
  class ViewBooking extends Component {
    constructor(props) {
      super(props);
      this.state = {
        id: this.props.match.params.id,
       booking: {
            bookingId: '',
            userId: {
              userId: '',
              userType: '',
              userName: '',
              password: '',
              email: '',
              mobileNumber: ''
            },
            bookingDate: [
              
            ],
            ticketCost: '',
            noOfPassangers: '',
            passengerList: [
              
            ],
            scheduledFlight: {
                availableSeats: '',
                fares: '',
                flight: {
                  carrierName: "",
                  flightId: '',
                  flightModel: "",
                  seatCapacity: ''
                },
                schedule: {
                  airrivalTime: "",
                  departureTime: "",
                  destinationAirport: {
                    airportLocation: "",
                    airportName: "",
                    airportid: ''
                  },
                  scheduleId: '',
                  sourceAirport: {
                    airportLocation: "",
                    airportName: '',
                    airportid: ''
                  }
                },
                scheduleFlightId: ''
            }
          }
      }
    }
    componentDidMount() {
      BookingService.viewBooking(this.state.id).then((response)=>
      {
          this.setState({booking:response.data})
        console.log(response.data)
      })  

    }
    handle=()=>{
      this.props.history.push(`/myOrder/${this.state.booking.userId.userId}`)
  }
    render() {
      const { classes } = this.props;
      return (
        <div>
          <Container className={classes.bottom} maxWidth="sm">
            <Paper elevation={4}>
              <Navbar></Navbar>
              <Typography variant="h4" color="primary" className={classes.center}>
                <b>My Booking</b>
              </Typography>
              <Grid className ={classes.spacing} container spacing={3}>
                <Grid item className={classes.root} xs={6}>
                  <Box>
                    <Typography
                      color="error"
                      display="block"
                      className={classes.root}
                    >
                      Source : {this.state.booking.scheduledFlight.schedule.sourceAirport.airportLocation}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <Typography
                      color="error"
                      display="block"
                      
                    >
                      Destination : {this.state.booking.scheduledFlight.schedule.destinationAirport.airportLocation}
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
                      Ticket Cost : {this.state.booking.ticketCost}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <Typography
                      color="error"
                      display="block"
                      
                    >
                      No Of Passenger : {this.state.booking.noOfPassangers}
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
                      Flight-Model : {this.state.booking.scheduledFlight.flight.flightModel}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <Typography
                      color="error"
                      display="block"
                      
                    >
                      Carrier Name : {this.state.booking.scheduledFlight.flight.carrierName}
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
                      Arrival Time : {this.state.booking.scheduledFlight.schedule.airrivalTime[0]}/{this.state.booking.scheduledFlight.schedule.airrivalTime[1]}/{this.state.booking.scheduledFlight.schedule.airrivalTime[2]} {this.state.booking.scheduledFlight.schedule.airrivalTime[3]}:{this.state.booking.scheduledFlight.schedule.airrivalTime[4]}
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={6}>
                  <Box>
                    <Typography
                      color="error"
                      display="block"
                      
                    >
                      Departure Time : {this.state.booking.scheduledFlight.schedule.departureTime[0]}/{this.state.booking.scheduledFlight.schedule.departureTime[1]}/{this.state.booking.scheduledFlight.schedule.departureTime[2]} {this.state.booking.scheduledFlight.schedule.departureTime[3]}:{this.state.booking.scheduledFlight.schedule.departureTime[4]}
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
  ViewBooking.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  export default withStyles(useStyles, { withTheme: true })(ViewBooking);
  