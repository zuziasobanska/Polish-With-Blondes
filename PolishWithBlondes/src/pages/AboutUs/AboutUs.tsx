import { AboutMe } from '../../components/AboutMe/AboutMe';
import { TEACHERS } from '../../data';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      {TEACHERS.map((teacher, index) => (
        <AboutMe
          title={teacher.name}
          description={teacher.description}
          pic={teacher.img}
          key={index}
        />
      ))}
    </div>
  );
};

export default AboutUs;
