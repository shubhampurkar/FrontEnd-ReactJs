import React, { Component, Fragment } from "react";
import {
  Select,
  Grid,
  Paper,
  Button,
  MenuItem,
  FormControl,
  InputLabel,
  Typography,
  withStyles,
  Container,
  Box,
} from "@material-ui/core";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import PropTypes from "prop-types";
import BookingService from "../../services/BookingService";
import NavBar1 from "../Navbar/NavBar1";
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
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);
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
    
    spacing: {
      textAlign: "center",
      marginTop: "1.0rem",
    },
    dest:{
      marginTop: "1.0rem",
    },
    formControl: {
      minWidth: "30ch",
      height: "5ch",
      marginBottom:'2rem',
      marginLeft:'8.3rem'
    },
    formControl1: {
      minWidth: "30ch",
      height: "5ch",
      marginBottom:'2rem',
      marginRight:'8.0rem'
    },
    SButton:{
        marginBottom:'3rem',
        textAlign:'center'
    },
    lef:{
      marginLeft:'0.7rem',

    }
    ,search:{
      marginLeft:'-3.5rem'
    }
  });
class Addbooking extends Component {
    constructor(props) {
        super(props)
        this.state={
            bid:this.props.match.params.id,
            scheduledFlight:[],
            // ScheduledFlight:{
            //     availableSeats: '',
            //     fares: '',
            //     flight: {
            //       carrierName: "",
            //       flightId: '',
            //       flightModel: "",
            //       seatCapacity: ''
            //     },
            //     schedule: {
            //       airrivalTime: "",
            //       departureTime: "",
            //       destinationAirport: {
            //         airportLocation: "",
            //         airportName: "",
            //         airportid: ''
            //       },
            //       scheduleId: '',
            //       sourceAirport: {
            //         airportLocation: "",
            //         airportName: '',
            //         airportid: ''
            //       }
            //     },
            //     scheduleFlightId: ''
            //   }
            sourceTypeError:'',
            destinationTypeError:''
            }
        }
        validate =()=>{
          let sourceTypeError='';
          let destinationTypeError='';
        
          if(!this.sourceTyperef.value){
              sourceTypeError="Please select Source Airport";
          }

          if(!this.destinationTyperef.value){
            destinationTypeError="Please select Destination Airport";
        }
        if(sourceTypeError || destinationTypeError ){
          this.setState({
             sourceTypeError,destinationTypeError
          })
          return false;
         }
         return true;
        
          
        }

    
    search=(event)=>{
        event.preventDefault();
        let sid=this.sourceTyperef.value;
        let did=this.destinationTyperef.value;
        alert(sid+" "+did)
        BookingService.getSource(did,sid).then((response)=>{
            console.log(response.data)
            this.setState({scheduledFlight:response.data})
            console.log("hii"+this.state.scheduledFlight[0].scheduleFlightId)
            this.setState({scheduledFlight:response.data})
            console.log("hii"+this.state.scheduledFlight)
        }
        )
    }

    view=(id)=>{
        this.props.history.push(`/addPassenger/${this.state.bid}/${id}`)
    }

    cancel=()=>{
      this.props.history.push(`/booking/${this.state.bid}`)
    }

  render() {
    const { classes } = this.props;
    return (
      <Fragment>
        <Container maxWidth="md">
        
          <Paper className={classes.paper} elevation={4}>
          <NavBar1 maxWidht="md"></NavBar1>
            <Typography color="primary" className={classes.spacing} display='flex' variant="h4">
              <b>BOOK FLIGHT</b>
            </Typography>
            <Box>
              <Grid container spacing={2}>
                <Grid className={classes.spacing} item xs={6}>
                  <FormControl
                    variant="outlined"
                    className={classes.formControl}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Source Airport
                    </InputLabel>
                    <Select
                      inputRef={(value) => (this.sourceTyperef = value)}
                      label="Source Airport" 
                    >
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
                <Grid className={classes.spacing} item xs={6}>
                <FormControl
                    variant="outlined"
                    className={classes.formControl1}
                  >
                    <InputLabel id="demo-simple-select-outlined-label">
                      Destination Airport
                    </InputLabel>
                    <Select 
                      inputRef={(value) => (this.destinationTyperef = value)}
                      label="Destination Airport"
                    >
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
              </Grid>
              <Grid container spacing={2}>
                <Grid item xs={12} className={classes.SButton}>
                <Button variant="outlined" color="secondary"  className={classes.search} onClick={this.search}>SEARCH A Flight</Button> <Button variant="outlined" color="secondary" className={classes.lef} onClick={this.cancel}>Cancel</Button>
                </Grid>
                </Grid>       
            </Box>
          </Paper>
        </Container>
        <br></br>
        <Container maxWidth="md">
                <TableContainer   component={Paper} >
                    <Table className={classes.table} aria-label="customized table">
                        
                    <TableHead>
                            <TableRow>
                            {this.state.scheduledFlight.map((sf) => (
                                <StyledTableRow key={sf.scheduleFlightId} >
                                    
                                    <StyledTableCell align="center">{sf.flight.carrierName}</StyledTableCell>
                                    <StyledTableCell align="center">{sf.flight.flightModel}</StyledTableCell>
                                    <StyledTableCell align="center">SOURCE - 
                                    {sf.schedule.sourceAirport.airportLocation} - {sf.schedule.sourceAirport.airportName}</StyledTableCell>
                                    <StyledTableCell align="center">DESTINATION - 
                                    {sf.schedule.destinationAirport.airportLocation} - {sf.schedule.destinationAirport.airportName}</StyledTableCell>
                                    <StyledTableCell align="center">FARE - {sf.fares}</StyledTableCell>
                                    <StyledTableCell align="center"><Button variant="contained" color="secondary" onClick={()=>this.view(sf.scheduleFlightId)}>Book</Button></StyledTableCell>                                           
                                </StyledTableRow>
                            ))}
                       
                            </TableRow> </TableHead>
                    </Table>
                </TableContainer>
                </Container>
        {/* {
            this.state.scheduledFlight.map(sched=>{                
            <Container maxWidth="md">
        <Paper className={classes.paper} elevation={4}>
            Flight Name:{sched.flight.carrierName}
        </Paper>
        </Container>
        }
    )
  } */}
</Fragment>
    )
}
}
Addbooking.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(useStyles, { withTheme: true })(Addbooking);
