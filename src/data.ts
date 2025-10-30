import { Mentor, MentorId, Task, Trophy } from './models';

export const mentors: Mentor[] = [
  { 
    id: 'uliss', 
    name: 'ULISS', 
    area: 'Discipline and Endurance', 
    avatar: require('../src/assets/img/men/1.png'),
    description: 'The wise traveler who teaches discipline and endurance through daily challenges.'
  },
  { 
    id: 'leon', 
    name: 'LEON', 
    area: 'Action and Courage', 
    avatar: require('../src/assets/img/men/2.png'),
    description: 'The brave warrior who inspires action and courage in every task.'
  },
  { 
    id: 'athena', 
    name: 'ATHENA', 
    area: 'Wisdom and Planning', 
    avatar: require('../src/assets/img/men/3.png'),
    description: 'The goddess of wisdom who guides strategic thinking and planning.'
  },
  { 
    id: 'hermes', 
    name: 'HERMES', 
    area: 'Speed and Communication', 
    avatar: require('../src/assets/img/men/4.png'),
    description: 'The swift messenger who teaches effective communication and quick action.'
  },
  { 
    id: 'kratos', 
    name: 'KRATOS', 
    area: 'Power and Focus', 
    avatar: require('../src/assets/img/men/5.png'),
    description: 'The embodiment of strength who builds power and unwavering focus.'
  },
];

export const defaultTrophies = (): Record<MentorId, Trophy> => ({
  uliss: { id: 'uliss', title: 'Uliss Trophy', icon: 'trophy_uliss', achieved: false },
  leon: { id: 'leon', title: 'Leon Trophy', icon: 'trophy_leon', achieved: false },
  athena: { id: 'athena', title: 'Athena Trophy', icon: 'trophy_athena', achieved: false },
  hermes: { id: 'hermes', title: 'Hermes Trophy', icon: 'trophy_hermes', achieved: false },
  kratos: { id: 'kratos', title: 'Kratos Trophy', icon: 'trophy_kratos', achieved: false },
});

export const generateTasksForMentor = (mentorId: MentorId): Task[] => {
  // Simple static templates by mentor
  const templates: Record<MentorId, Array<{ title: string; description: string }>> = {
    uliss: [
      { title: 'TASK 1', description: 'Take a photo of your morning — sunrise, coffee, or first step.' },
      { title: 'TASK 2', description: 'Write 3 short goals for today.' },
      { title: 'TASK 3', description: 'Do 10 push-ups or 1 minute plank.' },
    ],
    leon: [
      { title: 'TASK 1', description: 'Take a brisk 10-minute walk. Photo of start/end.' },
      { title: 'TASK 2', description: 'Do a small courageous act today.' },
      { title: 'TASK 3', description: 'Reflect: one action you’ve been delaying.' },
    ],
    athena: [
      { title: 'TASK 1', description: 'Plan your top 3 priorities for the day.' },
      { title: 'TASK 2', description: 'Read 5 pages or an article.' },
      { title: 'TASK 3', description: 'Capture one insight with a photo or note.' },
    ],
    hermes: [
      { title: 'TASK 1', description: 'Send a supportive message to a friend.' },
      { title: 'TASK 2', description: 'Clear one small inbox or chat thread.' },
      { title: 'TASK 3', description: 'Take a photo of something that made you smile.' },
    ],
    kratos: [
      { title: 'TASK 1', description: 'Do a focused 15-minute work sprint.' },
      { title: 'TASK 2', description: 'Remove one distraction from your desk.' },
      { title: 'TASK 3', description: 'Capture your progress with a photo.' },
    ],
  };

  return templates[mentorId].map((t, idx) => ({
    id: `${mentorId}-${idx + 1}`,
    title: t.title,
    description: t.description,
    completed: false,
  }));
};



