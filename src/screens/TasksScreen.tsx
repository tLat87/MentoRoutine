import React, { useState } from 'react';
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { useApp } from '../context';
import { mentors } from '../data';
import { Button, Card, ScreenContainer, ScrollArea, Title, BackButton, PhotoPanel, FramedPanel } from '../ui';

type NavProps = { navigate: (name: any, params?: any) => void; goBack: () => void; params?: any };

const TaskItem: React.FC<{ 
  id: string; 
  title: string; 
  description: string; 
  completed: boolean; 
  photoUri?: string; 
  backgroundUri?: string; 
  onComplete: (photo?: string) => void 
}> = ({ id, title, description, completed, photoUri, backgroundUri, onComplete }) => {
  const [url, setUrl] = useState('');
  const pickFromGallery = async () => {
    try {
      const { launchImageLibrary } = require('react-native-image-picker');
      const res = await launchImageLibrary({ mediaType: 'photo', selectionLimit: 1 });
      if (res && !res.didCancel && res.assets && res.assets.length > 0) {
        const uri = res.assets[0].uri;
        if (uri) onComplete(uri);
        return;
      }
    } catch (e) {
      // library not installed or failed; fall back to URL submission
    }
  };
  return (
    <PhotoPanel
      source={require('../assets/img/07009fd3f110aa324192bbd0b2d7df067b91d460.png')}
      style={{ borderRadius: 16, overflow: 'hidden', marginBottom: 20 }}
      overlayColor="rgba(0,0,0,0.15)"
    >
      <FramedPanel style={{marginTop: 20}}>
        <Text style={{ color: '#5b250f', fontSize: 24, fontWeight: '900', width: '60%', alignSelf: 'center', textAlign: 'center', marginBottom: 10 }}>
          {title}
        </Text>
        <Text style={{ color: '#5b250f', fontSize: 16, fontWeight: '700', width: '60%', alignSelf: 'center', textAlign: 'center', marginBottom: 18 }}>
          {description}
        </Text>
        {photoUri ? (
          <View style={{ alignItems: 'center', marginBottom: 16 }}>
            <View style={{
              width: '92%',
              height: 180,
              borderRadius: 10,
              overflow: 'hidden',
              borderWidth: 3,
              borderColor: '#8B0000',
            }}>
              <Image source={{ uri: photoUri }} style={{ width: '100%', height: '100%' }} />
            </View>
          </View>
        ) : null}
        {!completed && (
          <View style={{ alignItems: 'center', marginTop: 20}}>
            <View style={{
              width: '90%',
              borderWidth: 4,
              borderColor: '#DAA520',
              borderRadius: 14,
              backgroundColor: '#8B0000',
              paddingVertical: 16,
              alignItems: 'center',
            }}>
              <TextInput
                placeholder="Paste image URL (photo proof)"
                placeholderTextColor="#f1c9b0"
                value={url}
                onChangeText={setUrl}
                style={{ backgroundColor: 'rgba(255,255,255,0.08)', color: 'white', padding: 10, borderRadius: 8, width: '92%', marginBottom: 10 }}
              />
              <View style={{ flexDirection: 'row', gap: 16 }}>
                <TouchableOpacity onPress={pickFromGallery}>
                  <Text style={{ color: 'white', fontSize: 22, fontWeight: '900' }}>ADD</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => onComplete(url || undefined)}>
                  <Text style={{ color: 'white', fontSize: 22, fontWeight: '900' }}>USE URL</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
        {completed && <Text style={{ color: '#0f0', marginTop: 6, textAlign: 'center', fontWeight: '800' }}>Completed</Text>}
      </FramedPanel>
    </PhotoPanel>
  );
};

export const TasksScreen: React.FC<NavProps> = ({ navigate, goBack }) => {
  const { today, completeTask, grantTrophyIfEligible } = useApp();
  if (!today) return (
    <ScreenContainer>
      <BackButton onPress={goBack} />
      <ScrollArea>
        <Title>Select your mentor first</Title>
        <Button title="Choose Mentor" onPress={() => navigate('MentorSelect')} />
      </ScrollArea>
    </ScreenContainer>
  );

  const allDone = today.tasks.every(t => t.completed);

  const mentor = mentors.find(m => m.id === today.mentorId);

  return (
    <ScreenContainer>
      <BackButton onPress={goBack} />
      <ScrollArea>
        {/* Mentor Portrait Header */}
        <View style={{ alignItems: 'center', marginBottom: 12 }}>
          <View style={{ borderWidth: 6, borderColor: '#DAA520', borderRadius: 16, backgroundColor: '#7d1d12', padding: 6 }}>
            <Image source={mentor?.avatar} style={{ width: 160, height: 160, borderRadius: 8 }} />
          </View>
        </View>
        <Title>{`Task from: ${mentor?.name || today.mentorId.toUpperCase()}`}</Title>

        {today.tasks.map(t => (
          <TaskItem
            key={t.id}
            id={t.id}
            title={t.title}
            description={t.description}
            completed={t.completed}
            photoUri={t.photoUri}
            backgroundUri={t.photoUri}
            onComplete={(url?: string) => completeTask(t.id, url)}
          />
        ))}
        {allDone && !today.trophyEarned && (
          <Button title="Receive Trophy" onPress={() => { grantTrophyIfEligible(); navigate('Trophies'); }} />
        )}
      </ScrollArea>
    </ScreenContainer>
  );
};


