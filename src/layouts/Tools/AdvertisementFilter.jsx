import React from "react";
import { useState, useEffect } from "react";
import JobService from "../../services/JobService";
import EYCheckBox from "../../utilities/customComponents/EYCheckBox";

export default function AdvertisementFilter() {
  const [checkStates, setCheckStates] = useState([]);
  const [jobs, setJobs] = useState([]);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkStates.map((item, index) =>
      index === position ? !item : item
    );
    setCheckStates(updatedCheckedState);
  };

  useEffect(() => {
    let jobService = new JobService();
    jobService.getAll().then((result) => {
      setJobs(result.data.data);
      setCheckStates(
        Array.from({ length: result.data.data.length }, () => false)
      );
    });
  }, []);

  return (
    <div className="advertisement-filter-overlay section-padding">
      {jobs.map((job, index) => (
        //TODO: Eğer okeyse gözüksün

        <EYCheckBox
          key={job.id}
          id={`custom-checkbox-${index}`}
          isChecked={checkStates[index]}
          labelText={job.name}
          onChangeFunction={() => {
            handleOnChange(index);
            checkStates[index] ? setJobs() : setJobs();
          }}
        />
      ))}
    </div>
  );
}
