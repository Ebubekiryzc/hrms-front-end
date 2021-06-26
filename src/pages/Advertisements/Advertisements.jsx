import React from "react";
import JobAdvertisementService from "../../services/JobAdvertisementService";

export default function Advertisements() {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    let advertisementService = new JobAdvertisementService();
    advertisementService
      .getAllActiveAdvertisements()
      .then((result) => setAdvertisements(result.data.data));
  }, []);

  return <div></div>;
}
