import React from "react";
import job_img1 from "../Assests/icons/cargurus.jpg";
import job_img2 from "../Assests/icons/akamai.jpg";
import job_img3 from "../Assests/icons/nok-nok.jpg";
import job_img4 from "../Assests/icons/nokia.jpg";
import job_img5 from "../Assests/icons/wayfair.jpg";
import imgslider1 from "../Assests/cargurus.jpg";
import imgslider2 from "../Assests/akamai.jpg";
import imgslider3 from "../Assests/nok-nok.jpg";
import imgslider4 from "../Assests/nokia.jpg";
import imgslider5 from "../Assests/wayfair.jpg";
import SlideImage from "./imageSlider";
import CardComponent from "../Card/CardComponent";
import "./home.css";

const Home = () => {
  let data = [
    {
      title: "Software developer Intern",
      imageUrl: job_img1,
      body: "Posted 2 weeks ago",
    },

    {
      title: "Business Analyst",
      imageUrl: job_img2,
      body: "Posted 4 weeks ago",
    },
    {
      title: "Data Analyst",
      imageUrl: job_img3,
      body: "Posted 3 days ago",
    },
    {
      title: "Data Scientist",
      imageUrl: job_img4,
      body: "Posted 30+ days ago",
    },
    {
      title: "Technical Support",
      imageUrl: job_img5,
      body: "Posted 14 weeks ago",
    },
  ];

  const slides = [
    { url: imgslider1, title: "beach" },
    { url: imgslider2, title: "boat" },
    { url: imgslider3, title: "forest" },
    { url: imgslider4, title: "city" },
    { url: imgslider5, title: "italy" },
  ];

  return (
    <div>
      <div>
        <div className="containerStyles">
          <SlideImage slides={slides} />
        </div>
      </div>
      <h1>Welcome to Job Portal</h1>
    </div>
  );
};

export default Home;
