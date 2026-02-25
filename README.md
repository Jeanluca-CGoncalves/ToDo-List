# 📱 ToDo List - App Mobile

Aplicativo de gerenciamento de tarefas desenvolvido em React Native. O projeto foca em componentização estruturada, gestão de estados e persistência de dados local, configurado para execução no ambiente Expo.

## ⚙️ Arquitetura e Tecnologias
* **Framework:** React Native com Expo (SDK 54).
* **Armazenamento (Local Storage):** `@react-native-async-storage/async-storage` para manter as tarefas salvas no dispositivo operando em modo offline.
* **Interface:** Componentização dividida em módulos isolados (`Formulario`, `ListaTarefas`, `Contador`).
* **Ícones:** Pacote nativo `@expo/vector-icons`.

## 🚀 Funcionalidades
* **Adição de Tarefas:** Inserção dinâmica no estado da aplicação.
* **Controle de Status:** Alternância entre pendente e concluída.
* **Exclusão:** Remoção de itens da lista e do armazenamento local.
* **Persistência Automática:** Sincronização em tempo real do estado da lista com a memória do dispositivo via AsyncStorage.

## 📂 Estrutura de Diretórios
```text
/src
  /components
    /cardList  # Renderização individual e listagem das tarefas
    /counter   # Lógica de contagem
    /form      # Input e captura de novas tarefas
    /main      # Ponto de entrada e gerenciamento de estado (Hooks)
🛠️ Como executar localmente
Clone este repositório:


git clone [https://github.com/Jeanluca-CGoncalves/ToDo-List.git](https://github.com/Jeanluca-CGoncalves/ToDo-List.git)
Acesse a pasta do projeto:

cd ToDo-List
Instale as dependências:

npm install
Inicie o servidor Metro Bundler:

npx expo start
Escaneie o QR Code com o aplicativo Expo Go (Android/iOS) ou pressione a no terminal para abrir no emulador.
