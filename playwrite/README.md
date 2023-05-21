# Playwrite
Para la ejecución de este proyecto usted debe tener la version de ghost:
Ghost-CLI version: 1.24.0
Ghost version: 5.47.0
Despues de tener instalada la version de ghost de forma local, dentro de la carpeta donde usted pone ghost start, para iniciar este, debera encontrar un archivo .json llamado config.development.json, y aca añadira la siguiente linea de codigo al .json:
```
  "spam": {
    "user_login": {
        "minWait": 0,
        "maxWait": 0,
        "freeRetries": 50
    }
  }
 ```
 Ejemplo de esto:
![imagen](https://github.com/leinaro/MISW4103-Ghost-Pruebas-Automatizadas/assets/63005873/c612f1ab-d590-4641-a607-fb2889e0ca94)
y ejecutar los siguientes comandos dentro de el repositorio de playwrite:
```
npm install
npm init playwright@latest --yes -- --quiet --browser=chromium --browser=firefox --browser=webkit --gha
npm i @cucumber/cucumber -D
npm i ts-node -D 
npm i typescript
npm install faker
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
## Con respecto a los nuevos test y fallas en estos.
En estas pruebas ahora van a haber algunos casos de prueba donde existan fallas en los test.
Todas estas fallas son bugs y estan reportadas en el repositorio como issues.

## Con respecto a las pruebas hechas con playwright 
En su mayoria se utilizo la estrategia con faker de generación de datos online, y por otro lado tambien se implementarion, para el loggin de forma correcta, un pool de datos, pero dado que solo se tiene por la ejecición local del ghost un usuario administrador este esta representado como texto que se le envia directamente en las pruebas siendo un pool de un usuario y una contraseña.



