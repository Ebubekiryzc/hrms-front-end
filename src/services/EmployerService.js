import axios from "axios";
let controllerUrl = "http://localhost:8080/api/employers";

export default class EmployerService {
  getAll() {
    return axios.get(`${controllerUrl}/getAll`);
  }

  add({ email, password, companyName, webSite, phone }) {
    return axios.post(`${controllerUrl}/add`, {
      email,
      password,
      companyName,
      webSite,
      phone,
    });
  }
}
