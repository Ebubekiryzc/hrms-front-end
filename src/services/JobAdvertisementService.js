import axios from "axios";
let controllerUrl = "http://localhost:8080/api/jobadvertisements";

export default class JobAdvertisementService {
  getAllActiveAdvertisements() {
    return axios.get(`${controllerUrl}/getAllActiveAdvertisements`);
  }
  getAllActiveAdvertisementsSortedDesc() {
    return axios.get(`${controllerUrl}/getAllActiveAdvertisementsSortedDESC`);
  }
  getAllActiveAdvertisementsOfEmployer(id) {
    return axios.get(`${controllerUrl}/getAllActiveAdvertisementsOfEmployer`, {
      params: { employerId: id },
    });
  }
  add({
    job: { jobId },
    employer: { employerId },
    city: { cityId },
    minSalary,
    maxSalary,
    description,
    quota,
    creationDate,
    advertisementDeadline,
    isActive,
  }) {
    return axios.post(`${controllerUrl}/add`, {
      job: { jobId },
      employer: { employerId },
      city: { cityId },
      minSalary,
      maxSalary,
      description,
      quota,
      creationDate,
      advertisementDeadline,
      isActive,
    });
  }
  update({
    job: { jobId },
    employer: { employerId },
    city: { cityId },
    minSalary,
    maxSalary,
    description,
    quota,
    creationDate,
    advertisementDeadline,
    isActive,
  }) {
    return axios.post(`${controllerUrl}/update`, {
      job: { jobId },
      employer: { employerId },
      city: { cityId },
      minSalary,
      maxSalary,
      description,
      quota,
      creationDate,
      advertisementDeadline,
      isActive,
    });
  }
}
