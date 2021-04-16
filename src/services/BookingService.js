import axios from 'axios';


class BookingService{
   getSource(sourceAirport,destinationAirport)
   {
        return axios.get('http://localhost:8080/fms/controller/scheduledFlightController/viewAllScheduleByAirport',{params:{destinationAirport,sourceAirport}}).catch(error=>{alert('schedule not found')});
   }
   addBooking(Booking)
   {
        return axios.post('http://localhost:8080/fms/controller/bookingController/addBooking',Booking);
   }
   viewBookingByid(id)
   {
        return axios.get(`http://localhost:8080/fms/controller/bookingController/viewBookingHistory/${id}`);
   }
   viewBooking(id){
        return axios.get(`http://localhost:8080/fms/controller/bookingController/viewBooking/${id}`)
   }
   deleteBooking(id){
        return axios.delete(`http://localhost:8080/fms/controller/bookingController/cancelBooking/${id}`)
   }
}

export default new BookingService;