import axios from 'axios';
export default axios.create({
    baseURL:"http://travel-tourism-backend.workstream.club/api/",
    headers:{
        "Content-Type":"application/json"
    }
})