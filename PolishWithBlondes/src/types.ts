export type TeacherName = 'Kasia' | 'Iza' | 'Zuzia'; //string union

export type Teacher = {
  name: TeacherName;
  img: string;
  description: string;
  email: string;
  lessonDescription: string;
};

export type AvailableDay = { teacherName: TeacherName; start: Date; end: Date };
