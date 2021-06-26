import axios from "axios";
let controllerUrl = "http://localhost:8080/api/experience";

export default class ExperienceService {
  getAll() {
    return axios.get(`${controllerUrl}/getAll`);
  }
  getByEndDateOrderByDesc() {
    return axios.get(`${controllerUrl}/getByEndDateOrdeByDesc`);
  }
  add({ resume: { resumeId }, companyName, position, startDate, endDate }) {
    return axios.post(`${controllerUrl}/add`, {
      resume: { id: resumeId },
      companyName,
      position,
      startDate,
      endDate,
    });
  }
  update({ resume: { resumeId }, companyName, position, startDate, endDate }) {
    return axios.post(`${controllerUrl}/update`, {
      resume: { id: resumeId },
      companyName,
      position,
      startDate,
      endDate,
    });
  }

  delete(experienceId) {
    return axios.delete(`${controllerUrl}/delete`, {
      params: { id: experienceId },
    });
  }
}
