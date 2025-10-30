import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { useApp } from '../context';
import { Button, ScreenContainer, ScrollArea } from '../ui';

type NavProps = { navigate: (name: any, params?: any) => void; goBack: () => void; params?: any };

export const HomeScreen: React.FC<NavProps> = ({ navigate }) => {
  const { userName } = useApp();
  return (
    <ScreenContainer>
      <ScrollArea>
        <View style={{ alignItems: 'center', paddingTop: 40 }}>
          <Text style={{ color: '#fff', fontSize: 32, fontWeight: '800', marginBottom: 20, textShadowColor: 'rgba(0,0,0,0.8)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 3 }}>
            HI, {userName || 'NICK'}!
          </Text>
          <Image source={require('../assets/img/3527f71ce0a760f8ce5d83958e279127ab0f2e5f.png')} style={{ width: 200, height: 200 }} />
          <View style={{ width: '90%', marginTop: 20 }}>
            <Button title="START" onPress={() => navigate('Tasks')} variant="large" />
            <Button title="MENTORS" onPress={() => navigate('Mentors')} variant="large" />
            <Button title="SCROLLS" onPress={() => navigate('Scrolls')} variant="large" />
          </View>
          <View style={{ 
            flexDirection: 'row', 
            justifyContent: 'space-around', 
            width: '90%', 
            marginTop: 40,
            paddingHorizontal: 20,
          }}>
            <TouchableOpacity 
              style={{ 
                backgroundColor: '#8B0000', 
                width: 50, 
                height: 50, 
                borderRadius: 8, 
                alignItems: 'center', 
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: '#DAA520',
              }}
              onPress={() => navigate('About')}
            >
              <Image source={require('../assets/img/ico/3.png')} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            <TouchableOpacity 
              style={{ 
                backgroundColor: '#8B0000', 
                width: 50, 
                height: 50, 
                borderRadius: 8, 
                alignItems: 'center', 
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: '#DAA520',
              }}
              onPress={() => navigate('Settings')}
            >
              <Image source={require('../assets/img/ico/1.png')} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
            <TouchableOpacity 
              style={{ 
                backgroundColor: '#8B0000', 
                width: 50, 
                height: 50, 
                borderRadius: 8, 
                alignItems: 'center', 
                justifyContent: 'center',
                borderWidth: 2,
                borderColor: '#DAA520',
              }}
              onPress={() => navigate('Trophies')}
            >
              <Image source={require('../assets/img/ico/2.png')} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
          </View>
        </View>
      </ScrollArea>
    </ScreenContainer>
  );
};


