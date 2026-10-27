export type Weekday = 'Lun' | 'Mar' | 'Mer' | 'Jeu' | 'Ven';
export const WEEKDAYS: Weekday[] = ['Lun', 'Mar', 'Mer', 'Jeu', 'Ven'];

export type Student = {
  firstName: string;
  lastName: string;
  className: string;
  school: string;
  studentNumber: string;
};

export type Subject = {
  id: string;
  name: string;
  teacher: string;
  color: string;
  coefficient: number;
};

export type Grade = {
  id: string;
  subjectId: string;
  title: string;
  score: number;
  outOf: number;
  date: string; // AAAA-MM-JJ
};

export type Lesson = {
  id: string;
  subjectId: string;
  day: Weekday;
  start: string; // HH:MM
  end: string;
  room: string;
};

export type Homework = {
  id: string;
  subjectId: string;
  title: string;
  description: string;
  dueDate: string; // AAAA-MM-JJ
};

export type Announcement = {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'info' | 'event' | 'urgent';
};
