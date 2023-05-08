Para la ejecución de este proyecto usted debe tener la version de ghost:
Ghost-CLI version: 1.24.0
Ghost version: 5.47.0
y ejecutar los siguientes comandos dentro de el repositorio de playwrite:
npm install
npm init playwright@latest --yes -- --quiet --browser=chromium --browser=firefox --browser=webkit --gha
npm i @cucumber/cucumber -D
npm i ts-node -D  
Con respecto a los patrones el primero de pageObject-> Estos estan representados en los objetos de login page y principalpage, los cuales tienen la logica, para así abstraer aun más todo lo que es la logica, por otro lado se usaron en todo locators para tener buenas practicas.
Mientras que el segundo patron lo hicimos, integrando playwright con cucumber