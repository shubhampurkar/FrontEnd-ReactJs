import axios from 'axios';
class ScheduleService{
    
    addScheduleFlight(schedule){
        return axios.post("http://localhost:8080/fms/controller/scheduledFlightController/addScheduleFlight",schedule);
    }

    getSchedules(){
        return axios.get("http://localhost:8080/fms/controller/scheduledFlightController/viewAllScheduledFlight");
    }
    addScheduledFlight(scheduled){
        return axios.post("http://localhost:8080/fms/controller/scheduledFlightController/addScheduledFlight",scheduled);
    }
    getScheduledFlight(){
        return axios.get('http://localhost:8080/fms/controller/scheduledFlightController/viewAllScheduledFlight');
    }
    getScheduleById(id){
        return axios.get(`http://localhost:8080/fms/controller/scheduledFlightController/viewScheduledFlightById/${id}`);
    }
    updateScheduledFlight(scheduledFlight){
        return axios.put('http://localhost:8080/fms/controller/scheduledFlightController/updateScheduledFlight',scheduledFlight);
    }
}

export default new ScheduleService;