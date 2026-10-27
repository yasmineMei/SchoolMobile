import { useEffect, useState } from 'react';

// Renvoie la date courante et la met à jour à intervalle régulier,
// pour que l'écran (cours en cours, compte à rebours) reste à jour.
export function useNow(intervalMs = 30_000): Date {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  return now;
}
