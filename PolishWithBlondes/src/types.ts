export type TeacherName = 'Kasia' | 'Iza' | 'Zuzia';

export type Teacher = {
  name: TeacherName;
  img: string;
  description: string;
  email: string;
  lessonDescription: string;
};

export type AvailableDay = {
  teacherName: TeacherName;
  date: Date;
  quarters: Quarter[];
};

export type Quarter = {
  start: Date;
  isTaken: boolean;
};
