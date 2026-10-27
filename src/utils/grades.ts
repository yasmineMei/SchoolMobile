import type { Grade, Subject } from '../types';

// Ramène une note sur 20.
export const toTwenty = (g: Grade): number => (g.score / g.outOf) * 20;

export function subjectAverage(grades: Grade[], subjectId: string): number | null {
  const list = grades.filter((g) => g.subjectId === subjectId);
  if (list.length === 0) return null;
  return list.reduce((sum, g) => sum + toTwenty(g), 0) / list.length;
}

// Moyenne générale pondérée par les coefficients.
export function overallAverage(grades: Grade[], subjects: Subject[]): number | null {
  let total = 0;
  let weights = 0;
  for (const s of subjects) {
    const avg = subjectAverage(grades, s.id);
    if (avg === null) continue;
    total += avg * s.coefficient;
    weights += s.coefficient;
  }
  return weights === 0 ? null : total / weights;
}

export const formatAverage = (value: number | null): string =>
  value === null ? '—' : value.toFixed(2).replace('.', ',');
