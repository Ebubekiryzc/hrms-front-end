import React from "react";
import ResumeService from "../../services/ResumeService";

export default function Resumes() {
  const [resumes, setResumes] = useState([]);

  useEffect(() => {
    let resumeService = new ResumeService();
    resumeService
        .getAll()
        .then((result) => setResumes(result.data.data));
  }, []);

  return <div></div>;
}
