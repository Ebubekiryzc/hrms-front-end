import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import JobService from "../../services/JobService";
import EYItem from "../../utilities/customComponents/EYItem/EYItem";
import JobOffers from "../../assets/Jobs.svg";
import "./Jobs.css";

export default function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    let jobService = new JobService();
    jobService.getAll().then((result) => setJobs(result.data.data));
  }, []);

  return (
    <div className="jobs-overlay">
      <section className="jobs d-flex align-items-center">
        <Container>
          <div className="jobs-page-header">
            <Row className="align-items-center">
              <Col md="7">
                <div className="jobs-text">
                  <h1>Find in your profession</h1>
                  <p>
                    Choose your profession and view all job postings in your
                    field.
                  </p>
                </div>
              </Col>
              <Col md="5" className="text-center">
                <div className="jobs-img">
                  <div className="circle" />
                  <img src={JobOffers} className="image" alt="" />
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>

      <section className="job-categories section-padding">
        <Container>
          <Row className="align-items-center">
            {jobs.map((job) => (
                <Col sm="6" key={job.id}>
                  <EYItem
                    className={`job-card item-style-${job.id % 5}`}
                    spanText={job.name}
                  />
                </Col>
            ))}
          </Row>
        </Container>
      </section>
    </div>
  );
}
