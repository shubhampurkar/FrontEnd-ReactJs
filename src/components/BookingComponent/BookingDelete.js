import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles} from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Grid from "@material-ui/core/Grid";
import BookingService from '../../services/BookingService';
import NavBar1 from '../Navbar/NavBar1';
import booking from '../../pages/booking';




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
  const useStyles = ({
    table: {
      minWidth: 100,
    },
    top:{
        marginTop:'1.5rem'
    },
    Right:{
        textAlign:'Right',
        marginTop:'1.8rem',
        
    }
  });
class BookingDelete extends Component {
  constructor(props) {
    super(props)
    this.state={
        id:this.props.match.params.id,
        booking:[]
    }
  }

  componentDidMount(){
     
   BookingService.viewBookingByid(this.state.id).then((response)=>{
       
      this.setState({booking:response.data})
      console.log(this.state.booking)
     
    })
  }
  back=()=>{
    this.props.history.push(`/booking/${this.state.id}`)
  }
  delete=(id)=>{
    BookingService.deleteBooking(id).then((result)=>{
        const temp=this.state.booking.filter(book=>book.bookingId!=id);
        this.setState({booking:temp})

    })
  }
    render() {
        const {classes}=this.props;
        return (
           <div>

             <Container maxWidth="md">
                 <Paper className={classes.top}>
               <NavBar1></NavBar1>
                <Grid container spacing={2}>
                    <Grid item  xs={6}>
                    <h1><b>My Orders</b></h1>
                    </Grid> 
                    <Grid item className={classes.Right} xs={6}>
                    <Button variant="contained" color="secondary" onClick={this.back}>Go Back</Button>  
                </Grid>
              </Grid>
               
                
                <TableContainer  maxWidth="md" component={Paper} >
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Source</StyledTableCell>
                                <StyledTableCell align="center">Destination</StyledTableCell>
                                <StyledTableCell align="center">Flight</StyledTableCell>
                                <StyledTableCell align="center">TicketCost</StyledTableCell>
                                <StyledTableCell align="center">No Of Passenger</StyledTableCell>
                                <StyledTableCell align="center">Date Of Booking</StyledTableCell>
                                <StyledTableCell align="center">View</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.booking.map((sf) => (
                                <StyledTableRow key={sf.scheduleFlightId} >
                                    <StyledTableCell align="center" component="th" >{sf.scheduledFlight.schedule.sourceAirport.airportLocation}</StyledTableCell>
                                    <StyledTableCell align="center">{sf.scheduledFlight.schedule.destinationAirport.airportLocation}</StyledTableCell>
                                    <StyledTableCell align="center">{sf.scheduledFlight.flight.carrierName}</StyledTableCell>
                                    <StyledTableCell align="center">{sf.ticketCost}</StyledTableCell>
                                    <StyledTableCell align="center">{sf.noOfPassangers}</StyledTableCell>
                                    <StyledTableCell align="center">{sf.bookingDate}</StyledTableCell>
                                    <StyledTableCell align="center"><Button variant="contained" color="secondary" onClick={()=>this.delete(sf.bookingId)}>Delete</Button></StyledTableCell>                                                                    
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer></Paper>
                </Container>
                </div>
            
        );
    }
}
BookingDelete.propTypes={
    classes:PropTypes.object.isRequired,
};
export default withStyles(useStyles)(BookingDelete);