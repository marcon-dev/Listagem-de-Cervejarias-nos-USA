# 💡 Linx

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

Este projeto implementa uma aplicação que consome a API Open Brewery DB para listar e filtrar cervejarias, seguindo um layout pré-definido, no qual foi desenvolvido através de tecnologias modernas como React e Vite. Caso tenha interesse, visite a página do desafio clicando [aqui](https://github.com/chaordic/desafio-frontend/tree/master).

### 🛠️ Funcionalidades Principais

- Listagem de cervejarias obtidas a partir de uma API externa.
- Filtro de cervejarias por tipo.
- Paginação para navegar entre os resultados.
- Visualização de detalhes de uma cervejaria selecionada.
- Navegação completa via teclado para acessibilidade.

### 🧰 Tecnologias Utilizadas

- React
- Vite
- CSS Modules

### 🔩 Estrutura do Projeto

- `src/components`: Armazena todos os componentes de UI reutilizáveis.
- `src/hooks`: Contém hooks customizados que encapsulam a lógica de negócio, como a busca e filtro de dados.
- `src/modules`: Contém os arquivos de estilo (CSS Modules), um para cada componente.
- `App.jsx`: Componente principal que gerencia o layout e o estado global da aplicação.
- `main.jsx`: Ponto de entrada da aplicação React.

### 🤔 Como Executar o Projeto Localmente

- Clone usando o comando `git clone` ou baixe o arquivo `.zip` deste repositório.
- Instale as dependências com o comando: `pnpm install`, `yarn install` ou `npm install`.
- Execute o servidor de desenvolvimento com: `pnpm dev`, `yarn run dev` ou `npm run dev`.
- Verifique se há algum erro no terminal, caso não tenha, acesse `http://localhost:5173` no seu navegador.

### 📸 Telas de Captura Prévias

![Imagem da página de inicio](https://i.postimg.cc/c1P7VJ7b/breweries-homepage.png)  
![Imagem da página de detalhes de um card](https://i.postimg.cc/5Nv51MnN/brewery-details.png)
