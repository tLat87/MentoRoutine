import React, { useState } from 'react';
import { View } from 'react-native';

export type RouteName =
  | 'Onboarding'
  | 'Welcome'
  | 'Home'
  | 'MentorSelect'
  | 'Mentors'
  | 'Tasks'
  | 'Trophies'
  | 'Scrolls'
  | 'Settings'
  | 'About';

export type Nav = {
  name: RouteName;
  params?: any;
};

type NavigatorProps = {
  initial: Nav;
  screens: Record<RouteName, React.ComponentType<{ navigate: (name: RouteName, params?: any) => void; goBack: () => void; params?: any }>>;
};

export const Navigator: React.FC<NavigatorProps> = ({ initial, screens }) => {
  const [stack, setStack] = useState<Nav[]>([initial]);

  const navigate = (name: RouteName, params?: any) => setStack(prev => [...prev, { name, params }]);
  const goBack = () => setStack(prev => (prev.length > 1 ? prev.slice(0, -1) : prev));

  const current = stack[stack.length - 1];
  const ScreenComp = screens[current.name];
  return (
    <View style={{ flex: 1 }}>
      <ScreenComp navigate={navigate} goBack={goBack} params={current.params} />
    </View>
  );
};


