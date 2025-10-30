/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import React from 'react';
import { AppProvider, useApp } from './src/context';
import { Navigator } from './src/navigation';
import { HomeScreen, MentorSelectScreen, MentorsListScreen, WelcomeScreen, AboutScreen, OnboardingScreen, TasksScreen, ScrollsScreen, TrophiesScreen, SettingsScreen } from './src/screens';
import { BackgroundWrapper } from './src/ui';

function Root() {
  const isDarkMode = useColorScheme() === 'dark';
  // Замените require() на путь к вашему PNG файлу фона
  const backgroundImage = require('./src/assets/img/bg.png'); // Поместите ваш PNG файл в папку assets/
  
  return (
    <BackgroundWrapper backgroundImage={backgroundImage}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Navigator
        initial={{ name: 'Onboarding' }}
        screens={{
          Onboarding: OnboardingScreen,
          Welcome: WelcomeScreen,
          Home: HomeScreen,
          MentorSelect: MentorSelectScreen,
          Mentors: MentorsListScreen,
          Tasks: TasksScreen,
          Trophies: TrophiesScreen,
          Scrolls: ScrollsScreen,
          Settings: SettingsScreen,
          About: AboutScreen,
        }}
      />
    </BackgroundWrapper>
  );
}

function App() {
  return (
    <AppProvider>
      <Root />
    </AppProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
