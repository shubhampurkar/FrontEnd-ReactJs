import React, { Component } from "react";
import FlightService from "../services/FlightService";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Box, Container, Paper, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import { Grid, withStyles } from "@material-ui/core";
import Navbar from './Navbar/Navbar'

//defining various elements properties
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
    width: "100%",
  },
  paper: {
    marginTop: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  spacing: {
    marginTop: "2.0rem",
  },
  formControl: {
    minWidth: "30ch",
    height: "5ch",

  },
});

//This component is used to add flight data
class AddFlightComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carrierName: "",
      flightModel: "",
      seatCapacity: "",

     
      carrierNameError: "",
      flightModelError: "",
      seatCapacityError: "",
    
    };
    this.changeCarrierNameHandler = this.changeCarrierNameHandler.bind(this);
    this.changeFlightModelHandler = this.changeFlightModelHandler.bind(this);
    this.saveFlight = this.saveFlight.bind(this);
    this.validate = this.validate.bind(this);
  }
  //This method will validate the incoming flight data and display appropriate error message
  validate = () => {
    let carrierNameError = "";
    let flightModelError = "";
    let seatCapacityError = "";
    if (!this.state.carrierName) {
      carrierNameError = "Please select the Carrier Name";
    }

    if (!this.state.flightModel) {
      flightModelError = "Please select the Flight Model";
    }
  
   
    if (this.state.seatCapacity < 150) {
      seatCapacityError = "Seat Capacity should not be less than 150";
    }
    
    if (this.state.seatCapacity > 200) {
      seatCapacityError = "Seat Capacity should not be more than 200";
    } 
    if (!this.state.seatCapacity) {
      seatCapacityError = "Seat Capacity should not be blank";
    }

    if (carrierNameError || flightModelError || seatCapacityError) {
      this.setState({
        carrierNameError,
        flightModelError,
        seatCapacityError,
      });
      return false;
    }
    return true;
  };

  //This method will set the new carrier name
  changeCarrierNameHandler = (event) => {
    this.setState({
      carrierName: event.target.value,
      carrierNameError: "",
    });
  };

  //This method will set the new flight model
  changeFlightModelHandler = (event) => {
    this.setState({
      flightModel: event.target.value,
      flightModelError: "",
    });
  };

  //This method will set the new seat capacity
  changeSeatCapacityHandler = (event) => {
    this.setState({
      seatCapacity: event.target.value,
      seatCapacityError: "",
    });
  };

//This method will save and send the data to the backend
  saveFlight = (f) => {
    f.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        carrierNameError: "",
      });

      let flight = {
        carrierName: this.state.carrierName,
        flightModel: this.state.flightModel,
        seatCapacity: this.state.seatCapacity,
      };
      console.log("flight => " + JSON.stringify(flight));
      FlightService.addFlight(flight).then((res) => {
        this.props.history.push("/viewAllFlights");
        
      });
    } else {
      alert("Flight Data is not matching the conditions");
    }
  };

  
//This method will redirect you to the list of flight list
  cancel() {
    this.props.history.push("/adminmain");
  }


  //The JS code will be rendered and returned inside the render method
  render() {
    const { classes } = this.props;
   
    return (
      <div>
        <Container maxWidth="sm">
          
          <Paper className={classes.paper} elevation={4}>
          
            <Box>   
            <Navbar></Navbar>          
                  <Typography className={classes.form} color='secondary'><h1> Add Flight Schedule</h1></Typography>            
              <form className={classes.form}>
                <Grid container spacing={1}>
                  <Grid item xs={12} className={classes.spacing}>
                  <FormControl variant="outlined" className={classes.formControl} >
                <InputLabel id="demo-simple-select-outlined-label">
                Carrier Name
                </InputLabel>
              <Select  label="Carrier Name"  value={this.state.carrierName} 
                onChange={this.changeCarrierNameHandler} pattern="/^[A-Za-z]+$/" minLength="4">
                       <MenuItem value="">
                         <em>None</em>
                      </MenuItem>
                          <MenuItem value="AirIndia">AirIndia</MenuItem>
                               <MenuItem value="Spicejet">Spicejet</MenuItem>
                               <MenuItem value="KingFisher">KingFisher</MenuItem>
                                <MenuItem value="IndiGo">IndiGo</MenuItem>
                                <MenuItem value="AirAsia">AirAsia</MenuItem>
                                <MenuItem value="Goair">Goair</MenuItem>
                </Select>
                    <div style={{fontSize:"2",color:"red"}}>{this.state.carrierNameError}</div>
                </FormControl>

                  </Grid>
                  <Grid item className={classes.spacing} xs={12}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Flight Model
                      </InputLabel>
                      <Select
                        value={this.state.flightModel}
                        label="Flight Model"
                        onChange={this.changeFlightModelHandler} pattern="/^[A-Za-z]+$/" minLength="5">
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="PremiumEconomy">
                          PremiumEconomy
                        </MenuItem>
                        <MenuItem value="Economy">Economy</MenuItem>
                      </Select>
                      <div style={{fontSize:"2",color:"red"}}>{this.state.flightModelError}</div>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} className={classes.spacing}>
                    <TextField
                      label="SeatCapacity"
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      className={classes.textField}
                     
                value={this.state.seatCapacity} onChange={this.changeSeatCapacityHandler} pattern="[0-9]"></TextField>
                     <div style={{fontSize:"2",color:"red"}}>{this.state.seatCapacityError}</div>
                  </Grid>

                  <Grid item xs={12} className={classes.spacing}>
                    <Button
                      className={classes.primaryButton}
                      variant="contained"
                      color="primary"
                      onClick={this.saveFlight}
                    >
                      SAVE
                    </Button>
                    <Button
                      className={classes.primaryButton}
                      variant="contained"
                      color="secondary"
                      onClick={this.cancel.bind(this)}
                    >
                      CANCEL
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Box>
          </Paper>
        </Container>
      </div>
    );
  }
}
AddFlightComponent.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(useStyles)(AddFlightComponent);