import React from 'react';
import { View, Text, Image } from 'react-native';
import { useApp } from '../context';
import { ScreenContainer, ScrollArea, Title, BackButton, FramedPanel } from '../ui';

type NavProps = { navigate: (name: any, params?: any) => void; goBack: () => void; params?: any };

export const TrophiesScreen: React.FC<NavProps> = ({ goBack }) => {
  const { trophies } = useApp();
  const ids = Object.keys(trophies) as Array<keyof typeof trophies>;
  const icons: Record<string, string> = {
    uliss: 'https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/64/shield.png',
    leon: 'https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/64/bolt.png',
    athena: 'https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/64/book.png',
    hermes: 'https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/64/ship.png',
    kratos: 'https://raw.githubusercontent.com/encharm/Font-Awesome-SVG-PNG/master/black/png/64/user-secret.png',
  };

  return (
    <ScreenContainer>
      <BackButton onPress={goBack} />
      <ScrollArea>
        <Title>TROPHY</Title>
        <View style={{ alignItems: 'center' }}>
          <View style={{ width: '92%', marginTop: 8 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
              {ids.slice(0, 2).map(id => {
                const t = trophies[id];
                return (
                  <FramedPanel key={id as string} style={{ width: '48%', backgroundColor: '#7d1d12' }}>
                    <View style={{ borderWidth: 4, borderColor: '#DAA520', borderRadius: 10, backgroundColor: '#7d1d12', alignItems: 'center', justifyContent: 'center', height: 140 }}>
                      {t.achieved ? (
                        <Image source={{ uri: icons[id as string] }} style={{ width: 80, height: 80 }} />
                      ) : (
                        <Text style={{ color: '#DAA520', fontSize: 28 }}>🔒</Text>
                      )}
                    </View>
                  </FramedPanel>
                );
              })}
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16 }}>
              {ids.slice(2, 4).map(id => {
                const t = trophies[id];
                return (
                  <FramedPanel key={id as string} style={{ width: '48%', backgroundColor: '#7d1d12' }}>
                    <View style={{ borderWidth: 4, borderColor: '#DAA520', borderRadius: 10, backgroundColor: '#7d1d12', alignItems: 'center', justifyContent: 'center', height: 140 }}>
                      {t.achieved ? (
                        <Image source={{ uri: icons[id as string] }} style={{ width: 80, height: 80 }} />
                      ) : (
                        <Text style={{ color: '#DAA520', fontSize: 28 }}>🔒</Text>
                      )}
                    </View>
                  </FramedPanel>
                );
              })}
            </View>
            <View style={{ alignItems: 'center' }}>
              {ids.slice(4, 5).map(id => {
                const t = trophies[id];
                return (
                  <FramedPanel key={id as string} style={{ width: 180, backgroundColor: '#7d1d12' }}>
                    <View style={{ borderWidth: 4, borderColor: '#DAA520', borderRadius: 10, backgroundColor: '#7d1d12', alignItems: 'center', justifyContent: 'center', height: 140 }}>
                      {t.achieved ? (
                        <Image source={{ uri: icons[id as string] }} style={{ width: 80, height: 80 }} />
                      ) : (
                        <Text style={{ color: '#DAA520', fontSize: 28 }}>🔒</Text>
                      )}
                    </View>
                  </FramedPanel>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollArea>
    </ScreenContainer>
  );
};


