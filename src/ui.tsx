import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet, ScrollView, ImageBackground, Image, Vibration } from 'react-native';
import { useApp } from './context';

// Компонент-обертка для фонового изображения
export const BackgroundWrapper: React.FC<{ children: React.ReactNode; backgroundImage?: any }> = ({ children, backgroundImage }) => {
  if (backgroundImage) {
    return (
      <ImageBackground source={backgroundImage} style={styles.container} resizeMode="cover">
        {children}
      </ImageBackground>
    );
  }
  return <View style={styles.container}>{children}</View>;
};

export const ScreenContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={styles.container}>{children}</View>
);

export const Title: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Text style={styles.title}>{children}</Text>
);

export const LargeTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Text style={styles.largeTitle}>{children}</Text>
);

export const Button: React.FC<{ title: string; onPress: () => void; variant?: 'primary' | 'secondary' | 'large' }> = ({
  title,
  onPress,
  variant = 'primary',
}) => {
  const { vibrationEnabled } = useApp();
  const handlePress = () => {
    if (vibrationEnabled) Vibration.vibrate(10);
    onPress();
  };
  return (
    <TouchableOpacity style={[styles.button, variant === 'large' && styles.largeButton]} onPress={handlePress}>
      <Text style={[styles.buttonText, variant === 'large' && styles.largeButtonText]}>{title}</Text>
    </TouchableOpacity>
  );
};

export const Card: React.FC<{ children: React.ReactNode; variant?: 'default' | 'mentor' | 'mentorCard' } & Partial<{ onPress: () => void }>> = ({ children, onPress, variant = 'default' }) => {
  const { vibrationEnabled } = useApp();
  const handlePress = () => {
    if (onPress) {
      if (vibrationEnabled) Vibration.vibrate(8);
      onPress();
    }
  };
  return (
    <TouchableOpacity disabled={!onPress} onPress={handlePress} style={[styles.card, variant === 'mentor' && styles.mentorCard, variant === 'mentorCard' && styles.mentorCardLarge]}>
      {typeof children === 'string' ? <Text>{children}</Text> : children}
    </TouchableOpacity>
  );
};

export const ScrollArea: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ScrollView contentContainerStyle={{ paddingHorizontal: 16, paddingTop: 24, paddingBottom: 40 }}>{children}</ScrollView>
);

export const BackButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  const { vibrationEnabled } = useApp();
  const handlePress = () => {
    if (vibrationEnabled) Vibration.vibrate(8);
    onPress();
  };
  return (
    <TouchableOpacity style={styles.backButton} onPress={handlePress}>
      <Text style={styles.backButtonText}>←</Text>
    </TouchableOpacity>
  );
};

// Reusable photo background wrapper that grows with its children
export const PhotoPanel: React.FC<{ children: React.ReactNode; source: any; style?: any; overlayColor?: string }> = ({
  children,
  source,
  style,
  overlayColor,
}) => (
  <ImageBackground source={source} style={[{ width: 350, height: 400, alignSelf: 'center' }, style]} resizeMode="cover">
    {overlayColor ? <View style={{ ...StyleSheet.absoluteFillObject, backgroundColor: overlayColor }} /> : null}
    {children}
  </ImageBackground>
);

// Framed golden panel used across the app (ancient scroll style)
export const FramedPanel: React.FC<{ children: React.ReactNode; style?: any }> = ({ children, style }) => (
  <View
    style={[
      {
        // backgroundColor: 'rgba(218, 165, 32, 0.95)',
        borderRadius: 15,
        padding: 20,
        // borderWidth: 4,
        // borderColor: '#8B0000',
        // shadowColor: '#000',
     
        position: 'relative',
      },
      style,
    ]}
  >
    <View style={{ position: 'absolute', top: 8, left: 8, width: 20, height: 20, borderTopWidth: 2, borderLeftWidth: 2, borderColor: '#8B0000' }} />
    <View style={{ position: 'absolute', top: 8, right: 8, width: 20, height: 20, borderTopWidth: 2, borderRightWidth: 2, borderColor: '#8B0000' }} />
    <View style={{ position: 'absolute', bottom: 8, left: 8, width: 20, height: 20, borderBottomWidth: 2, borderLeftWidth: 2, borderColor: '#8B0000' }} />
    <View style={{ position: 'absolute', bottom: 8, right: 8, width: 20, height: 20, borderBottomWidth: 2, borderRightWidth: 2, borderColor: '#8B0000' }} />
    {children}
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 24, paddingBottom: 24 },
  title: { 
    color: '#fff', 
    fontSize: 28, 
    fontWeight: '800', 
    textAlign: 'center', 
    marginVertical: 16, 
    textShadowColor: 'rgba(0,0,0,0.8)', 
    textShadowOffset: { width: 1, height: 1 }, 
    textShadowRadius: 3 
  },
  largeTitle: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
    marginVertical: 12,
    textShadowColor: 'rgba(0,0,0,0.8)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
  },
  button: {
    backgroundColor: '#8B0000',
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 8,
    borderWidth: 2,
    borderColor: '#DAA520',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  largeButton: {
    paddingVertical: 18,
    paddingHorizontal: 30,
    marginVertical: 12,
  },
  buttonText: { 
    color: 'white', 
    fontSize: 18, 
    fontWeight: '700' 
  },
  largeButtonText: {
    fontSize: 20,
    fontWeight: '800',
  },
  card: {
    padding: 16,
    borderRadius: 10,
    marginVertical: 8,


  },
  mentorCard: {
    width: 80,
    height: 80,
    borderRadius: 8,
    margin: 8,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    // borderWidth: 3,
    // borderColor: '#8B0000',
  },
  mentorCardLarge: {
    width: 120,
    height: 120,
    margin: 12,
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    backgroundColor: 'rgba(139, 0, 0, 0.8)',
    width: 50,
    height: 50,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#DAA520',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    zIndex: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
});


