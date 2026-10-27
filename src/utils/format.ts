import type { Weekday } from '../types';

const MONTHS = [
  'janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin',
  'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.',
];

// "2026-10-28" -> "28 oct. 2026"
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split('-').map(Number);
  return `${day} ${MONTHS[month - 1]} ${year}`;
}

// Renvoie le jour de cours d'aujourd'hui, ou null le week-end.
export function getTodayWeekday(): Weekday | null {
  const days: (Weekday | null)[] = [null, 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', null];
  return days[new Date().getDay()];
}
