# Projeto Let Me Ask

<div>
    <img src="https://ik.imagekit.io/6ktc8znrdv0/Screenshot_from_2021-06-27_10-09-55_y9mj0mbkQ.png">
    <img src="https://ik.imagekit.io/6ktc8znrdv0/Screenshot_from_2021-06-27_10-26-38_9gYA9Nbdx.png">
    <img src="https://ik.imagekit.io/6ktc8znrdv0/Screenshot_from_2021-06-27_10-25-14_-68F_wOuB.png">
    <img src="https://ik.imagekit.io/6ktc8znrdv0/Screenshot_from_2021-06-27_10-28-22_Za8SGQ4E7.png">
</div>

## Sobre

#### O projeto **Let me Ask**, foi desenvolvido no **NLW Together** da **Rocketseat**, com a finalidade de criar salas/entrar em salas existentes e poder enviar perguntas sobre determinado tema que esteja sendo abordado em uma live ou algum conteúdo em que os usuários possam interagir para tirar suas dúvidas.
---
## Tecnologia

- [ReactJS](https://reactjs.org)
- [Styled Components](https://styled-components.com/)
- [Sass](https://sass-lang.com/)
- [Firebase](https://firebase.google.com/)

Obs: para usar o **Firebase** na aplicação será necessário que você
crie uma conta(free) no site do **Firebase**, e dentro da raiz do projeto crie um arquivo .env.local adicionando as variavéis abaixo, com suas credenciais obtidas no mesmo site.
``` bash

#env.local
REACT_APP_API_KEY=(Key)
REACT_APP_AUTH_DOMAIN=(Domain)
REACT_APP_DATABASE_URL=(Url)
REACT_APP_PROJECT_ID=(Id Projeto)
REACT_APP_STORAGE_BUCKET=(Storage)
REACT_APP_MESSAGING_SENDER_ID=(IdMessage)
REACT_APP_APP_ID=(Id App)

```

## Como executar o projeto

```bash

   # clonar o repósitorio
   $ git clone https://github.com/claudiadevsp/letmeask-rocketseat.git

   # entrar no diretório
   $ cd letmeask-rocketseat

   # instalar dependências
   $ yarn install

   # iniciar o projeto
   $ yarn start
