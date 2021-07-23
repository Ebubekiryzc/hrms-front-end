import React from "react";
import { useState, useEffect } from "react";
import { Button, Collapse, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import JobService from "../../services/JobService";
import EYCheckBox from "../../utilities/customComponents/EYCheckBox/EYCheckBox";
import SearchBar from "../Navi/Tools/SearchBar/SearchBar";
import "./AdvertisementFilter.css";

export default function AdvertisementFilter() {
  const [checkStates, setCheckStates] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [open, setOpen] = useState(false);

  const handleOnChange = (position) => {
    const updatedCheckedState = checkStates.map((item, index) =>
      index === position ? !item : item
    );
    setCheckStates(updatedCheckedState);
  };

  const filterMenu = (
    <>
      <div className="border-bottom pb-2 ml-2">
        <h4 className="filter-text">Filters</h4>
      </div>
      <div className="position-menu py-2 border-bottom ml-3">
        <h6>Position</h6>
        <FontAwesomeIcon icon="minus" className="decoration-icon" />
        <SearchBar
          className="search"
          placeholder="Search for a Position..."
          buttonText="Find"
        />
        <Form className="scrollable-list">
          {jobs.map((job, index) => (
            <EYCheckBox
              key={job.id}
              id={`custom-checkbox-${index}`}
              isChecked={checkStates[index]}
              labelText={job.name}
              onChangeFunction={() => {
                handleOnChange(index);
              }}
            />
          ))}
        </Form>
      </div>
    </>
  );

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
      <div className="filter-button-div">
        <Button
          className="filter-button"
          onClick={() => setOpen(!open)}
          aria-controls="mobile-filter"
          aria-expanded={open}
        >
          Filters
          <FontAwesomeIcon icon="filter" className="filter-icon" />
        </Button>
      </div>
      <Collapse in={open}>
        <div className="filter" id="mobile-filter">
          {filterMenu}
        </div>
      </Collapse>
      <section className="filter" id="sidebar-filter">
        {filterMenu}
      </section>
    </div>
  );
}
