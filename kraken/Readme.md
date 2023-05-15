## Ejecutar pruebas con Kraken

- Este proyecto contiene dos proyectos de kraken configurados para dos versiones diferentes de Ghost `kraken/3.41/` y `kraken/4.44`, para ejecutar las pruebas de cada version debe haber completado la instalación de Ghost para las dos versiones y haber creado los usuarios con correo "test@test.com" y contraseña "Test123456!".

- Instalar kraken
```
npm install kraken-node
```
- Instalar apium
```
npm install -g appium
```
- Instalar cucumber
```
npm install -g cucumber
npm i @cucumber/cucumber@7.2.1
npm install --save-dev chai
```
- Cada proyecto Actualizar el archivo kraken/properties.json con los datos configurados en Ghost
```
{
    "HOST": "http://localhost:2368/",
    "USERNAME": "test@test.com",
    "PASSWORD": "Test123456!"
}
```
- Para ejecutar las pruebas debe ir a la carpeta kraken del repositorio 
```
cd Kraken
```

- Seleccione un escenario de pruebas de la carpeta kraken/scenarios y copiela a la carpeta kraken.


- Ejecutar el escenaro seleccionado de las pruebas end to end 
```
npx kraken-node run
```
