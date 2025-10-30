import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';
import { useApp } from '../context';
import { Button, ScreenContainer, ScrollArea, Title, BackButton, PhotoPanel } from '../ui';

type NavProps = { navigate: (name: any, params?: any) => void; goBack: () => void; params?: any };

export const SettingsScreen: React.FC<NavProps> = ({ goBack }) => {
  const { userName, setUserName, vibrationEnabled, setVibrationEnabled, volume, setVolume, resetAll } = useApp();
  const [tempName, setTempName] = useState(userName);
  return (
    <ScreenContainer>
      <BackButton onPress={goBack} />
      <ScrollArea>
        <Title>SETTINGS</Title>
        <PhotoPanel
          source={require('../assets/img/aboutPanel.png')}
          style={{ borderRadius: 20, width: '100%', height: 500,alignItems: 'center',alignSelf: 'center', justifyContent: 'center',  overflow: 'hidden' }}
        >
          <View style={{ marginVertical: 8 }}>
            <Text style={{ color: '#350E04', fontWeight: '900', fontSize: 18, marginBottom: 6 }}>VIBRATION</Text>
            <Button title={vibrationEnabled ? 'Turn OFF' : 'Turn ON'} onPress={() => setVibrationEnabled(!vibrationEnabled)} />
          </View>
          
          <View style={{ marginVertical: 8 }}>
            <Text style={{ color: '#350E04', fontWeight: '900', fontSize: 18, marginBottom: 6 }}>YOUR NAME:</Text>
            <TextInput
              value={tempName}
              onChangeText={setTempName}
              style={{ backgroundColor: 'rgba(58, 28, 20, 0.85)', color: 'white', padding: 12, borderRadius: 8 }}
            />
            <Button title="CHANGE" onPress={() => setUserName(tempName.trim())} />
          </View>
        </PhotoPanel>
        <View style={{ marginTop: 20 }}>
          <Button title="RESET PROGRESS" onPress={resetAll} />
        </View>
      </ScrollArea>
    </ScreenContainer>
  );
};


