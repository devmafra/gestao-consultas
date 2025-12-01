# 🏥 Sistema de Gestão de Consultas Médicas

Este projeto é um sistema simples de gestão de consultas médicas desenvolvido em JavaScript puro, utilizando a abordagem de **Módulos ES6** e o **LocalStorage** do navegador para persistência de dados.

## ✨ Funcionalidades

- **Listagem Dinâmica:** Carrega dados de médicos e pacientes a partir de arquivos JSON locais (simulando uma API) e preenche os campos de seleção (select) na interface.
- **Agendamento de Consultas:** Permite agendar uma consulta selecionando um paciente, um médico e uma data.
- **Simulação Assíncrona:** O agendamento da consulta simula uma operação assíncrona (Promise com `setTimeout`) para demonstrar o uso de código assíncrono.
- **Persistência de Dados:** As consultas agendadas são salvas e carregadas do `localStorage` do navegador, garantindo que elas permaneçam após o recarregamento da página.
- **Cancelamento de Consultas:** Cada item da lista de consultas possui um botão para cancelamento.
- **Validação:** Verifica se todos os campos (paciente, médico e data) foram selecionados antes de agendar.
- **Formato de Data:** A data é formatada para o padrão `DD/MM/AA` antes de ser exibida.

## ⚙️ Estrutura do Projeto

O projeto segue uma estrutura modular, com separação de responsabilidades em diferentes arquivos JavaScript:

- **`index.html`**: A estrutura base da aplicação.
- **`js/main.js`**: O ponto de entrada da aplicação. Contém a lógica para carregamento dos dados, manipulação de eventos (botão de agendar) e a função principal de agendamento.
- **`js/Pessoa.js`**: Classe base que define as propriedades comuns a todos (nome, idade, cpf).
- **`js/Paciente.js`**: Estende a classe `Pessoa`.
- **`js/Medico.js`**: Estende a classe `Pessoa` e adiciona a propriedade `especialidade` e o método assíncrono `agendarConsulta`.
- **`js/DomHandler.js`**: Classe estática responsável por toda a manipulação do DOM (Document Object Model), como preencher listas de seleção, exibir consultas e gerenciar o `localStorage`.
- **`data/medicos.json`** e **`data/pacientes.json`** (Não incluídos, mas inferidos): Arquivos mock de dados para simular a busca em uma API.

## 🚀 Como Rodar o Projeto

1.  **Clone o repositório:**
    ```bash
    git clone <URL_DO_SEU_REPOSITORIO>
    ```
2.  **Navegue até o diretório do projeto:**
    ```bash
    cd <nome-do-diretorio>
    ```
3.  **Servidor Local:** Como o projeto utiliza a função `fetch()` para carregar os arquivos JSON e Módulos ES6, ele deve ser servido através de um servidor web local. Você pode usar extensões como **Live Server** no VS Code ou executar um servidor simples via terminal (ex: `npx http-server`).
4.  **Acesse o navegador:** Abra o arquivo `index.html` (via servidor local) no seu navegador.
5.  **Agende suas consultas!**
