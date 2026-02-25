import { View, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListaTarefas from '../cardList/index'; 
import Contador from '../counter/index';
import Formulario from '../form/index';
import { useState, useEffect } from 'react';

export default function Principal() {
  const [lista, setLista] = useState([]);

 
  const addTarefas = (tarefa) => {
    const adicionaTarefa = [...lista, { texto: tarefa, status: false}];
    setLista(adicionaTarefa);
    salvarTarefa(adicionaTarefa);
  };

  
  const alteraTarefa = (index) => {
    const atualizaLista = [...lista];
    atualizaLista[index].status = !atualizaLista[index].status;
    setLista(atualizaLista);
    salvarTarefa(atualizaLista);
  };

  
  const delTarefas = (index) => {
    const novaLista = [...lista];
    novaLista.splice(index, 1);
    setLista(novaLista);
    salvarTarefa(novaLista); 
  };

  const salvarTarefa = async (tarefas) => {
    try {    
      await AsyncStorage.setItem("tarefas", JSON.stringify(tarefas));
    } catch (error) {
      console.error("Erro ao salvar tarefas!", error);
    }
  };

  const carregarTarefa = async () => {
    try {    
      const tarefasSalvas = await AsyncStorage.getItem("tarefas");
      if (tarefasSalvas) {
        setLista(JSON.parse(tarefasSalvas));
      }
    } catch (error) {
      console.error("Erro ao carregar tarefas!", error);
    }
  };

  useEffect(
    () => {
      carregarTarefa();
    }, [] 
  );

  return (
    <View style={styles.containerMain}>
      
      <Formulario enviarTarefa={addTarefas} />
      
      <Contador contTarefas={lista} />
      
      <ListaTarefas 
        ListaTarefas={lista} 
        excluiTarefas={delTarefas} 
        tarefasConcluidas={alteraTarefa} 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  containerMain: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#FCE4EC', 
  },
});
