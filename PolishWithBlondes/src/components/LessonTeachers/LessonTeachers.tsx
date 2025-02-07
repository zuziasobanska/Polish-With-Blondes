import { LessonTeacher } from "../LessonTeacher/LessonTeacher";
import { TEACHERS } from "../../data";
import './LessonTeachers.scss'


const LessonTeachers = () => {
  return (
    <div className="teachers-container">
 {TEACHERS.map((teacher) => <LessonTeacher  title={teacher.name} description={teacher.lessonDescription} pic={teacher.img} />)}
    </div>
    )
};

export default LessonTeachers;
