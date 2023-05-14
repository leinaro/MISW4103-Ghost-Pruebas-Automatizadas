# Playwrite
Para la ejecución de este proyecto usted debe tener la version de ghost:
Ghost-CLI version: 1.24.0
Ghost version: 5.47.0
y ejecutar los siguientes comandos dentro de el repositorio de playwrite:
```
npm install
npm init playwright@latest --yes -- --quiet --browser=chromium --browser=firefox --browser=webkit --gha
npm i @cucumber/cucumber -D
npm i ts-node -D 
npm i typescript
```
## Patrones
Con respecto a los patrones el primero de pageObject -> Estos estan representados en los objetos de login page y principalpage, los cuales tienen la logica, para así abstraer aun más todo lo que es la logica, por otro lado se usaron en todo locators para tener buenas practicas.
Mientras que el segundo patron lo hicimos, integrando playwright con cucumber

## Ejecutar las pruebas
Ahora para correr los test es necesario crear un usuario, una vez instale la aplicación el usuario tiene que tener los siguientes parametros:

Site title: Pruebas site
Full name: Erich Giusseppe
Email address: eg.soto@uniandes.edu.co
Password: Supermean_1

Para ejecutar las primeras 11 pruebas, ejecute el comando:
```
npm test
Para ejecutar las otras 9 pruebas:
```
