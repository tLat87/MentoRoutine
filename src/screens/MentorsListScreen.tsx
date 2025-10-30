import React from 'react';
import { Text, View, Image } from 'react-native';
import { mentors } from '../data';
import { ScreenContainer, ScrollArea, Title, BackButton } from '../ui';

type NavProps = { navigate: (name: any, params?: any) => void; goBack: () => void; params?: any };

export const MentorsListScreen: React.FC<NavProps> = ({ goBack }) => {
  // View-only ordered list exactly as requested
  const displayMentors = [
    {
      id: 'uliss',
      name: 'ULISS',
      area: 'Discipline and Endurance',
      avatar: require('../assets/img/men/1.png'),
    },
    {
      id: 'leon',
      name: 'LEON',
      area: 'Action and Courage',
      avatar: require('../assets/img/men/2.png'),
    },
    {
      id: 'helena',
      name: 'HELENA',
      area: 'Calmness and Harmony',
      avatar:
        require('../assets/img/men/3.png'),
    },
    {
      id: 'sophia',
      name: 'SOPHIA',
      area: 'Wisdom and Self-Knowledge',
      avatar:
        require('../assets/img/men/4.png'),
    },
    {
      id: 'artem',
      name: 'ARTEM',
      area: 'Inspiration and Creativity',
      avatar:
        require('../assets/img/men/5.png'),
    },
  ];

  return (
    <ScreenContainer>
      <BackButton onPress={goBack} />
      <ScrollArea>
        <Title>MENTORS</Title>
        {displayMentors.map((m, index) => (
          <View key={m.id}>
          <View style={{ backgroundColor: 'rgba(218,165,32,0.95)', borderRadius: 15, padding: 20, marginVertical: 15, borderWidth: 4, borderColor: '#8B0000', shadowColor: '#000', shadowOffset: { width: 3, height: 3 }, shadowOpacity: 0.4, shadowRadius: 6, elevation: 8, position: 'relative' }}>
            <View style={{ position: 'absolute', top: 8, left: 8, width: 20, height: 20, borderTopWidth: 2, borderLeftWidth: 2, borderColor: '#8B0000' }} />
            <View style={{ position: 'absolute', top: 8, right: 8, width: 20, height: 20, borderTopWidth: 2, borderRightWidth: 2, borderColor: '#8B0000' }} />
            <View style={{ position: 'absolute', bottom: 8, left: 8, width: 20, height: 20, borderBottomWidth: 2, borderLeftWidth: 2, borderColor: '#8B0000' }} />
            <View style={{ position: 'absolute', bottom: 8, right: 8, width: 20, height: 20, borderBottomWidth: 2, borderRightWidth: 2, borderColor: '#8B0000' }} />
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={{ width: 80, height: 80, borderRadius: 8, marginRight: 20, borderWidth: 3, borderColor: '#8B0000', overflow: 'hidden', backgroundColor: '#8B0000' }}>
                <Image source={m.avatar} style={{ width: '100%', height: '100%', resizeMode: 'cover' }} />
              </View>
              <View style={{ flex: 1 }}>
                <Text style={{ color: '#8B0000', fontSize: 24, fontWeight: '800', marginBottom: 8, textShadowColor: 'rgba(255,255,255,0.8)', textShadowOffset: { width: 1, height: 1 }, textShadowRadius: 2 }}>
                  {m.name}
                </Text>
                <Text style={{ color: '#8B0000', fontSize: 16, fontWeight: '600', lineHeight: 20 }}>Area: {m.area}</Text>
              </View>
            </View>
          </View>
          {index < displayMentors.length - 1 && (
            <View style={{ alignItems: 'center', marginVertical: 10 }}>
              <View style={{ width: 200, height: 4, backgroundColor: '#8B0000', borderRadius: 2, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ width: 20, height: 20, backgroundColor: '#DAA520', borderRadius: 10, borderWidth: 2, borderColor: '#8B0000', shadowColor: '#DAA520', shadowOffset: { width: 0, height: 0 }, shadowOpacity: 0.8, shadowRadius: 4, elevation: 4 }} />
              </View>
            </View>
          )}
        </View>
        ))}
      </ScrollArea>
    </ScreenContainer>
  );
};


