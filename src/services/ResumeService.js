import axios from "axios";
let controllerUrl = "http://localhost:8080/api/resumes";

export default class ResumeService {
  getAll() {
    return axios.get(`${controllerUrl}/getAll`);
  }
  getByJobSeekerId(jobSeekerId) {
    return axios.get(`${controllerUrl}/getByJobSeekerId`, {
      params: { id: jobSeekerId },
    });
  }
  add(jobSeekerId) {
    return axios.post(`${controllerUrl}/add`, { id: jobSeekerId });
  }
}
