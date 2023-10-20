# Teste técnico - Raphael Lima

## Como rodar o projeto?

### Frontend:

1) No repositório baixar o projeto no botão "Code" e depois "Download ZIP".
2) No terminal digitar "cd frontend" pressionar Enter e depois executar o comando "npm i".
3) No terminal executar o comando "npm run dev" e no navegador digitar "http://localhost:3000".

### Backend:

1) No repositório baixar o projeto no botão "Code" e depois "Download ZIP".
2) No terminal digitar "cd backend" pressionar Enter e depois executar o comando "npm i".
3) No terminal executar o comando "npm run start:dev".

## Tecnologias utilizadas:

### Frontend:

<ul>

  <li>ReactJS</li>

  <li>NextJS</li>

  <li>TypeScript</li>

  <li>JavaScript</li>

  <li>API Context</li>

  <li>Tailwind</li>

  <li>HTML</li>

  <li>Eslint</li>

  <li>Prettier</li>

</ul>

### Backend:

<ul>

  <li>NodeJS</li>

  <li>NestJS</li>

  <li>TypeScript</li>

  <li>JavaScript</li>

  <li>MongoDB</li>

</ul>

## Sobre o desenvolvimento:

### Organização das branchs:

1) master: Branch para produção
2) develop: Branch de desenvolvimento
3) hotfix: Branch de bugs em produção.

- Padrão de commits: Inicia com um pré-fixo (fix ou feat) seguida de uma mensagem sobre o que foi realizada naquele commit.

### Criação do layout:

Para criar o layout do meu teste técnico utilizei uma palheta de cores próxima ao da logo da DTI para dar personalidade ao projeto.

### Desenvolvimento:

O primeiro passo foi analisar os requisitos do teste técnico, mapear quais funcionalidades minha aplicação iria possuir e quais tecnologias iria utilizar, optei por utilizar ReactJS de forma estratégica, pois foi a tecnologia com maior foco no processo seletivo, também optei por usar o framework NextJS, pois é a forma mais moderna e eficiente de se desenvolver uma aplicação com ReactJS atualmente. Para o Backend decidi usar NestJS e MongoDB, pois como o tempo era relativamente curto, essa é a forma mais rápida e eficiente de se criar um backend que eu conheço. Optei por iniciar o desenvolvimento no frontend mockando os dados do anunciado, os dados que foram dados como porcentagem, exemplo: "Durante os finais de semana o preço dos banhos é aumentado em 20%", foi calculado manualmente, pois isso não seria alterado durante o desafio.

O segundo passo foi dividir a aplicação em componentes para tornar mais eficiente e organizado o seu desenvolvimento e mais fácil de dar manutenção futuramente, posteriormente analisei a relação entre os componentes e quais os estados que iriam para o contexto global da aplicação.

O terceiro passo foi a configuração do Eslint e Prettier para padronizar do código.

O quarto passo foi a criação do header de forma simples, no qual, só iria possuir o logo da DTI.

O quinto passo foi o desenvolvimento do formulário, para a realização dessa tarefa utilizar o "React Hook Forms", para melhorar a performance da aplicação e facilita o desenvolvimento do componente, e a biblioteca "Yup" para realizar as validações de forma mais simples e de mais fácil manutenção. As validações criadas foram:

1) A data do banho dos cachorros deve ser maior que a data atual.
2) Os campos de quantidade de cachorros para o banho não podem assumir valores negativos.
3) Os campos de quantidade de cachorros para o banho não podem assumir valores que não são inteiros.
4) Os campos de quantidade de cachorros para o banho não podem assumir valores nulos simultaneamente.

O sexto passo foi criar o contexto e os estados globais, pois iriar utilizar os dados passados no formulário para o componente modal, que seria responsável por mostrar para o usuário qual seria o melhor petshop para levar os cachorros, além disso eu iria utilizar um estado só para controlar quando esse modal iria ser renderizado.

O sétimo passo foi criar a função e componente que mostra essa resposta, a função basicamente verifica qual dia da semana que é, armzena em um array o quanto iria ser gastado e cada petshop, acha o valor mínimo no array e armazena em um outro array os petshops onde iria ser gasto esse valor, se esse array tiver mais de uma posição é verificado qual é o petshop com menor distância.

O último passo foi a criação do backend, para isso apenas criei um CRUD, minha aplicação apenas iria consumir o método "GETALL" da minha API, deixando o processamento e para decidir qual o melhor petshop no frontend, decidi fazer dessa forma para demonstrar mais meus conhecimentos com ReactJS mesmo sabendo que isso é menos performático. Também criei outros métodos do CRUD para demonstrar meus conhecimentos embora minha aplicação não utilize.

## Ficaria feliz com Feedbacks:

E-mail: raphaeldesousalm@gmail.com <br>

Portfólio: https://raphael-lima-portfolio.netlify.app/

Linkdin: https://www.linkedin.com/in/raphaellima98/
