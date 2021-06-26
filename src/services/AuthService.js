import axios from "axios";
let controllerUrl = "http://localhost:8080/api/auth";

export default class AuthService {
  registerEmployer({ email, password, companyName, webSite, phone }) {
    return axios.post(`${controllerUrl}/registerEmployer`, {
      email,
      password,
      companyName,
      webSite,
      phone,
    });
  }

  registerJobSeeker({
    email,
    password,
    firstName,
    lastName,
    nationalityId,
    yearOfBirth,
  }) {
    return axios.post(`${controllerUrl}/registerJobSeeker`, {
      email,
      password,
      firstName,
      lastName,
      nationalityId,
      yearOfBirth,
    });
  }
}
