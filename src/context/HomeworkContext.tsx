import { createContext, useContext, useState, type ReactNode } from 'react';

type HomeworkContextValue = {
  isDone: (id: string) => boolean;
  toggle: (id: string) => void;
};

const HomeworkContext = createContext<HomeworkContextValue | null>(null);

export function HomeworkProvider({ children }: { children: ReactNode }) {
  const [doneIds, setDoneIds] = useState<string[]>([]);

  const value: HomeworkContextValue = {
    isDone: (id) => doneIds.includes(id),
    toggle: (id) =>
      setDoneIds((prev) =>
        prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id],
      ),
  };

  return <HomeworkContext.Provider value={value}>{children}</HomeworkContext.Provider>;
}

export function useHomework(): HomeworkContextValue {
  const ctx = useContext(HomeworkContext);
  if (!ctx) throw new Error('useHomework doit être utilisé dans <HomeworkProvider>');
  return ctx;
}
