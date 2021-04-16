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
import axios from 'axios';
import Button from '@material-ui/core/Button';
import ScheduleService from '../../services/ScheduleService';
import Navbar from '../Navbar/Navbar';




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
    }
  });
class ViewAllScheduleFlight extends Component {
  constructor(props) {
    super(props)
    this.state={
      scheduledFlight:[]
    }
  }

  componentDidMount(){
   ScheduleService.getScheduledFlight().then((response)=>{
      this.setState({scheduledFlight:response.data})
    })
  }
  update=(id)=>{
    this.props.history.push(`/updateScheduleid/${id}`)
  }
  view=(id)=>{
    this.props.history.push(`viewScheduleid/${id}`)
  }
    render() {
        const {classes}=this.props;
        return (
           <div>
             <Container maxWidth="md">
               <Paper className={classes.top}>
               <Navbar></Navbar>
             <h1>Schedule Flights</h1>
                <TableContainer  maxWidth="md" component={Paper} >
                    <Table className={classes.table} aria-label="customized table">
                        <TableHead>
                            <TableRow>
                                <StyledTableCell align="center">Index</StyledTableCell>
                                <StyledTableCell align="center">Flight Compamy</StyledTableCell>
                                <StyledTableCell align="center">Destination</StyledTableCell>
                                <StyledTableCell align="center">Source</StyledTableCell>
                                <StyledTableCell align="center">Fares</StyledTableCell>
                            
                                <StyledTableCell align="center">View</StyledTableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.scheduledFlight.map((sf) => (
                                <StyledTableRow key={sf.scheduleFlightId} >
                                    <StyledTableCell align="center" component="th" >{sf.scheduleFlightId}</StyledTableCell>
                                    <StyledTableCell align="center">{sf.flight.carrierName}</StyledTableCell>
                                    <StyledTableCell align="center">{sf.schedule.destinationAirport.airportLocation}</StyledTableCell>
                                    <StyledTableCell align="center">{sf.schedule.sourceAirport.airportLocation}</StyledTableCell>
                                    <StyledTableCell align="center">{sf.fares}</StyledTableCell>

                                    <StyledTableCell align="center"><Button variant="contained" color="secondary" onClick={()=>this.view(sf.scheduleFlightId)}>View</Button></StyledTableCell>                                           
                                </StyledTableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </Paper>
                </Container>
                </div>
            
        );
    }
}
ViewAllScheduleFlight.propTypes={
    classes:PropTypes.object.isRequired,
};
export default withStyles(useStyles)(ViewAllScheduleFlight);