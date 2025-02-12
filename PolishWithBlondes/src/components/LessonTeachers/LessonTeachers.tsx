import { LessonTeacher } from "../LessonTeacher/LessonTeacher";
import { TEACHERS } from "../../data";
import './LessonTeachers.scss'


const LessonTeachers = () => {
  return (
    <div className="teachers-container">
 {TEACHERS.map((teacher, index) => <LessonTeacher  title={teacher.name} description={teacher.lessonDescription} pic={teacher.img} key={index} />)}
    </div>
    )
};

export default LessonTeachers;
