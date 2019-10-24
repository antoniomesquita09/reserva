#Documentação Desafio de Desenvolvimento Produtos Digitais

Após extrair os arquivos da aplicação do arquivo **.zip** precisaremos ter instalado algumas ferramentas para executar o programa da perfeitamente!

Caso já tenha o NodeJs instalado no seu computador pode pular as próximas etapas (para checar basta rodar o seguinte comando no terminal: `node --version`).

### Instalando o NodeJs

_MacOs
``` curl "https://nodejs.org/dist/latest/node-${VERSION:-$(wget -qO- https://nodejs.org/dist/latest/ | sed -nE 's|._>node-(._)\.pkg</a>._|\1|p')}.pkg" > "$HOME/Downloads/node-latest.pkg" && sudo installer -store -pkg "$HOME/Downloads/node-latest.pkg" -target "/" `ou`brew install node```

\*Debian e Ubuntu
`pkg install node`

\*Windows
Faça download do [Windows Installer](https://nodejs.org/en/) diretamente no site oficial do NodeJs.

Agora você provavelmente verá a sua versão do node ao digitar o comando `node -v` ou `npm -v` no terminal.

##Iniciando a aplicação

Dentro da pasta raiz da nossa aplicação execute os seguintes comandos:

Para instalar todas as dependências necessárias para o funcionamento correto do programa
`npm install`

Para iniciar a aplicação localmente
`npm start`

Se tudo deu certo até aqui você estará vendo algo parecido com isso:

<img src="https://testes-tonin.s3-sa-east-1.amazonaws.com/Screen+Shot+2019-10-24+at+3.51.57+PM.png">

Agora basta abrir o seu navegador preferido e entrar na seguinte URL:
`http://localhost:3333/`
