import { View, StyleSheet, Text } from 'react-native';

export default function Contador( {contTarefas} ) {
  const tarefasCriadas = contTarefas.length;
  const tarefasConcluidas = contTarefas.filter((tarefa) => tarefa.status).length;
  
  return (
    <View style={styles.contadorContainer}>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
        <Text style={{ color: '#000', fontWeight: 'bold' }}>Tarefas Criadas</Text> 
        <Text style={styles.contador}>{tarefasCriadas}</Text>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 2 }}>
        <Text style={{ color: '#000', fontWeight: 'bold' }}>Concluidas</Text> 
        <Text style={styles.contador}>{tarefasConcluidas}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contadorContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderColor: '#B71C1C', 
  },

  contador: {
    backgroundColor: '#FFCDD2', 
    borderRadius: 8,
    paddingVertical: 2,
    paddingHorizontal: 8,
    fontSize: 14,
    fontWeight: 700,
    color: '#000', 
  },
});
