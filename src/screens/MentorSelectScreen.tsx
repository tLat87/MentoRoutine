import React from 'react';
import { Image, Text, View } from 'react-native';
import { mentors } from '../data';
import { useApp } from '../context';
import { Button, Card, ScreenContainer, ScrollArea, LargeTitle, BackButton, PhotoPanel } from '../ui';

type NavProps = { navigate: (name: any, params?: any) => void; goBack: () => void; params?: any };

export const MentorSelectScreen: React.FC<NavProps> = ({ navigate, goBack }) => {
  const { selectMentorForToday, selectedMentorId } = useApp();
  return (
    <ScreenContainer>
      <BackButton onPress={goBack} />
      <ScrollArea>
        <View style={{ alignItems: 'center', paddingTop: 40 }}>
          <LargeTitle>CHOOSE YOUR MENTOR:</LargeTitle>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', marginVertical: 20, paddingHorizontal: 20 }}>
            {mentors.map((m, index) => (
              <View key={m.id} style={{ width: '45%', alignItems: 'center', margin: 8 }}>
                <PhotoPanel source={require('../assets/img/bgM.png')} style={{ width: 150, height: 150, borderRadius: 8, overflow: 'hidden' }} >
                  <View style={{ borderColor: selectedMentorId === m.id ? '#00FF00' : '#8B0000', borderWidth: 3, borderRadius: 8 }}>
                    <Card variant="mentor" onPress={() => selectMentorForToday(m.id)}>
                      {(() => {
                        const src: any = typeof m.avatar === 'string' ? { uri: m.avatar } : m.avatar;
                        return <Image source={src} style={{ width: 100, height: 120, alignSelf: 'center', marginBottom: -35 }} />;
                      })()}
                    </Card>
                  </View>
                </PhotoPanel>
              </View>
            ))}
          </View>
          <Button title="START" onPress={() => navigate('Home')} variant="large" />
        </View>
      </ScrollArea>
    </ScreenContainer>
  );
};


