import React  from "react";
import Carousel from "react-multi-carousel";
import { Card, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EYMultiCardCarousel({ props }) {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel
      draggable={true}
      responsive={responsive}
      minimumTouchDrag={80}
      autoPlay={true}
      autoPlaySpeed={10000}
      infinite={true}
      focusOnSelect={true}
      arrows={false}
      showDots={true}
      containerClass="featured-advertisement-carousel"
    >
      {/* {props.map((prop) => (
        <Card className="featured-item">
          <Card.Body>
            <Image
              src="https://avatars.githubusercontent.com/u/79103394?s=400&u=1680b8537e6709f6ac9b48978d6658a6f6390828&v=4"
              roundedCircle
            ></Image>
            <Card.Title>Naber</Card.Title>
            <Card.Text>
              selamkakljsdlkjmlkmlksdafmlkasdmflkasdnflkasmndşlfkmşlkasmdflşkmalşskdmflkşasdmflşkasd
            </Card.Text>
          </Card.Body>
        </Card>
      ))} */}

      <Card className="featured-item">
        <Card.Body>
          {
            //TODO: Buraya if kodu yazılacak, icon gönderdiğimde icon, img gönderdiğimde img div' i açılacak.
          }
          <Image
            src="https://avatars.githubusercontent.com/u/79103394?s=400&u=1680b8537e6709f6ac9b48978d6658a6f6390828&v=4"
            roundedCircle
          ></Image>
          <Card.Title>Naber</Card.Title>
          <Card.Text>selamk</Card.Text>
        </Card.Body>
      </Card>

      <Card className="featured-item">
        <Card.Body>
          <Image
            src="https://avatars.githubusercontent.com/u/79103394?s=400&u=1680b8537e6709f6ac9b48978d6658a6f6390828&v=4"
            roundedCircle
          ></Image>
          <Card.Title>Naber</Card.Title>
          <Card.Text>selamk</Card.Text>
        </Card.Body>
      </Card>

      <Card className="featured-item">
        <Card.Body>
          <Image
            src="https://avatars.githubusercontent.com/u/48068865?v=4"
            roundedCircle
          ></Image>
          <Card.Title>Naber</Card.Title>
          <Card.Text>selamk</Card.Text>
        </Card.Body>
      </Card>
    </Carousel>
  );
}
