import { SafeAreaView, StyleSheet } from 'react-native';
import Principal from './components/main/index';
import Titulo from './components/title/index';

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
