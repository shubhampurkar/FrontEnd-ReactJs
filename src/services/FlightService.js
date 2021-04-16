import axios from 'axios';

 
 class FlightService{
     //This method returns response of get method
     getFlights(){
         return axios.get("http://localhost:8080/fms/controller/flightController/viewAllFlights");
     }
     //This methods add the new flight data to the flight list
     addFlight(flight){
         return axios.post("http://localhost:8080/fms/controller/flightController/addFlight",flight);
     }
      
     //this method returns the details of the flight with id
     getFlightById(flightId){
         return axios.get(`http://localhost:8080/fms/controller/flightController/viewFlight/${flightId}`);
     }
     //this method is used to update the details of the flight with respect to its flightId
     updateFlight(flight){
         return axios.put("http://localhost:8080/fms/controller/flightController/updateFlight",flight);
     }
 
 }

 export default new FlightService()