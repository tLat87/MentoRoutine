export type MentorId = 'uliss' | 'leon' | 'athena' | 'hermes' | 'kratos';

export type TrophyId = MentorId; // one per mentor

export type Task = {
  id: string;
  title: string;
  description: string;
  photoUri?: string;
  completed: boolean;
};

export type DailyMentorTasks = {
  mentorId: MentorId;
  dateIso: string; // YYYY-MM-DD
  tasks: Task[];
  trophyEarned: boolean;
};

export type Mentor = {
  id: MentorId;
  name: string;
  area: string;
  avatar: string; // require path or remote URL
  description?: string;
};

export type Trophy = {
  id: TrophyId;
  title: string;
  icon: string;
  achieved: boolean;
  achievedAt?: string;
};

export type AppState = {
  userName: string;
  musicEnabled: boolean;
  vibrationEnabled?: boolean;
  volume: number; // 0..1
  selectedMentorId?: MentorId;
  today?: DailyMentorTasks;
  trophies: Record<TrophyId, Trophy>;
  scrolls: DailyMentorTasks[]; // history of completed days
};

export const todayKeyFromDate = (d: Date) => d.toISOString().slice(0, 10);



