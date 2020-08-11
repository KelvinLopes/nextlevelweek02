# Proffy

<p align="center"> 
  <img align="center"       src="https://raw.githubusercontent.com/KelvinLopes/nextlevelweek02/22df49aef153e518e01cdacc82d354f8f6c8430c/nlw/web/src/assets/images/landing.svg" width="800" heigth="900" align="center" alt="Proffy" />
 </p>
 
 
<p>
  Objetivo do Proffy é conectar alunos e professores, facilitando a comunicação entre eles.
  Onde se tem conhecimento se cria as melhores soluções, por isso é muito importante o aprendizado de todo ser humano
  e para ele não se pode ter barreiras é aqui que entra o Proffy.
</p>

## Alguns recursos

* Adicionar professores como favoritos para facilitar contratá lós novamente ou para encontrá los mais rapidamente,
* Entrar em contato via WhatsApp com os professores

## Tecnologias

<p>
  Desenvolvido em ReactJS, ReactNative via Expo-Cli, NodeJS com TypeScript, sqLite3 e Knex.
</p>

## Rodando a API

Use o comando abaixo:
``` yarn start ```

Para manipular as migrations consulte a documentação do <a href="http://knexjs.org/" > Knex </a>. 

Se usar o VS Code, pode usar a extensão do <a href="https://marketplace.visualstudio.com/items?itemName=alexcvzz.vscode-sqlite" > SQlite </a>

## Rodando a aplicação web

Use o comando abaixo:
``` yarn start ```

## Rodando o app

use ``` expo start ```, se estiver rodando em outro local como o Gitpod por exemplo rode o comando ``` expo start --tunnel ```

__Problemas de conexão com o Expo-Cli__

<p>
  Se você usa Android pode conectar via cabo USB, fazer a depuração usb para isso não se esqueça de ativar a função programador.
  Acesse o diretório que contenha as ferramentas do Android em sua máquina e rode o comando:
</p>

  ```~/Android/Sdk/platform-tools/adb devices ```
  
  __Libere as portas__ 19000, 19001 e 19002 caso estiver no Linux, sempre que reiniciar o sistema precisará executar novamente esses comandos:
  
  *  ``` sudo apt update ```,
  * ``` sudo apt install iptables ```,
  * ``` sudo /sbin/iptables -I INPUT -p tcp --dport 19000 -j ACCEPT ```,
  * em seguida  ``` sudo /sbin/iptables -I INPUT -p tcp --dport 19001 -j ACCEPT ```,
  * e após ``` sudo /sbin/iptables -I INPUT -p tcp --dport 19002 -j ACCEPT ``` 
  * e agora é só rodar ``` ~/Android/Sdk/platform-tools/adb reverse tcp:3333 tcp:3333 ```, 
  desse modo o app já conseguirá se conectar com a api que usa a porta 3333 no seu dispositivo __físico__


# Dicas
## Atualize/instale a libs


 Para isso, rode com o comando ``` yarn upgrade ``` e ``` yarn ```

* Instale de forma global o <a href="https://docs.expo.io/workflow/expo-cli/" > Expo-Cli </a>
* Tenha um ambiente preparado para ReactJS e React Native
* Instale o NodeJS




