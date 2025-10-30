import React, { useState } from 'react';
import { Image, Text, View, TextInput } from 'react-native';
import { ScreenContainer, ScrollArea, Button } from '../ui';
import { useApp } from '../context';

type NavProps = { navigate: (name: any, params?: any) => void; goBack: () => void; params?: any };

export const OnboardingScreen: React.FC<NavProps> = ({ navigate }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const { userName, setUserName } = useApp();
  const [name, setName] = useState(userName);
  const steps = [
    { title: 'Hello, traveler!', description: 'My name is Ulysses – and I will be one of your mentors. I will show you the path that the heroes of the ancient world walked – the path of strength, wisdom and daily feats.', buttonText: 'Hello!', illustration: require('../assets/img/onboard/1.png') },
    { title: 'Choose your mentor', description: 'Choose a mentor every day: wise Sophia, strong Leon, calm Helena, clever Artem or steadfast Ulysses. Each hero has his own tasks.', buttonText: 'Next', illustration: require('../assets/img/onboard/2.png') },
    { title: 'Perform a Feat', description: 'Get tasks – short actions that change you: read, do, help, create. After completing – take photo proof and get a trophy.', buttonText: 'Continue', illustration: require('../assets/img/onboard/3.png') },
    { title: "The hero doesn't stop.", description: "Hero, your journey is just beginning. The hall of fame is not for those who are perfect, but for those who don't stop.", buttonText: 'Next', illustration: require('../assets/img/onboard/4.png') },
    { title: 'Enter your nickname', description: '', buttonText: 'Save', illustration: require('../assets/img/onboard/4.png') },
  ];
  const s = steps[currentStep];
  const next = () => {
    const lastIdx = steps.length - 1;
    if (currentStep === lastIdx) {
      const trimmed = (name || '').trim();
      if (!trimmed) return;
      setUserName(trimmed);
      navigate('Home');
      return;
    }
    setCurrentStep(currentStep + 1);
  };

  return (
    <ScreenContainer>
      <ScrollArea>
        <View style={{ alignItems: 'center', paddingTop: 60, paddingHorizontal: 20 }}>
          <View style={{  position: 'absolute', alignSelf: 'center',top: 200, left: 0, right: 0, bottom: 0, alignItems: 'center', justifyContent: 'center',zIndex: -1 }}>
            <Image source={s.illustration} style={{ width: 400, height: 600 }} />
          </View>
          <View style={{ backgroundColor: 'rgba(218,165,32,0.95)', borderRadius: 20, padding: 25, width: '100%',alignSelf: 'center', marginTop: 200, borderWidth: 3, borderColor: '#8B0000', shadowColor: '#000', shadowOffset: { width: 3, height: 3 }, shadowOpacity: 0.4, shadowRadius: 6, elevation: 8 }}>
            <Text style={{ color: '#8B0000', fontSize: 24, fontWeight: '800', textAlign: 'center', marginBottom: 15 }}>{s.title}</Text>
            {!!s.description && (
              <Text style={{ color: '#8B0000', fontSize: 16, fontWeight: '500', textAlign: 'center', lineHeight: 22, marginBottom: 25 }}>{s.description}</Text>
            )}
            {currentStep === steps.length - 1 && (
              <View style={{ alignItems: 'center', marginBottom: 16 }}>
                <TextInput
                  placeholder="Enter your nickname"
                  placeholderTextColor="#8B0000"
                  value={name}
                  onChangeText={setName}
                  style={{ backgroundColor: 'rgba(139,0,0,0.85)', color: 'white', padding: 14, borderRadius: 10, width: '90%', textAlign: 'center', fontWeight: '800', borderWidth: 2, borderColor: '#DAA520' }}
                />
              </View>
            )}
            <Button title={s.buttonText} onPress={next} variant="large" />
          </View>
          <View style={{ flexDirection: 'row', marginTop: 30, gap: 10 }}>
            {steps.map((_, i) => (
              <View key={i} style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: i === currentStep ? '#8B0000' : 'rgba(139,0,0,0.3)', borderWidth: 2, borderColor: '#DAA520' }} />
            ))}
          </View>
        </View>
      </ScrollArea>
    </ScreenContainer>
  );
};


