import axios from "axios";
let controllerUrl = "http://localhost:8080/api/jobSeekers";

export default class JobSeekerService {
  getAll() {
    return axios.get(`${controllerUrl}/getAll`);
  }
  getByEmail(userMail) {
    return axios.get(`${controllerUrl}/getByEmail`, {
      params: { email: userMail },
    });
  }
  getByNationalId(userNationalId) {
    return axios.get(`${controllerUrl}/getByNationalId`, {
      params: { nationalId: userNationalId },
    });
  }
  add({ email, password, firstName, lastName, nationalId, yearOfBirth }) {
    return axios.post(`${controllerUrl}/add`, {
      email,
      password,
      firstName,
      lastName,
      nationalId,
      yearOfBirth,
    });
  }
}
