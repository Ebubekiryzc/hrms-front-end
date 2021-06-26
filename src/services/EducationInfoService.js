import axios from "axios";
let controllerUrl = "http://localhost:8080/api/educationinfo";

export default class EducationInfoService {
  getAll() {
    return axios.get(`${controllerUrl}getAll`);
  }
  getByEndDateOrderByDesc() {
    return axios.get(`${controllerUrl}/getByEndDateOrderByDesc`);
  }
  add({
    resume: { resumeId },
    school: { schoolId },
    faculty: { facultyId },
    department: { departmentId },
    startDate,
    endDate,
  }) {
    return axios.post(`${controllerUrl}/add`, {
      resume: { id: resumeId },
      school: { id: schoolId },
      faculty: { id: facultyId },
      department: { id: departmentId },
      startDate,
      endDate,
    });
  }
  update({
    resume: { resumeId },
    school: { schoolId },
    faculty: { facultyId },
    department: { departmentId },
    startDate,
    endDate,
  }) {
    return axios.post(`${controllerUrl}/update`, {
      resume: { id: resumeId },
      school: { id: schoolId },
      faculty: { id: facultyId },
      department: { id: departmentId },
      startDate,
      endDate,
    });
  }

  delete(educationInfoId) {
    return axios.delete(`${controllerUrl}/delete`, {
      params: { id: educationInfoId },
    });
  }
}
