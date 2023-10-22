import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import { sliderItems } from "../data";
import "./slider.css"; // Import the CSS file
import i1 from "../images/1.png"

const Slider = () => {
   const sliderItems = [
    {
      id: 1,
      img: require("../images/1.png"),
      bg: "d7e8ea",
      className: "first-image"
    },
    {
      id: 2,
      img: require("../images/2.png"),
      bg: "d7e8ea",
      className: "second-image"
    },
    {
      id: 3,
      img: require("../images/3.png"),
      bg: "d7e8ea",
      className: "third-image"
    },
  
    {
      id: 4,
      img: require("../images/4.png"),
      bg: "d7e8ea",
      className: "fourth-image"
    },
    {
      id: 5,
      img: require("../images/5.png"),
      bg: "d7e8ea",
      className: "fifth-image"
    },
    {
      id: 6,
      img: require("../images/6.png"), 
      bg: "d7e8ea",
      className: "sixth-image"
    },    
  ];
  
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    console.log('This is not', slideIndex);
    if (direction === "left") {
      console.log('This is', sliderItems);
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % sliderItems.length);
    }, 5000); // 5000 milliseconds = 5 seconds

    return () => {
      clearInterval(slideInterval);
    };
  }, []);


  return (
    <div className="container">
    <div className="arrow left" onClick={() => handleClick("left")}>
      <ArrowLeftOutlined />
    </div>
    <div className="wrapper" style={{ transform: `translateX(-${slideIndex * 100}vw)` }}>
      {sliderItems.map((item) => (
        <div className={`slide ${item.className}`} key={item.id} style={{ backgroundColor: `#${item.bg}` }}>
          <div className="imgContainer">
            <img className={`image ${item.className}`} src={item.img} alt={item.title} />
       
          </div>

          </div>
        ))}
      </div>
      <div className="arrow right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined />
      </div>
    </div>
  );
};

export default Slider;
