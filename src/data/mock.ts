import type {
    Announcement,
    Grade,
    Homework,
    Lesson,
    Student,
    Subject,
} from '@/types';

export const student: Student = {
    firstName: 'John',
    lastName: 'Doe',
    className: '3eme A',
    school: 'Lycée Jean Moulin',
    studentNumber: '2026-1243',
}

export const subjects: Subject[] = [
  { id: 'maths', name: 'Mathématiques', teacher: 'M. Diallo', color: '#2563eb', coefficient: 4 },
  { id: 'francais', name: 'Français', teacher: 'Mme Traoré', color: '#db2777', coefficient: 4 },
  { id: 'hg', name: 'Histoire-Géographie', teacher: 'M. Bamba', color: '#d97706', coefficient: 3 },
  { id: 'svt', name: 'SVT', teacher: 'Mme Yao', color: '#16a34a', coefficient: 2 },
  { id: 'anglais', name: 'Anglais', teacher: 'Mr Brown', color: '#7c3aed', coefficient: 2 },
];

export const grades: Grade[] = [
  { id: 'g1', subjectId: 'maths', title: 'Contrôle : fonctions', score: 14, outOf: 20, date: '2026-10-05' },
  { id: 'g2', subjectId: 'maths', title: 'Devoir maison', score: 17, outOf: 20, date: '2026-10-12' },
  { id: 'g3', subjectId: 'francais', title: 'Dictée', score: 8, outOf: 10, date: '2026-10-07' },
  { id: 'g4', subjectId: 'francais', title: 'Rédaction', score: 12, outOf: 20, date: '2026-10-15' },
  { id: 'g5', subjectId: 'hg', title: 'Interrogation : guerres mondiales', score: 13, outOf: 20, date: '2026-10-09' },
  { id: 'g6', subjectId: 'svt', title: 'TP : la cellule', score: 15, outOf: 20, date: '2026-10-10' },
  { id: 'g7', subjectId: 'svt', title: 'Contrôle : génétique', score: 9, outOf: 20, date: '2026-10-19' },
  { id: 'g8', subjectId: 'anglais', title: 'Oral', score: 16, outOf: 20, date: '2026-10-14' },
  { id: 'g9', subjectId: 'anglais', title: 'Vocabulaire', score: 7, outOf: 10, date: '2026-10-21' },
];

export const lessons: Lesson[] = [
  { id: 'l1', subjectId: 'maths', day: 'Lun', start: '08:00', end: '09:00', room: 'B12' },
  { id: 'l2', subjectId: 'francais', day: 'Lun', start: '09:00', end: '10:00', room: 'B12' },
  { id: 'l3', subjectId: 'hg', day: 'Lun', start: '10:15', end: '11:15', room: 'A03' },
  { id: 'l4', subjectId: 'anglais', day: 'Lun', start: '11:15', end: '12:15', room: 'A07' },
  { id: 'l5', subjectId: 'svt', day: 'Mar', start: '08:00', end: '09:00', room: 'Labo' },
  { id: 'l6', subjectId: 'maths', day: 'Mar', start: '09:00', end: '10:00', room: 'B12' },
  { id: 'l7', subjectId: 'francais', day: 'Mar', start: '10:15', end: '11:15', room: 'B12' },
  { id: 'l8', subjectId: 'anglais', day: 'Mar', start: '11:15', end: '12:15', room: 'A07' },
  { id: 'l9', subjectId: 'maths', day: 'Mer', start: '08:00', end: '09:00', room: 'B12' },
  { id: 'l10', subjectId: 'hg', day: 'Mer', start: '09:00', end: '10:00', room: 'A03' },
  { id: 'l11', subjectId: 'svt', day: 'Mer', start: '10:15', end: '11:15', room: 'Labo' },
  { id: 'l12', subjectId: 'francais', day: 'Jeu', start: '08:00', end: '09:00', room: 'B12' },
  { id: 'l13', subjectId: 'anglais', day: 'Jeu', start: '09:00', end: '10:00', room: 'A07' },
  { id: 'l14', subjectId: 'maths', day: 'Jeu', start: '10:15', end: '11:15', room: 'B12' },
  { id: 'l15', subjectId: 'hg', day: 'Jeu', start: '11:15', end: '12:15', room: 'A03' },
  { id: 'l16', subjectId: 'svt', day: 'Ven', start: '08:00', end: '09:00', room: 'Labo' },
  { id: 'l17', subjectId: 'francais', day: 'Ven', start: '09:00', end: '10:00', room: 'B12' },
  { id: 'l18', subjectId: 'maths', day: 'Ven', start: '10:15', end: '11:15', room: 'B12' },
  { id: 'l19', subjectId: 'anglais', day: 'Ven', start: '11:15', end: '12:15', room: 'A07' },
];

export const homework: Homework[] = [
  {
    id: 'h1',
    subjectId: 'maths',
    title: 'Exercices 4 à 9 p. 112',
    description: 'Résoudre les exercices sur les équations du second degré. Détailler chaque étape du calcul.',
    dueDate: '2026-10-28',
  },
  {
    id: 'h2',
    subjectId: 'francais',
    title: 'Lire le chapitre 3',
    description: 'Lire le chapitre 3 du roman étudié et préparer trois questions pour la discussion en classe.',
    dueDate: '2026-10-29',
  },
  {
    id: 'h3',
    subjectId: 'anglais',
    title: 'Préparer une présentation orale',
    description: 'Présenter votre ville en 2 minutes, en anglais. Utiliser au moins 10 mots de vocabulaire de la leçon.',
    dueDate: '2026-10-30',
  },
  {
    id: 'h4',
    subjectId: 'svt',
    title: 'Compte rendu du TP',
    description: 'Rédiger le compte rendu du TP sur la cellule, avec schéma légendé.',
    dueDate: '2026-11-03',
  },
  {
    id: 'h5',
    subjectId: 'hg',
    title: 'Fiche de révision',
    description: 'Faire une fiche de révision sur les causes de la Première Guerre mondiale.',
    dueDate: '2026-11-05',
  },
];

export const announcements: Announcement[] = [
  {
    id: 'a1',
    title: 'Réunion parents-professeurs',
    content:
      "La réunion parents-professeurs aura lieu le samedi 7 novembre à partir de 9h dans la salle polyvalente. Un créneau de 10 minutes par famille. L'inscription se fait auprès de la vie scolaire.",
    date: '2026-10-24',
    category: 'event',
  },
  {
    id: 'a2',
    title: 'Fermeture exceptionnelle de la cantine',
    content:
      "La cantine sera fermée jeudi pour travaux. Les élèves demi-pensionnaires devront apporter un repas froid. Un service de remplacement sera proposé à partir de la semaine suivante.",
    date: '2026-10-23',
    category: 'urgent',
  },
  {
    id: 'a3',
    title: 'Inscriptions aux clubs',
    content:
      "Les inscriptions aux clubs (théâtre, robotique, football, échecs) sont ouvertes jusqu'au 15 novembre. Rendez-vous au bureau de la vie scolaire.",
    date: '2026-10-20',
    category: 'info',
  },
  {
    id: 'a4',
    title: 'Sortie pédagogique au musée',
    content:
      "Les classes de 3e se rendront au musée le 12 novembre. Prévoir une tenue adaptée et un pique-nique. L'autorisation signée est à rendre avant le 5 novembre.",
    date: '2026-10-18',
    category: 'event',
  },
];

export const getSubject = (id: string): Subject | undefined =>
  subjects.find((s) => s.id === id);
