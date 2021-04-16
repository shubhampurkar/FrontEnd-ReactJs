import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import passengerService from "../../services/passengerService";
import BookingService from "../../services/BookingService";
import ScheduleService from "../../services/ScheduleService";
import NavBar1 from "../Navbar/NavBar1";

const useStyles = (theme) => ({
  forms: {
    textAlign: "center",
    marginTop: theme.spacing(2),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  marLeft: {
    marginLeft: "2.0rem",
    paddingBottom: "1.0rem",
  },
  marcenter: {
    marginLeft: "0.5rem",
    paddingBottom: "1.0rem",
  },
  texSmall: {
    width: "180px",
    marginLeft: "0.5rem",
    paddingBottom: "1.0rem",
  },
  heading: {
    paddingTop: "1.5rem",
    paddingBottom: "1.5rem",
  },
  bottombut: {
    paddingTop: "2.5rem",
    MarginBottom: "4.5rem",
    paddingLeft:'1.5rem'
  },
  pad:{
      marginRight:'1.5rem'
  }
});
class AddPassenger extends Component {
  constructor(props) {
    var today = new Date(),

    date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    super(props);
    this.state = {
        id:this.props.match.params.id,
        fare:'',
        uid:this.props.match.params.bid,
        currentDate: date
    };
  }
componentDidMount(){
  ScheduleService.getScheduleById(this.state.id).then((response)=>{
    
    this.setState({fare:response.data.fares})
    alert(this.state.fare)
  })
}
  addBooking=()=>{
    if(this.noofpref.value==1){
    let Booking={
        bookingDate: "",
        noOfPassangers:"",
        passengerList: [
          {
            age: "",
            luggage: "",
            passengerName: "",
            passengerUIN: "",
           
          }
        ],
        scheduledFlight: {
          scheduleFlightId: ""
        },
        ticketCost: "",
        userId: {

          userId: "",

        }
      }
      
      Booking.bookingDate="2014-05-05"
      Booking.ticketCost=this.noofpref.value*this.state.fare;
      
      Booking.noOfPassangers=this.noofpref.value;
      Booking.passengerList[0].age=this.ageref.value;
      Booking.passengerList[0].luggage=this.lungaggeref.value;
      Booking.passengerList[0].passengerName=this.passengerNamepref.value;
      Booking.passengerList[0].passengerUIN=this.UinREf.value;
      Booking.scheduledFlight.scheduleFlightId=this.state.id;
      Booking.userId.userId=this.state.uid;
      console.log(Booking)
      BookingService.addBooking(Booking).then((response)=>
      {
          console.log(response.data)
          this.props.history.push(`/booking/${this.state.uid}`)
      })
    }
    else if(this.noofpref.value==2){
      let Booking={
        bookingDate: "",
        noOfPassangers:"",
        passengerList: [
          {
            age: "",
            luggage: "",
            passengerName: "",
            passengerUIN: "",
           
          },{
            age: "",
            luggage: "",
            passengerName: "",
            passengerUIN: "",
           
          }
        ],
        scheduledFlight: {
          scheduleFlightId: ""
        },
        ticketCost: "",
        userId: {

          userId: "",

        }
      }
      
      Booking.bookingDate="2014-05-05"
      Booking.ticketCost=this.noofpref.value*this.state.fare;
      
      Booking.noOfPassangers=this.noofpref.value;
      Booking.passengerList[0].age=this.ageref.value;
      Booking.passengerList[0].luggage=this.lungaggeref.value;
      Booking.passengerList[0].passengerName=this.passengerNamepref.value;
      Booking.passengerList[0].passengerUIN=this.UinREf.value;
      Booking.passengerList[1].age=this.age2ref.value;
      Booking.passengerList[1].luggage=this.lungagge2ref.value;
      Booking.passengerList[1].passengerName=this.passengerNamep1ref.value;
      Booking.passengerList[1].passengerUIN=this.Uin2REf.value;
      Booking.scheduledFlight.scheduleFlightId=this.state.id;
      Booking.userId.userId=this.state.uid;
      console.log(Booking)
      BookingService.addBooking(Booking).then((response)=>
      {
          console.log(response.data)
          this.props.history.push(`/booking/${this.state.uid}`)
      })
    }else if(this.noofpref.value==3){
      let Booking={
        bookingDate: "",
        noOfPassangers:"",
        passengerList: [
          {
            age: "",
            luggage: "",
            passengerName: "",
            passengerUIN: "",
           
          },{
            age: "",
            luggage: "",
            passengerName: "",
            passengerUIN: "",
           
          },
          {
            age: "",
            luggage: "",
            passengerName: "",
            passengerUIN: "",
           
          }
        ],
        scheduledFlight: {
          scheduleFlightId: ""
        },
        ticketCost: "",
        userId: {

          userId: "",

        }
      }
      
      Booking.bookingDate="2014-05-05"
      Booking.ticketCost=this.noofpref.value*this.state.fare;
      
      Booking.noOfPassangers=this.noofpref.value;
      Booking.passengerList[0].age=this.ageref.value;
      Booking.passengerList[0].luggage=this.lungaggeref.value;
      Booking.passengerList[0].passengerName=this.passengerNamepref.value;
      Booking.passengerList[0].passengerUIN=this.UinREf.value;
      Booking.passengerList[1].age=this.age2ref.value;
      Booking.passengerList[1].luggage=this.lungagge1ref.value;
      Booking.passengerList[1].passengerName=this.passengerNamep1ref.value;
      Booking.passengerList[1].passengerUIN=this.Uin1REf.value;
      Booking.passengerList[2].age=this.age2ref.value;
      Booking.passengerList[2].luggage=this.lungagge2ref.value;
      Booking.passengerList[2].passengerName=this.passengerNamep2ref.value;
      Booking.passengerList[2].passengerUIN=this.Uin2REf.value;
      Booking.scheduledFlight.scheduleFlightId=this.state.id;
      Booking.userId.userId=this.state.uid;
      console.log(Booking)
      BookingService.addBooking(Booking).then((response)=>
      {
          console.log(response.data)
          this.props.history.push(`/booking/${this.state.uid}`)
      })
    }
    else if(this.noofpref.value=4){
      let Booking={
        bookingDate: "",
        noOfPassangers:"",
        passengerList: [
          {
            age: "",
            luggage: "",
            passengerName: "",
            passengerUIN: "",
           
          },{
            age: "",
            luggage: "",
            passengerName: "",
            passengerUIN: "",
           
          },
          {
            age: "",
            luggage: "",
            passengerName: "",
            passengerUIN: "",
           
          },
          {
            age: "",
            luggage: "",
            passengerName: "",
            passengerUIN: "",
           
          }
        ],
        scheduledFlight: {
          scheduleFlightId: ""
        },
        ticketCost: "",
        userId: {

          userId: "",

        }
      }
      
      Booking.bookingDate="2014-05-05"
      Booking.ticketCost=this.noofpref.value*this.state.fare;
     
      Booking.noOfPassangers=this.noofpref.value;
      Booking.passengerList[0].age=this.ageref.value;
      Booking.passengerList[0].luggage=this.lungaggeref.value;
      Booking.passengerList[0].passengerName=this.passengerNamepref.value;
      Booking.passengerList[0].passengerUIN=this.UinREf.value;
      Booking.passengerList[1].age=this.age1ref.value;
      Booking.passengerList[1].luggage=this.lungagge1ref.value;
      Booking.passengerList[1].passengerName=this.passengerNamep1ref.value;
      Booking.passengerList[1].passengerUIN=this.Uin1REf.value;
      Booking.passengerList[2].age=this.age2ref.value;
      Booking.passengerList[2].luggage=this.lungagge2ref.value;
      Booking.passengerList[2].passengerName=this.passengerNamep2ref.value;
      Booking.passengerList[2].passengerUIN=this.Uin2REf.value;
      Booking.passengerList[3].age=this.age3ref.value;
      Booking.passengerList[3].luggage=this.lungagge3ref.value;
      Booking.passengerList[3].passengerName=this.passengerNamep3ref.value;
      Booking.passengerList[3].passengerUIN=this.Uin3REf.value;
      Booking.scheduledFlight.scheduleFlightId=this.state.id;
      Booking.userId.userId=this.state.uid;
      console.log(Booking)
      BookingService.addBooking(Booking).then((response)=>
      {
          console.log(response.data)
          this.props.history.push(`/booking/${this.state.uid}`)
      })
    }
  }


  render() {
    const { classes } = this.props;
    return (
      <div>

        <Container maxWidth="md">
          <Paper elevation={4}>
          <NavBar1></NavBar1>
            <Box>
              <form className={classes.forms}>
                <Typography
                  variant="h4"
                  className={classes.heading}
                  display="flex"
                >
                  <b>ADD Passenger Here </b>
                </Typography>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Number of Passenger"
                      variant="outlined"
                      inputRef={(value) => (this.noofpref = value)}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Passenger name"
                      className={classes.marLeft}
                      variant="outlined"
                      inputRef={(value) => (this.passengerNamepref = value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="UIN number"
                      className={classes.marcenter}
                      variant="outlined"
                      inputRef={(value) => (this.UinREf = value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Age"
                      className={classes.texSmall}
                      variant="outlined"
                      inputRef={(value) => (this.ageref = value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Luggage"
                      className={classes.texSmall}
                      variant="outlined"
                      inputRef={(value) => (this.lungaggeref = value)}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Passenger name"
                      className={classes.marLeft}
                      variant="outlined"
                      inputRef={(value) => (this.passengerNamep1ref = value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="UIN number"
                      className={classes.marcenter}
                      variant="outlined"
                      inputRef={(value) => (this.Uin1REf = value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Age"
                      className={classes.texSmall}
                      variant="outlined"
                      inputRef={(value) => (this.age1ref = value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Luggage"
                      className={classes.texSmall}
                      variant="outlined"
                      inputRef={(value) => (this.lungagge1ref = value)}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Passenger name"
                      className={classes.marLeft}
                      variant="outlined"
                      inputRef={(value) => (this.passengerNamep2ref = value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="UIN number"
                      className={classes.marcenter}
                      variant="outlined"
                      inputRef={(value) => (this.Uin2REf = value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Age"
                      className={classes.texSmall}
                      variant="outlined"
                      inputRef={(value) => (this.age2ref = value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Luggage"
                      className={classes.texSmall}
                      variant="outlined"
                      inputRef={(value) => (this.lungagge2ref = value)}
                    />
                  </Grid>
                </Grid>

                <Grid container spacing={1}>
                  <Grid item xs={12}>
                    <TextField
                      id="outlined-basic"
                      label="Passenger name"
                      className={classes.marLeft}
                      variant="outlined"
                      inputRef={(value) => (this.passengerNamep3ref = value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="UIN number"
                      className={classes.marcenter}
                      variant="outlined"
                      inputRef={(value) => (this.Uin3REf = value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Age"
                      className={classes.texSmall}
                      variant="outlined"
                      inputRef={(value) => (this.age3ref = value)}
                    />
                    <TextField
                      id="outlined-basic"
                      label="Luggage"
                      className={classes.texSmall}
                      variant="outlined"
                      inputRef={(value) => (this.lungagge3ref = value)}
                    />
                  </Grid>
                </Grid>
                <Grid container spacing={1}>
                  <Grid item className={classes.bottombut} xs={6}>
                      <Box className={classes.pad}>
                    <Button  variant="contained" color="primary" onClick={this.addBooking}>
                      Confirm Booking
                    </Button></Box></Grid>                   
                  </Grid>                     
              </form>
            </Box>
            <br></br>
          </Paper>
        </Container>
      </div>
    );
  }
}
AddPassenger.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles)(AddPassenger);
