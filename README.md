<div align="center">
 
 # DESAFIO WEB 3.0 STACKX

</div>

🌐 Trago-lhe aqui três Projetos que faz parte do Módulo Web 3.0 do curso para `Desenvolvedor Full Stack da Editech StackX`. O conceito destas aplicações, serão três Single Page Aplication, aplicadas em <i>`React`,`Angular`,`Vue.js`</i>. Cada uma foi estruturada dentro de suas particularidades e seus conceitos utilizados conforme 
a demanda dos Frameworks, Bibliotecas e Linguagens manuseadas.A intenção da construção destes Projeos será uma lista com as tecnologias a qual tem experiência, onde será feito um array no HTML e a inserção de um map para listar. Ao clicar no botão de linguagem o texto de apresentação ”Olá meu nome....” mudará para a linguagem selecionada. O botão de linguagem deve ser um componente onde passará 3 propriedades: Título, ícone e o click dele. Estarei apresentando aqui o primeiro Projeto feito em React. 
  
 ***
   
  # 🌐 Entendendo sobre o conceito React
  
 ➡ O React é a biblioteca mais popular do JavaScript e é usada para construir uma interface de usuário (IU). Ela oferece uma resposta excelente para o usuário adicionar comandos usando um novo método de renderizar sites. Os componentes dessa ferramenta foram desenvolvidos pelo Facebook. Ela foi lançada em 2013 como uma ferramenta JavaScript de código aberto. Atualmente, ela permanece na frente das suas principais competidoras, como a Angular e a Bootstrap, sendo a bibliotecas mais vendida e a mais utilizada do JavaScript.  
 
 ***
 
  # 🌐 Desafio 01 React
 
 ➡ Esta aplicação foi construida em `Reactts`, utilizando a plataforma `Vitets` que é um bundler, onde consegue usar compiladores e frameworks direto  da caixa, além da criação de hot module e replacement dentro do Projeto.

  
  <br>
  
  # <div align="center">💻 [Clique aqui para acessar o Projeto](https://desafioweb30-react.netlify.app/)
   
   ***
   
   <img src="react.png" align="center" height="500em" width="100%">
   
   ***
   
  # 🌐 Passo a Passo da contrução do Projeto
    
    
   
   ### 🌐 Criação do Projeto
   
➡ ```create vite @latest```, utilizado no PowerShell sendo uma ferramenta de linha de comando que ajuda a interagir complataforma online, navegadores e servidores.

#
 
### 🌐 Abrir o Projeto no Terminal
   
➡ ```code .```, Aplicar este comando no PowerShell para ter acesso ao Projeto no VsCode.

#

### 🌐 Corrigir Configurações no arquivo TSX
   
➡ ```yarn add --dev @types/react```, Identifica certos tipos de problemas antes mesmo de executar o código, melhorando o fluxo do desenvolvimento e corrigindo 
automaticamente os erros.

#
 
### 🌐 Executando o comando NPM
 
➡ ```npm install ```, NPM (Node Package Manager) é um controle onde iremos instalar o gerenciador de dependências e seus pacotes, através de linhas de comandos, interagindo com o repositório existente.

#
 
### 🌐 Instalando o Styled Component
   
 ➡ ```npm install --save styled-components```, é uma biblioteca em React ou React Native que nos permite criar components de estilo ao escrever códigos `CSS` dentro de um arquivo `JavaScript`.
 
 #
 
### 🌐 Instalendo o ícone do Projeto
   
➡ ``` npm add @types/styled-components -D```, Utiliza este comando no Projeto, apropriando e depurando um determinado  caso de uso, formatando os components e dando rollup para construir o Package .

#
 
### 🌐 Instalando a requisição Axios
   
➡ ``` npm install axios```, que é um `cliente HTTP`, baseado em promises para fazer requisições, podendo ser utilizado tanto no navegador, quanto no Node.js.

#
    
### 🌐 Conceito de Props
 
➡`` PROPS`` é um objeto  com dados que retorna um elemento React. Chama-se `Components de função`, porque são literalmente  atribuição ao JavaScript. São argumentos para uma funcionalidade dentro de um component react e rendeiriza os parâmetros que  deseja dar a ele. Ao clicar nos botões contendo os Países, necessita mostrar na tela os seus respectivos idiomas e para isto é necessário passar um bjeto dentro da Props para que este retorne um artefato para fazer a funcionalidade de três premissas: título, ícone e click. 

#

### 🌐 Desenvolvimento Local

➡ A masterramificação contém a versão mais recente do styled componente. Para iniciar o desenvolvimento local: ``yarn run dev`` e ``yarn start``a última etapa inicia o aplicativo de documentação como um servidor web simples em http://localhost:127 .
Podemos executar ``yarn test`` para executar o conjunto de testes e linters. Para ajudá-lo a desenvolver o componente, configuramos alguns testes que cobrem a funcionali- dade básica (podem ser encontrados em /tests). Embora testes seja prioridade, isso abrange apenas uma pequena parte do componente. É altamente recomendável adicionar  testes ao adicionar novas funcionalidades.


