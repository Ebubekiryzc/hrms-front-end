import React from "react";
import JobSeekerService from "../../services/JobSeekerService";

export default function JobSeekers() {
  const [jobSeekers, setJobSeekers] = useState([]);

  useEffect(() => {
    let jobSeekerService = new JobSeekerService();
    jobSeekerService
    .getAll()
    .then((result) => setJobSeekers(result.data.data));
  }, []);

  return <div></div>;
}
