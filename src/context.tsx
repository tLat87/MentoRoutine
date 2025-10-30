import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { AppState, DailyMentorTasks, MentorId, Task } from './models';
import { generateTasksForMentor } from './data';
import { loadState, saveState, resetState } from './storage';

type AppContextValue = AppState & {
  initialized: boolean;
  selectMentorForToday: (mentorId: MentorId) => void;
  completeTask: (taskId: string, photoUri?: string) => void;
  setUserName: (name: string) => void;
  setMusicEnabled: (v: boolean) => void;
  setVibrationEnabled: (v: boolean) => void;
  setVolume: (v: number) => void;
  grantTrophyIfEligible: () => void;
  resetAll: () => Promise<void>;
};

const Ctx = createContext<AppContextValue | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<AppState | null>(null);

  useEffect(() => {
    loadState().then(setState);
  }, []);

  useEffect(() => {
    if (state) saveState(state);
  }, [state]);

  const selectMentorForToday = useCallback((mentorId: MentorId) => {
    setState(prev => {
      if (!prev) return prev;
      const today: DailyMentorTasks = {
        mentorId,
        dateIso: new Date().toISOString().slice(0, 10),
        tasks: generateTasksForMentor(mentorId),
        trophyEarned: false,
      };
      return { ...prev, selectedMentorId: mentorId, today };
    });
  }, []);

  const completeTask = useCallback((taskId: string, photoUri?: string) => {
    setState(prev => {
      if (!prev || !prev.today) return prev;
      const updatedTasks: Task[] = prev.today.tasks.map(t =>
        t.id === taskId ? { ...t, completed: true, photoUri: photoUri ?? t.photoUri } : t,
      );
      return { ...prev, today: { ...prev.today, tasks: updatedTasks } };
    });
  }, []);

  const grantTrophyIfEligible = useCallback(() => {
    setState(prev => {
      if (!prev || !prev.today) return prev;
      const allDone = prev.today.tasks.every(t => t.completed);
      if (!allDone || prev.today.trophyEarned !== false) return prev;
      const mentorId = prev.today.mentorId;
      const trophies = { ...prev.trophies };
      trophies[mentorId] = {
        ...trophies[mentorId],
        achieved: true,
        achievedAt: new Date().toISOString(),
      };
      return { ...prev, trophies, today: { ...prev.today, trophyEarned: true } };
    });
  }, []);

  const setUserName = useCallback((name: string) => setState(prev => (prev ? { ...prev, userName: name } : prev)), []);
  const setMusicEnabled = useCallback((v: boolean) => setState(prev => (prev ? { ...prev, musicEnabled: v } : prev)), []);
  const setVibrationEnabled = useCallback((v: boolean) => setState(prev => (prev ? { ...prev, vibrationEnabled: v } : prev)), []);
  const setVolume = useCallback((v: number) => setState(prev => (prev ? { ...prev, volume: v } : prev)), []);

  const resetAll = useCallback(async () => {
    await resetState();
    setState(await loadState());
  }, []);

  const value = useMemo<AppContextValue | undefined>(() => {
    if (!state) return undefined;
    return {
      ...state,
      initialized: true,
      selectMentorForToday,
      completeTask,
      setUserName,
      setMusicEnabled,
      setVibrationEnabled,
      setVolume,
      grantTrophyIfEligible,
      resetAll,
    };
  }, [state, selectMentorForToday, completeTask, setUserName, setMusicEnabled, setVibrationEnabled, setVolume, grantTrophyIfEligible, resetAll]);

  if (!value) return null;
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
};

export const useApp = () => {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
};



