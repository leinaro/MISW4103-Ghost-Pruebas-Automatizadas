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
Ahora para correr los test es necesario crear un usuario, (esto para ambas versiones ) una vez instale la aplicación el usuario tiene que tener los siguientes parametros:

Site title: Pruebas site
Full name: Erich Giusseppe
Email address: eg.soto@uniandes.edu.co
Password: Supermean_1

## Ejecucion de los dos entornos
Para ejecutar ambos entornos se necesitan dos versiones la 3.42 de ghost y la version 5.47.0 de ghost, por ende para ello, se necesita que se intale en el local la version 5.47.0 de ghost se ejecute y se haga el usuario respectivo y se ejecute la version 3.42 con docker.
docker run -d -e url=http://localhost:3001 -p 3001:2368 --name ghost_3.42 ghost:3.42
si tienen windows va a tener que instalar docker desktop y pasarle ese mismo contanto y hacerle run mediante la interfaz grafica.



