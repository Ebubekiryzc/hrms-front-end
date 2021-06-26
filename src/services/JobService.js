import axios from "axios";
let controllerUrl = "http://localhost:8080/api/jobs";

export default class JobService {
  getAll() {
    return axios.get(`${controllerUrl}/getAll`);
  }
  add({ name }) {
    axios.post(`${controllerUrl}/add`, { name });
  }
}
