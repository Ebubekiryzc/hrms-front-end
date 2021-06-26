import axios from "axios";
let controllerUrl = "http://localhost:8080/api/knownlanguages";

export default class KnownLanguageService {
  getAll() {
    return axios.get(`${controllerUrl}/getAll`);
  }
  add({ resume: { resumeId }, language: { languageId }, level }) {
    return axios.post(`${controllerUrl}/add`, {
      resume: { id: resumeId },
      language: { id: languageId },
      level,
    });
  }
  update({ resume: { resumeId }, language: { languageId }, level }) {
    return axios.post(`${controllerUrl}/update`, {
      resume: { id: resumeId },
      language: { id: languageId },
      level,
    });
  }
  delete(knownLanguageId) {
    return axios.delete(`${controllerUrl}/delete`, {
      params: { id: knownLanguageId },
    });
  }
}
