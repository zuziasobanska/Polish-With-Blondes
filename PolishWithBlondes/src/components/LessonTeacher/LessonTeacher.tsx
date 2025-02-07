import './LessonTeacher.scss'

interface LessonTeacherProps {
    title: string,
    description: string,
    pic: string;
}



export const LessonTeacher: React.FC<LessonTeacherProps> = ({title, description, pic}) => {

  return (
      <div className="teacher-container">
        <div className="teacher">
          <h1 className="teacher-title">
            <p>{title}</p>
            <hr className="teacher-line"></hr>
          </h1>
          <h3 className="teacher-description">{description}
          </h3>
        </div>
        <div className="teacher-pic-container">
          <img src={pic} className="teacher-pic" />
        </div>
      </div>
  );
};
