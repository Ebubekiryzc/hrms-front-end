import axios from "axios";
let controllerUrl = "http://localhost:8080/api/jobseekercovers";

export default class JobSeekerCoverLetterService {
  getAll() {
    return axios.get(`${controllerUrl}/getAll`);
  }
  add({ resume: { resumeId }, coverLetter }) {
    return axios.post(`${controllerUrl}/add`, {
      resume: { id: resumeId },
      coverLetter,
    });
  }
  update({ resume: { resumeId }, coverLetter }) {
    return axios.post(`${controllerUrl}/update`, {
      resume: { id: resumeId },
      coverLetter,
    });
  }
  delete(coverLetterId) {
    return axios.delete(`${controllerUrl}/delete`, {
      params: { id: coverLetterId },
    });
  }
}
