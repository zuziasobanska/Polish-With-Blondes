import './AboutMe.scss'

interface AboutMeProps {
    title: string,
    description: string,
    pic: string;
}



export const AboutMe: React.FC<AboutMeProps> = ({title, description, pic}) => {

  return (
      <div className="aboutme-container">
        <div className="aboutme">
          <h1 className="aboutme-title">
            <p>{title}</p>
            <hr className="aboutme-line"></hr>
          </h1>
          <h3 className="aboutme-description">{description}
          </h3>
        </div>
        <div className="aboutme-pic-container">
          <img src={pic} className="aboutme-pic" />
        </div>
      </div>
  );
};
