import axios from "axios";
let controllerUrl = "http://localhost:8080/api/jobSeekerPicture";

export default class JobSeekerPictureService {
  getAll() {
    return axios.get(`${controllerUrl}/getAll`);
  }
  add(picture, { resume: { resumeId } }) {
    let formData = new FormData();
    formData.append("picture", picture);
    return axios.post(`${controllerUrl}/add`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      resume: { id: resumeId }, //TODO: Buranın backend kısmında string olarak json nesne yollanacak.
    });
  }
}
