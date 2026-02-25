import { View, TextInput, StyleSheet, TouchableOpacity, Text} from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';

export default function Formulario( {enviarTarefa} ) {
  const [tarefa, setTarefa] = useState('');
  const enviaTexto = () => tarefa.trim() ?
                        (enviarTarefa(tarefa), setTarefa('')) : null

  return (
    <View style={styles.form}>
      <TextInput
        placeholder="Adicione uma tarefa..."
        placeholderTextColor="#000" 
        style={styles.caixaTexto}
        value={tarefa}
        onChangeText={setTarefa}
      />
      <TouchableOpacity onPress={enviaTexto} style={styles.button}>
        <Text style={{ color: '#000', fontWeight: 'bold' }}>Criar</Text>
        <Ionicons name="add-circle-outline" size={20} color="#000" /> 
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  form: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 8,
    bottom: 24,
    paddingHorizontal: 25,
  },

  caixaTexto: {
    borderWidth: 1,
    borderColor: '#388E3C', 
    borderRadius: 8,
    width: '60%',
    color: '#000', 
    fontSize: 14,
    padding: 16,
    backgroundColor: '#C8E6C9', 
    elevation: 20,
  },

  button: {
    borderWidth: 1,
    borderColor: '#388E3C', 
    flexDirection: 'row',
    backgroundColor: '#A5D6A7', 
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
    paddingHorizontal: 10,
    elevation: 20,
  },
});
