import axios from "axios";
let controllerUrl = "http://localhost:8080/api/socialAccounts";

export default class SocialAccountService {
  getAll() {
    return axios.get(`${controllerUrl}/getAll`);
  }
  add({ resume: { resumeId }, accountUrl }) {
    return axios.post(`${controllerUrl}/add`, {
      resume: { id: resumeId },
      accountUrl,
    });
  }
  update({ resume: { resumeId }, accountUrl }) {
    return axios.post(`${controllerUrl}/update`, {
      resume: { id: resumeId },
      accountUrl,
    });
  }
  delete(socialAccountId) {
    return axios.delete(`${controllerUrl}/delete`, {
      params: { id: socialAccountId },
    });
  }
}
