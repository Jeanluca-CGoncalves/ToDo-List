import { View, StyleSheet, Image } from 'react-native';

import logo from '../../image/logo.png';
export default function Titulo() {
  return (
    <View style={styles.header}>
    
      <Image
        source={logo}
        resizeMode="contain"
        style={{
          paddingHorizontal: 100,
          paddingVertical: 10,
          aspectRatio: 1,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    width: '100%',
    maxHeight: 200,
    backgroundColor: '#8BC34A', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D32F2F',
  },
});
