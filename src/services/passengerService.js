import axios from "axios";


class passengerService  {
   AddPassenger(passenger){
       return axios.post('http://localhost:8080/fms/controller/passengerController/addPassenger',passenger)
   }
}

export default new passengerService;