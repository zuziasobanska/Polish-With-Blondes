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
  date: string;
  id: number;
};

export type Quarter = {
  start: string;
  isTaken: boolean;
  id: number;
  dayId: number;
};

export type SelectedType = {
  quarterId: number;
  start: Date;
  chosenDate: string;
  nextQuarterId: number;
  thirdQuarterId: number;
};
