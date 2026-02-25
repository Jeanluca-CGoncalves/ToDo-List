import { SafeAreaView, StyleSheet } from 'react-native';
import Principal from './src/components/main/index.js'; 
import Titulo from './src/components/title/index.js';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Titulo/>
      <Principal/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8FADF', 
    alignItems: 'center',
  },
});
