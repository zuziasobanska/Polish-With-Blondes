// Here we define data used in the entire page that never change
import zuziaPic from '../src/assets/zuzia-aboutme.png';
import kasiaPic from '../src/assets/kasia-aboutme.png';

import { AvailableDay, Teacher } from './types';

export const KASIA: Teacher = {
  description:
    'I am a Polish native speaker with 7 years of experience teaching Polish to foreigners. I am also a professional language teacher and a university lecturer. I teach individuals as well as groups. I am into learning languages myself so I think I have a good understanding of other learners’ needs and difficulties. Apart from teaching, some of my passions include painting and glass fusing.',
  email: 'kasias1970@gmail.com',
  img: kasiaPic,
  name: 'Kasia',
  lessonDescription:
    'My lessons include easy grammar explanations and a lot of speaking practice. I prepare my own teaching materials which we can then use in class. I am into learning languages myself so I think I have a good understanding of other learners’ needs and difficulties. If you like, we can have purely conversational classes as well.',
};

export const ZUZIA: Teacher = {
  description:
    'Born in Warsaw, but grew up bilingual in Poland and the UK. I have also lived in Sweden, Spain, Italy, France and Argentina so I am used to communicating with people whose first language is not English. Apart from teaching languages, I have worked as a nutritionist and fashion model and am currently learning programming to become a front-end web dev. I have been teaching Polish and English for 3 years now.',
  email: 'zuzannasobanska97@gmail.com',
  img: zuziaPic,
  name: 'Zuzia',
  lessonDescription:
    'I only offer lessons based on conversation practice. I am curious about the world and  like to talk about all sorts of things, from travel, personal development and health to philosophy, food and relationships.',
};

export const IZA: Teacher = {
  description:
    'Hi! I have lived in Spain and Poland for most of my adult life, having grown up and studied in Poland and the UK, and been a language teacher for over a decade. These days I use English, Polish and Spanish on the daily and I teach all of them. I am a huge bachata dancing enthusiast, also love to draw and read and be close to the sea.',
  email: 'izaaaas95@gmail.com',
  img: zuziaPic,
  name: 'Iza',
  lessonDescription:
    'If you like, we can have purely conversational classes as well.',
};

export const TEACHERS: Teacher[] = [KASIA, IZA, ZUZIA];

export const API_KEY = import.meta.env.VITE_API_KEY;
export const PLAYLIST_ID = 'UUlGR6kVvAznpGs_50QlosLQ';
export const MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

// export const hardcodedHours = ['10:00 - 10:45', '11:00 - 11:45'];

export const hardcodedHours = ['10:00', '14:00'];

export const availability: AvailableDay[] = [
  {
    teacherName: 'Iza',
    start: new Date(2025, 2, 20, 13, 0),
    end: new Date(2025, 2, 20, 15, 0),
  },
  {
    teacherName: 'Kasia',
    start: new Date(2025, 2, 21, 10, 0),
    end: new Date(2025, 2, 21, 11, 0),
  },
  {
    teacherName: 'Zuzia',
    start: new Date(2025, 2, 22, 8, 0),
    end: new Date(2025, 2, 22, 15, 0),
  },
  {
    teacherName: 'Zuzia',
    start: new Date(2025, 2, 23, 10, 0),
    end: new Date(2025, 2, 23, 16, 0),
  },
  {
    teacherName: 'Zuzia',
    start: new Date(2025, 2, 23, 18, 0),
    end: new Date(2025, 2, 23, 20, 0),
  },
  {
    teacherName: 'Iza',
    start: new Date(2025, 2, 23, 13, 0),
    end: new Date(2025, 2, 20, 15, 0),
  },
];
