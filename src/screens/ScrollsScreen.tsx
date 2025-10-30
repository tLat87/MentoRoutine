import React from 'react';
import { Text, View, Image } from 'react-native';
import { useApp } from '../context';
import { mentors } from '../data';
import { ScreenContainer, ScrollArea, Title, BackButton } from '../ui';

type NavProps = { navigate: (name: any, params?: any) => void; goBack: () => void; params?: any };

export const ScrollsScreen: React.FC<NavProps> = ({ goBack }) => {
  const { today } = useApp();
  const completedTasks = today?.tasks.filter(t => t.completed) || [];
  return (
    <ScreenContainer>
      <BackButton onPress={goBack} />
      <ScrollArea>
        <View style={{ alignItems: 'center', paddingTop: 40 }}>
          <Title>SCROLLS</Title>
          <Text style={{ color: 'rgba(255,255,255,0.9)', fontSize: 16, textAlign: 'center', marginBottom: 30, fontStyle: 'italic' }}>
            This is where your proofs of strength live.
          </Text>
          {completedTasks.length === 0 ? (
            <View style={{ backgroundColor: 'rgba(218,165,32,0.95)', borderRadius: 20, padding: 30, width: '95%', borderWidth: 4, borderColor: '#8B0000', alignItems: 'center' }}>
              <Text style={{ color: '#8B0000', fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
                No completed tasks yet.{"\n"}Complete some tasks to see your scrolls here.
              </Text>
            </View>
          ) : (
            completedTasks.map(task => (
              <View key={task.id} style={{ marginBottom: 20, width: '95%' }}>
                <View style={{ backgroundColor: '#DAA520', borderRadius: 15, padding: 20, borderWidth: 4, borderColor: '#8B0000', shadowColor: '#000', shadowOffset: { width: 3, height: 3 }, shadowOpacity: 0.4, shadowRadius: 6, elevation: 8, position: 'relative' }}>
                  <View style={{ position: 'absolute', top: 8, left: 8, width: 20, height: 20, borderTopWidth: 2, borderLeftWidth: 2, borderColor: '#8B0000' }} />
                  <View style={{ position: 'absolute', top: 8, right: 8, width: 20, height: 20, borderTopWidth: 2, borderRightWidth: 2, borderColor: '#8B0000' }} />
                  <View style={{ position: 'absolute', bottom: 8, left: 8, width: 20, height: 20, borderBottomWidth: 2, borderLeftWidth: 2, borderColor: '#8B0000' }} />
                  <View style={{ position: 'absolute', bottom: 8, right: 8, width: 20, height: 20, borderBottomWidth: 2, borderRightWidth: 2, borderColor: '#8B0000' }} />
                  <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                    <View style={{ width: 120, height: 80, marginRight: 15, borderRadius: 8, overflow: 'hidden', borderWidth: 2, borderColor: '#8B0000' }}>
                      {task.photoUri ? (
                        <Image source={{ uri: task.photoUri }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                      ) : (
                        <View style={{ width: '100%', height: '100%', backgroundColor: '#8B0000', alignItems: 'center', justifyContent: 'center' }}>
                          <Text style={{ color: 'white', fontSize: 12, textAlign: 'center' }}>No Photo</Text>
                        </View>
                      )}
                    </View>
                    <View style={{ flex: 1 }}>
                      <Text style={{ color: '#8B0000', fontSize: 20, fontWeight: '800', marginBottom: 8 }}>{task.title}</Text>
                      <Text style={{ color: '#8B0000', fontSize: 16, fontWeight: '600', marginBottom: 15 }}>
                        FROM {today?.mentorId.toUpperCase() || 'MENTOR'}
                      </Text>
                      <View style={{ width: 60, height: 60, borderRadius: 8, borderWidth: 2, borderColor: '#8B0000', overflow: 'hidden', backgroundColor: '#8B0000' }}>
                        <Image source={{ uri: mentors.find(m => m.id === today?.mentorId)?.avatar || '' }} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            ))
          )}
        </View>
      </ScrollArea>
    </ScreenContainer>
  );
};


