
import './App.css';
import {BrowserRouter as Router, Route, Switch }from 'react-router-dom';
import ListFlightComponent from './components/ListFlightComponent';

import AddFlightComponent from './components/AddFlightComponent';
import UpdateFlightComponent from './components/UpdateFlightComponent';
import ViewFlightComponent from './components/ViewFlightComponent';
import Login from './pages/login'
import Register from './pages/register';
import ViewAllScheduledFlight from './components/ScheduledFlightpage/viewAllScheduledFlight';

import AdminMain from './pages/AdminMain';
import Booking from './pages/booking';
import ScheduledFlight from './components/ScheduledFlightpage/SCheduleFlight'
import ViewScheduleId from './components/ScheduledFlightpage/viewScheduleId';
import UpdateScheduleFlight from './components/ScheduledFlightpage/UpdateScheduleFlight';
import Addbooking from './components/BookingComponent/Addbooking';
import AddPassenger from './components/BookingComponent/AddPassenger';
import MyOrder from './components/BookingComponent/MyOrder';
import ViewBooking from './components/BookingComponent/ViewBooking';
import DeleteBooking from './components/BookingComponent/BookingDelete'
import SerachScheduled from './components/ScheduledFlightpage/SerachScheduled';


function App() {
  return (
   <div>
     <Router>
       
         <div className="container">
            <Switch>       
              <Route path="/" exact component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/adminmain" component={AdminMain}></Route>
              <Route path="/booking/:id" component = {Booking}></Route>             
              <Route path="/flight" exact component = {ListFlightComponent}></Route>
               <Route path="/viewAllFlights" component = {ListFlightComponent}></Route> 
              <Route path="/addFlight" component = {AddFlightComponent}></Route>
              <Route path="/updateFlight/:id" component = {UpdateFlightComponent}></Route>
              <Route path="/viewFlight/:id" component = {ViewFlightComponent}></Route>
              <Route path="/viewSchedule" component = {ViewAllScheduledFlight}></Route>
              <Route path="/Scheduleflight" component = {ScheduledFlight}></Route>           
              <Route path="/addBooking/:id" component = {Addbooking}></Route>
              <Route path="/addPassenger/:bid/:id" component = {AddPassenger}></Route>
              <Route path="/viewScheduleid/:id" component={ViewScheduleId}></Route>
              <Route path="/myOrder/:id" component={MyOrder}></Route>
              <Route path="/deleteBooking/:id" component={DeleteBooking}></Route>
              <Route path="/viewOrder/:id" component={ViewBooking}></Route>
              <Route path="/searchScheduled" component={SerachScheduled}></Route>
              <Route path="/updateScheduleid/:id" component={UpdateScheduleFlight}></Route>      
              
            </Switch>
             </div> 

      </Router> 
   </div>
  );
}

export default App;
