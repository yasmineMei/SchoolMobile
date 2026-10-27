import type { Lesson, Weekday } from '../types';

const WEEKDAY_BY_INDEX: (Weekday | null)[] = [null, 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', null];
const DAY_NAMES = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
const MONTH_NAMES = [
  'janvier', 'février', 'mars', 'avril', 'mai', 'juin',
  'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre',
];

export const capitalize = (s: string): string => s.charAt(0).toUpperCase() + s.slice(1);

// "08:30" -> 510
export function toMinutes(hhmm: string): number {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
}

export const minutesOfDay = (d: Date): number => d.getHours() * 60 + d.getMinutes();

// Jour de cours correspondant à une date (null le week-end).
export const weekdayOf = (d: Date): Weekday | null => WEEKDAY_BY_INDEX[d.getDay()];

// "mardi 27 octobre"
export const formatLongDate = (d: Date): string =>
  `${DAY_NAMES[d.getDay()]} ${d.getDate()} ${MONTH_NAMES[d.getMonth()]}`;

// 75 -> "1 h 15", 20 -> "20 min"
export function formatDuration(totalMinutes: number): string {
  const m = Math.max(0, Math.round(totalMinutes));
  if (m < 60) return `${m} min`;
  const h = Math.floor(m / 60);
  const rest = m % 60;
  return rest === 0 ? `${h} h` : `${h} h ${String(rest).padStart(2, '0')}`;
}

export function lessonsOfDay(lessons: Lesson[], day: Weekday | null): Lesson[] {
  if (!day) return [];
  return lessons
    .filter((l) => l.day === day)
    .sort((a, b) => toMinutes(a.start) - toMinutes(b.start));
}

export type LessonStatus = 'done' | 'ongoing' | 'upcoming';

// Statut d'un cours d'AUJOURD'HUI par rapport à l'heure actuelle.
export function lessonStatus(lesson: Lesson, now: Date): LessonStatus {
  const n = minutesOfDay(now);
  if (n >= toMinutes(lesson.end)) return 'done';
  if (n >= toMinutes(lesson.start)) return 'ongoing';
  return 'upcoming';
}

export type NextLesson = {
  lesson: Lesson;
  status: 'ongoing' | 'upcoming';
  dayOffset: number; // 0 = aujourd'hui, 1 = demain...
  minutes: number; // minutes restantes (en cours) ou avant le début (aujourd'hui)
  progress: number; // 0..1, avancement du cours en cours
};

// Cherche le cours en cours, sinon le prochain (jusqu'à 7 jours plus tard).
export function getNextLesson(lessons: Lesson[], now: Date): NextLesson | null {
  const n = minutesOfDay(now);

  for (let offset = 0; offset <= 7; offset++) {
    const date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offset);

    for (const lesson of lessonsOfDay(lessons, weekdayOf(date))) {
      const start = toMinutes(lesson.start);
      const end = toMinutes(lesson.end);

      if (offset === 0) {
        if (n >= end) continue; // déjà terminé
        if (n >= start) {
          return {
            lesson,
            status: 'ongoing',
            dayOffset: 0,
            minutes: end - n,
            progress: (n - start) / (end - start),
          };
        }
        return { lesson, status: 'upcoming', dayOffset: 0, minutes: start - n, progress: 0 };
      }

      return { lesson, status: 'upcoming', dayOffset: offset, minutes: 0, progress: 0 };
    }
  }
  return null;
}

// 0 -> "Aujourd'hui", 1 -> "Demain", 3 -> "Vendredi"
export function relativeDayLabel(offset: number, now: Date): string {
  if (offset === 0) return "Aujourd'hui";
  if (offset === 1) return 'Demain';
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + offset);
  return capitalize(DAY_NAMES[d.getDay()]);
}

// Nombre de jours entre aujourd'hui et une date AAAA-MM-JJ (négatif si passée).
export function daysUntil(iso: string, now: Date): number {
  const [y, m, d] = iso.split('-').map(Number);
  const due = new Date(y, m - 1, d).getTime();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  return Math.round((due - today) / 86_400_000);
}

export function dueLabel(days: number): string {
  if (days < 0) return 'En retard';
  if (days === 0) return "Aujourd'hui";
  if (days === 1) return 'Demain';
  return `Dans ${days} jours`;
}
