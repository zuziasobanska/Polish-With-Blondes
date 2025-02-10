import React from "react";
import './AboutMe.scss'

interface AboutMeProps {
    title: string,
    description: string,
    pic: string;
}



export const AboutMe: React.FC<AboutMeProps> = ({title, description, pic}) => {

  return (
      <div className="about-me-container">
        <div className="about-me">
          <h1 className="about-me-title">
            <p>{title}</p>
            <hr className="about-me-line"></hr>
          </h1>
          <h3 className="about-me-description">{description}
          </h3>
        </div>
        <div className="about-me-pic-container">
          <img src={pic} className="about-me-pic" />
        </div>
      </div>
  );
};
