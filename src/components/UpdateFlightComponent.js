import React, { Component } from "react";
import FlightService from "../services/FlightService";
import Button from "@material-ui/core/Button";
import { Grid, withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import { Box, Container, Paper } from "@material-ui/core";
import PropTypes from "prop-types";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";

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
    marginTop: "3.0rem",
  },
  formControl: {
    minWidth: "30ch",
    height: "5ch",
  },
});

//This component Updates the flight details
class UpdateFlightComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.props.match.params.id,

      flightId: this.props.match.params.id,
      carrierName: "",
      flightModel: "",
      seatCapacity: "",

      carrierNameError: "",
      flightModelError: "",
      seatCapacityError: "",
    };
    this.changeCarrierNameHandler = this.changeCarrierNameHandler.bind(this);
    this.changeFlightModelHandler = this.changeFlightModelHandler.bind(this);
    this.updateFlight = this.updateFlight.bind(this);
    this.validate = this.validate.bind(this);
  }

  //componentDidMount is called immediately after the component is mounted and it will return promise
  //so,we will make axios call inside the componentDidMoount.
  componentDidMount() {
    FlightService.getFlightById(this.state.id)
      .then((dataresponse) => {
        let flight = dataresponse.data;

        this.setState({
          carrierName: flight.carrierName,
          flightModel: flight.flightModel,
          seatCapacity: flight.seatCapacity,
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  //This method will send the updated data to the backend
  updateFlight = (event) => {
    
    event.preventDefault();
    const isValid = this.validate();
    if (isValid) {
      this.setState({
        carrierNameError: "",
      });
      
      const flightDetails = {
        flightId: this.state.flightId,
        carrierName: this.state.carrierName,
        flightModel: this.state.flightModel,
        seatCapacity: this.state.seatCapacity,
      };

      FlightService.updateFlight(flightDetails).then((res) => {
        this.props.history.push("/flight");
      });
      console.log(flightDetails);
    } else {
      alert("Flight Data is not matching the condition");
    }
  };

  //This method validates the entered product data and display the error messages
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

  //this method will set new carrier name
  changeCarrierNameHandler = (event) => {
    this.setState({
      carrierName: event.target.value,
      carrierNameError: "",
    });
  };

  //this method will set new flight model
  changeFlightModelHandler = (event) => {
    this.setState({
      flightModel: event.target.value,
      flightModelError: "",
    });
  };

  //this method will set new seat capacity
  changeSeatCapacityHandler = (event) => {
    this.setState({
      seatCapacity: event.target.value,
      seatCapacityError: "",
    });
  };

  // this method will redirect to the list of flights
  cancel() {
    this.props.history.push("/flight");
  }

  //The JS code will be rendered and returned inside the render method
  render() {
    const { classes } = this.props;
    const bull = <span className={classes.bullet}>•</span>;

    return (
      <Container maxWidth="sm">
        <Paper className={classes.paper} elevation={4}>
          <Box>
            <center>
              {" "}
              <h1>Update Flight</h1>
            </center>
            <form className={classes.form}>
              <Grid container spacing={1}>
                <Grid item className={classes.spacing} xs={12}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Carrier Name
                    </InputLabel>
                    <Select
                      label="Carrier Name"
                      value={this.state.carrierName}
                      onChange={this.changeCarrierNameHandler}
                      pattern="/^[A-Za-z]+$/"
                      minLength="4"
                    >
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
                    <div style={{ fontSize: "2", color: "red" }}>
                      {this.state.carrierNameError}
                    </div>
                  </FormControl>

                  <Grid item className={classes.spacing} xs={12}>
                    <FormControl
                      variant="outlined"
                      className={classes.formControl}
                    >
                      <InputLabel id="demo-simple-select-outlined-label">
                        Flight Model
                      </InputLabel>
                      <Select
                        label="Flight Model"
                        value={this.state.flightModel}
                        onChange={this.changeFlightModelHandler}
                        pattern="/^[A-Za-z]+$/"
                        minLength="5"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="Business">Business</MenuItem>
                        <MenuItem value="Economy">Economy</MenuItem>
                        <MenuItem value="Premium Economy">
                          Premium Economy
                        </MenuItem>
                      </Select>
                      <div style={{ fontSize: "2", color: "red" }}>
                        {this.state.flightModelError}
                      </div>
                    </FormControl>
                  </Grid>
                  <Grid item xs={12} className={classes.spacing}>
                    <TextField
                      label="SeatCapacity"
                      id="outlined-basic"
                      size="small"
                      variant="outlined"
                      className={classes.textField}
                      value={this.state.seatCapacity}
                      onChange={this.changeSeatCapacityHandler}
                      pattern="[0-9]"
                    ></TextField>
                    <div style={{ fontSize: "2", color: "red" }}>
                      {this.state.seatCapacityError}
                    </div>
                  </Grid>
                  <Grid item xs={12} className={classes.spacing}>
                    <Button
                      variant="contained"
                      className={classes.primaryButton}
                      color="primary"
                      onClick={this.updateFlight}
                    >
                      Save
                    </Button>
                    <Button
                      variant="contained"
                      className={classes.primaryButton}
                      color="secondary"
                      onClick={this.cancel.bind(this)}
                    >
                      Cancel
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Paper>
      </Container>
    );
  }
}

UpdateFlightComponent.propTypes = { classes: PropTypes.object.isRequired };

export default withStyles(useStyles)(UpdateFlightComponent);
