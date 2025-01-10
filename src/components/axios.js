import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5000", // cloud function
});

export default instance;
//http://127.0.0.1:5001/clone-75c00/us-central1/api