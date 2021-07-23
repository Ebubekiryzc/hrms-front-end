import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../layouts/Navi/Tools/SearchBar/SearchBar";
import EYItem from "../../utilities/customComponents/EYItem/EYItem";
import AdvertisementFilter from "../../layouts/Tools/AdvertisementFilter";
import JobOffers from "../../assets/Advertisement.svg";
import JobAdvertisementService from "../../services/JobAdvertisementService";
import "./Advertisements.css";


export default function Advertisements() {
  const [advertisements, setAdvertisements] = useState([]);

  useEffect(() => {
    let advertisementService = new JobAdvertisementService();
    advertisementService
      .getAllActiveAdvertisements()
      .then((result) => setAdvertisements(result.data.data));
  }, []);

  return (
    <div>
      <section className="job-advertisements d-flex align-items-center">
        <div className="effect-wrap">
          <FontAwesomeIcon icon="plus" className="effect effect-3" />
          <FontAwesomeIcon icon="asterisk" className="effect effect-1" />
          <FontAwesomeIcon icon="circle-notch" className=" effect effect-5" />
        </div>
        <Container>
          <Row className="align-items-center">
            <Col md="7">
              <div className="job-advertisement-text">
                <h1>
                  Choose the one that <span>suits you best.</span>
                </h1>
                <p>
                  Check out all these job advertisements and don't hesitate to
                  apply to the ones you think are most suitable for you!
                </p>
                <SearchBar
                  className="search"
                  placeholder="Search for a Job..."
                  buttonText="Find"
                />
              </div>
            </Col>
            <Col md="5" className="text-center">
              <div className="advertisements-image">
                <div className="circle" />
                <img src={JobOffers} alt="" />
              </div>
            </Col>
          </Row>
          <div className="wave">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
            >
              <path
                d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
                className="shape-fill"
              ></path>
            </svg>
          </div>
        </Container>
      </section>
      <section className="advertisements section-padding">
        <AdvertisementFilter />
      </section>
    </div>
  );
}
