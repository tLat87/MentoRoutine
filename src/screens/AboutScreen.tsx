import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { ScreenContainer, ScrollArea, Title, BackButton, PhotoPanel } from '../ui';

type NavProps = { navigate: (name: any, params?: any) => void; goBack: () => void; params?: any };

export const AboutScreen: React.FC<NavProps> = ({ goBack }) => (
  <ScreenContainer>
    <BackButton onPress={goBack} />
    <ScrollArea>
      <View style={{ alignItems: 'center', paddingTop: 40 }}>
        <Title>ABOUT THE APP</Title>
        <PhotoPanel source={require('../assets/img/aboutPanel.png')} style={{ borderRadius: 20,  marginVertical: 20, width: '100%',height: 550, alignSelf: 'center', overflow: 'hidden' }}>
          <Text style={{ color: '#350E04', fontSize: 16, fontWeight: '600', textAlign: 'center', lineHeight: 24, marginBottom: -20, fontFamily: 'serif', marginTop: 30 }}>
            In A World Where Every Day Is Similar{"\n"}
            To The Previous One,{"\n"}
            Mentor Uliss Routine Reminds You:{"\n"}
            Even The Smallest Step Can Be A Feat.{"\n\n"}
            Here You Create Your Own Heroic{"\n"}
            Routine.{"\n\n"}
            Every Morning You Are Met By One Of{"\n"}
            Five Mentors, After Which You Choose{"\n"}
            A Mentor For Today,{"\n"}
            And He Gives You Tasks For Today -{"\n"}
            Simple But Symbolic.{"\n\n"}
            Perform, Capture Photos And Save{"\n"}
            Your "Day Scrolls" -{"\n"}
            This Is How The Story Of Your Journey{"\n"}
            Is Born.
          </Text>
          
        </PhotoPanel>
        
      </View>
    </ScrollArea>
  </ScreenContainer>
);


