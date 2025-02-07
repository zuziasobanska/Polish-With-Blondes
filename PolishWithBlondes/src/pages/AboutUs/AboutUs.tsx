import { AboutMe } from "../../components/AboutMe/AboutMe";
import { TEACHERS } from "../../data";


const AboutUs = () => {
  return (
    <div className="aboutus-container">{TEACHERS.map((teacher) => <AboutMe  title={teacher.name} description={teacher.description} pic={teacher.img} />)}
    </div>
    )
};

export default AboutUs;
