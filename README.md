# Teste tecníco - Raphael Lima

## Como rodar o projeto?

Clique no link: https://softruck-frontend.vercel.app/

## Tecnologias utilizadas:

<ul>

  <li>TypeScript</li>

  <li>JavaScript</li>

  <li>ReactJS</li>

  <li>API Context</li>

  <li>SCSS</li>

  <li>HTML</li>

</ul>

## Sobre o desenvolvimento:

### Organização das branchs:

1) master: Branch para produção
2) develop: Branch de desenvolvimento
3) hotfix: Branch de bugs em produção.
4) main: Branch de testes para o desenvolvimento.

- Padrão de commits: Inicia com um pré-fixo (fix ou feat) seguida de uma mensagem sobre o que foi realizada naquele commit.

### Criação do layout:

Para criar o layout do meu teste técnico utilizei uma palheta de cores próxima ao do site da softruck para dar personalidade ao projeto e me baseie no Google Maps para melhorar a experiência do usuário, pois o Google Maps é algo que as pessoas usam muito em seu cotidiano, logo já estão acostumadas ao seu uso e isso facilita o uso da minha aplicação consequentemente.

### Desenvolvimento:

O primeiro passo foi dividir a aplicação em componentes para torna mais eficiente o seu desenvolvimento, organizada e mais fácil de dar manutenção futuramente, posteriormente analisei a relação entre os componentes e quais os estados que iriam para o contexto global da aplicação.

O segundo passo foi a configuração do Eslint e Prettier para melhorar a padronização do código e o setup do projeto.

O terceiro passo foi a criação do header com a funcionalidade de internalização, pois a medida que ocorra a adição de texto já é interessante adicionar a tradução desses, como a softruck atua na América Latina foi escolhido o português, inglês e espanhol.

O quarto passo foi analisar os dados vindo do arquivo JSON da aplicação, quais seriam mais interessantes para o usuário, feita essa seleção foi criado vários helpers para tratar cada tipo de dado e criado um componente próprio para isso.

O quinto passo foi estudar e analisar as APIs de funcionalidades de mapa e deslocamento para escolher qual seria utilizada, como meu layout seria baseado no Google Maps e eu gostei da sua documentação optei pela API GOOGLE MAPS. Posteriormente foi feita sua integração com react.

O último passo foi a funcionalidade de rotação do marcador do mapa, na documentação da api do Google Maps mostra que é possível rotacionar essa imagem passando o path da imagem e com a propriedade rotation achei essa possibilidade mais interessante e fácil do que trocar a imagem de posição como foi citado no enunciado do desafio, perguntei se poderia fazer isso e me foi confirmado que sim. Realizado essa função foi criado também o display da velocidade, o botão de parar a simulação, a possibilidade do usuário trocar de rota e o controle de mudança de posição do carro de acordo com a velocidade.

## Ficaria feliz com Feedbacks:

Email: raphaeldesousalm@gmail.com <br>

Portfólio: https://raphael-lima-portfolio.netlify.app/

Linkdin: https://www.linkedin.com/in/raphaellima98/
