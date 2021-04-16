import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import FlightService from "../services/FlightService";
import Navbar from './Navbar/Navbar';

//defining various elements properties
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);
const useStyles = {
  table: {
    minWidth: 100,
  },
};

//This component displays all the flight details
class ListFlightComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //to display list of flights initalizing an array
      flights: [],
    };
    this.addFlight = this.addFlight.bind(this);
    this.editFlight = this.editFlight.bind(this);
  }

  //componentDidMount is called immediately after the component is mounted and it will return promise
  //so,we will make axios call inside the componentDidMoount.
  componentDidMount() {
    FlightService.getFlights().then((ressponse) => {
      this.setState({ flights: ressponse.data });
    });
  }

  //This function will redirect to the view flight details according to its id
  viewFlight(id) {
    this.props.history.push(`/viewFlight/${id}`);
  }

  //This function will send the id to the url of the update method
  editFlight(id) {
    this.props.history.push(`/updateFlight/${id}`);
  }

  //this function will redirect to the add flight component
  addFlight() {
    this.props.history.push("/addFlight");
  }

  //The JS code will be rendered and returned inside the render method
  render() {
    const { classes } = this.props;

    return (
      <div>
        <Container maxWidth="md">
        <Navbar></Navbar>
          <h1>Flights List</h1>

          <TableContainer maxWidth="md" component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Flight Id</StyledTableCell>
                  <StyledTableCell align="center">Carrier Name</StyledTableCell>
                  <StyledTableCell align="center">Flight Model</StyledTableCell>
                  <StyledTableCell align="center">
                    Seat Capacity
                  </StyledTableCell>
                  <StyledTableCell align="center">Update</StyledTableCell>
                  <StyledTableCell align="center">View</StyledTableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {this.state.flights.map((flight) => (
                  <StyledTableRow key={flight.flightId}>
                    <StyledTableCell align="center" component="th">
                      {flight.flightId}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {flight.carrierName}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {flight.flightModel}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {flight.seatCapacity}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => this.editFlight(flight.flightId)}
                      >
                        Update
                      </Button>
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.viewFlight(flight.flightId)}
                      >
                        View
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Container>
      </div>
    );
  }
}
export default withStyles(useStyles)(ListFlightComponent);
