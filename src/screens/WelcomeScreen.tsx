import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useApp } from '../context';
import { Button, ScreenContainer, ScrollArea } from '../ui';

type NavProps = { navigate: (name: any, params?: any) => void; goBack: () => void; params?: any };

export const WelcomeScreen: React.FC<NavProps> = ({ navigate }) => {
  const { userName, setUserName } = useApp();
  const [name, setName] = useState(userName);
  return (
    <ScreenContainer>
      <ScrollArea>
        <View style={{ alignItems: 'center', paddingTop: 60, paddingHorizontal: 20 }}>
          <View style={{
            width: 100,
            height: 100,
            backgroundColor: 'rgba(139, 0, 0, 0.8)',
            borderRadius: 20,
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: 30,
            borderWidth: 3,
            borderColor: '#DAA520',
          }}>
            <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold', textAlign: 'center' }}>
              MENTOR{"\n"}ULISS{"\n"}ROUTINE
            </Text>
          </View>
          <View style={{
            backgroundColor: 'rgba(209, 162, 102, 0.95)',
            borderRadius: 15,
            padding: 30,
            width: '100%',
            alignItems: 'center',
            borderWidth: 3,
            borderColor: '#8B0000',
            shadowColor: '#000',
            shadowOffset: { width: 3, height: 3 },
            shadowOpacity: 0.4,
            shadowRadius: 6,
            elevation: 8,
          }}>
            <Text style={{ color: '#8B0000', fontSize: 24, fontWeight: '800', marginBottom: 20, textAlign: 'center' }}>
              Enter your nickname
            </Text>
            <TextInput
              placeholder="Your nickname..."
              placeholderTextColor="#8B0000"
              value={name}
              onChangeText={setName}
              style={{ backgroundColor: 'rgba(139, 0, 0, 0.8)', color: 'white', padding: 15, borderRadius: 8, width: '100%', fontSize: 18, fontWeight: 'bold', textAlign: 'center', borderWidth: 2, borderColor: '#DAA520' }}
            />
            {name.trim() && (
              <Button
                title="Save"
                onPress={() => { setUserName(name.trim()); navigate('Onboarding'); }}
                variant="large"
              />
            )}
          </View>
          <Text style={{ color: 'rgba(255, 255, 255, 0.8)', fontSize: 12, textAlign: 'center', marginTop: 30, paddingHorizontal: 20 }}>
            We do not store any information about you, everything remains on your device.
          </Text>
        </View>
      </ScrollArea>
    </ScreenContainer>
  );
};


