import React from "react";
import EmployerService from "../../services/EmployerService";

export default function Employers() {
  const [employers, setEmployers] = useState([]);

  useEffect(() => {
    let employerService = new EmployerService();
    employerService
      .getAllActiveAdvertisements()
      .then((result) => setEmployers(result.data.data));
  }, []);

  return <div></div>;
}
