import axios from "axios";




const api = axios.create({
  baseURL: "http://localhost:3001/api",
});

// Remove useEffect and setTenis usage from this service file.

export default api;


