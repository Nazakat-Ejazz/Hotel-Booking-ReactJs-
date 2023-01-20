import { useState } from "react";

import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";

import "./hotel.css";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707778.jpg?k=56ba0babbcbbfeb3d3e911728831dcbc390ed2cb16c51d88159f82bf751d04c6&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707367.jpg?k=cbacfdeb8404af56a1a94812575d96f6b80f6740fd491d02c6fc3912a16d8757&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708745.jpg?k=1aae4678d645c63e0d90cdae8127b15f1e3232d4739bdf387a6578dc3b14bdfd&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707776.jpg?k=054bb3e27c9e58d3bb1110349eb5e6e24dacd53fbb0316b9e2519b2bf3c520ae&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261708693.jpg?k=ea210b4fa329fe302eab55dd9818c0571afba2abd2225ca3a36457f9afa74e94&o=&hp=1",
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/max1280x900/261707389.jpg?k=52156673f9eb6d5d99d3eed9386491a0465ce6f3b995f005ac71abc192dd5827&o=&hp=1",
    },
  ];

  const handleArrowClick = function (direction) {
    let newSlide;
    if (direction === "l") {
      newSlide = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlide = slideNumber === 5 ? 0 : slideNumber + 1;
    }
    setSlideNumber(newSlide);
  };
  const handleImgClick = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div
        className="hotelContainer"
        onClick={() => {
          if (open === true) {
            setOpen(false);
          }
        }}
      >
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleArrowClick("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleArrowClick("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Book Now !</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Elton St 124 New York</span>
          </div>

          <div className="hotelDistance">
            <span>Excellent location - 500m from center</span>
          </div>

          <div className="hotelPriceHighlight">
            <span>
              Book a stay over $114 at this property and get a free airport taxi
            </span>
            <div className="hotelImages">
              {photos.map((photo, i) => (
                <div className="hotelImgWrapper">
                  <img
                    src={photo.src}
                    alt=""
                    key={i}
                    onClick={() => handleImgClick(i)}
                    className="hotelImg"
                  />
                </div>
              ))}
            </div>
            <div className="hotelDetails">
              <div className="hotelDetailsText">
                <h1 className="hotelDetailsTitle">
                  Stay in the heart of NY City.
                </h1>
                <p className="hotelDesc">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Ducimus atque unde necessitatibus labore repudiandae obcaecati
                  esse similique dicta qui deleniti autem repellendus
                  perspiciatis sed illo, voluptatem cumque expedita provident
                  amet est id harum consequatur! Illum ratione asperiores a
                  perferendis voluptates, aliquam praesentium deserunt iste. Qui
                  nulla beatae modi ipsam architecto, soluta illo iusto
                  assumenda eveniet reiciendis autem, iure exercitationem et.
                </p>
              </div>
              <div className="hotelDetailsPrice">
                <h1>Perfect for a 9-night stay!</h1>
                <span>
                  Located in the real heart of NY City,this property has an
                  excellent score of 9.3!
                </span>

                <h2>
                  <b>1945</b>(9 nights)
                </h2>
                <button>Reserve or Book Now!</button>
              </div>
            </div>
          </div>
          <MailList />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Hotel;
