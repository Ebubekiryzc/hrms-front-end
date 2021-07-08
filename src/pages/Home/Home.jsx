import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../layouts/Navi/Tools/SearchBar/SearchBar";
import EYMultiCardCarousel from "../../utilities/customComponents/EYMultiCardCarousel";
import EYItem from "../../utilities/customComponents/EYItem";
import Search from "../../assets/Search.svg";
import JobInterview from "../../assets/JobInterview.svg";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-overlay">
      <section className="home d-flex align-items-center">
        <div className="effect-wrap">
          <FontAwesomeIcon icon="plus" className="effect effect-1" />
          <FontAwesomeIcon icon="plus" className="effect effect-2" />
          <FontAwesomeIcon icon="circle-notch" className=" effect effect-3" />
        </div>
        <Container>
          <Row className="align-items-center">
            <Col md="7">
              <div className="home-text">
                <h1>Find your job in a super limited time.</h1>
                <p>
                  How about finding your dream job in minutes with your
                  well-prepared resume? <br />
                  With the help of our site, prepare your resume well and get
                  one step closer to your dream job, research companies in your
                  field and apply to many job postings for free.
                </p>
                <SearchBar
                  className="search"
                  placeholder="Search for a Job..."
                  buttonText="Find"
                />
              </div>
            </Col>
            <Col md="5" className="text-center">
              <div className="home-img">
                <div className="circle" />
                <img src={Search} className="image" alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="featured-advertisement section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="section-title">
                <h2>
                  Featured <span>Advertisements</span>
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <div className="featured-advertisement-carousel">
              <EYMultiCardCarousel />
            </div>
          </Row>
          <Row className="justify-content-center">
            <div className="browse-all-button">
              <Col md="12" className="text-center">
                <Button>Browse All</Button>
              </Col>
            </div>
          </Row>
        </Container>
      </section>

      <section className="featured-jobs section-padding">
        <Container>
          <Row>
            <Col
              lg="6"
              md="5"
              className="d-flex align-items-center justify-content-center"
            >
              <div className="featured-jobs-img">
                <img src={JobInterview} alt="" />
              </div>
            </Col>
            <Col lg="6" md="7">
              <div className="section-title">
                <h2>
                  Find in<span> Your Profession</span>
                </h2>
              </div>
              <div className="featured-jobs-text">
                <p>
                  If you think the business world needs you and your skills, why
                  not filter the job postings that suit you best? <br /> Take
                  the first step by choosing your professional field and apply
                  for free to the postings that you think are most suitable for
                  you.
                </p>
              </div>
              <Row className="align-items-center">
                <Col sm="6">
                  <EYItem
                    className="featured-jobs-item style-1"
                    h3Content={<FontAwesomeIcon icon="laptop-code" />}
                    spanText="Software Developer"
                  />
                </Col>
                <Col sm="6">
                  <EYItem
                    className="featured-jobs-item style-2"
                    h3Content={<FontAwesomeIcon icon="chart-line" />}
                    spanText="Analyst"
                  />
                </Col>
                <Col sm="6">
                  <EYItem
                    className="featured-jobs-item style-3"
                    h3Content={<FontAwesomeIcon icon="swimmer" />}
                    spanText="Sport"
                  />
                </Col>
                <Col sm="6">
                  <EYItem
                    className="featured-jobs-item style-4"
                    h3Content={<FontAwesomeIcon icon="utensils" />}
                    spanText="Food & Beverage"
                  />
                </Col>
                <Row className="align-items-center">
                  <Col className="d-flex justify-content-center">
                    <div className="browse-all-button">
                      <Button>Browse All</Button>
                    </div>
                  </Col>
                </Row>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="create-account-banner section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg="8">
              <div className="section-title">
                <h2>
                  Join
                  <span> the Bussiness</span>
                </h2>
              </div>
            </Col>
          </Row>
          <Row className="justify-content-center">
            <Col className="d-flex justify-content-center">
              <EYItem
                className="create-banner-item"
                h3Content="Create a Free Account Now"
                spanText="'Join the bussiness world and get job opportunities'"
              />
              <div className="effect-wrap">
                <FontAwesomeIcon icon="plus" className="effect effect-3" />
                <FontAwesomeIcon icon="plus" className="effect effect-1" />
                <FontAwesomeIcon
                  icon="circle-notch"
                  className=" effect effect-5"
                />
                <FontAwesomeIcon icon="plus" className="effect effect-4" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
