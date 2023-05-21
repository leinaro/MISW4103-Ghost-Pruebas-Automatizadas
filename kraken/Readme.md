# Kraken

- Este repositorio contiene dos proyectos de kraken configurados para dos versiones diferentes de Ghost `kraken/3.41/` y `kraken/4.44`, para ejecutar las pruebas de cada version debe haber completado la instalación de Ghost para las dos versiones y haber creado los usuarios con correo "test@test.com" y contraseña "Test123456!".

## Instalar Kraken

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

## Ejecutar pruebas con Kraken

- Cada proyecto de kraken tiene un archivo de configuración `kraken/3.41/properties.json` y `kraken/4.44/properties.json`, donde estan configurados los datos que van a ser usados por la herramienta de automatización, en caso de haber configurado un correo y contraseña diferente al indicado debe actualizar este archivo.
```
//`kraken/3.41/properties.json`
{
    "HOST": "http://localhost:3001/",
    "USERNAME": "test@test.com",
    "PASSWORD": "Test123456!"
}

`kraken/4.44/properties.json`
{
    "HOST": "http://localhost:3001/",
    "USERNAME": "test@test.com",
    "PASSWORD": "Test123456!"
}
```

- Para la versión 3.41, en la carpeta `/kraken/3.41/features/` se encuentran las carpetas apriori, faker y mockaroo con los archivos `*.features` configurados para las pruebas de regresión visual con diferentes estrategias de generación de datos. Para sistemas operativos MAC, puede ejecutar las pruebas al mismo tiempo. Para sistemas operativos Windows, debe mantener solo un `*.feature` en la carpeta `/kraken/3.41/features/` y ejecutar las pruebas una a una. Si quiere ejecutar otros escenarios puede seleccionar el escenario de pruebas de la carpeta `/kraken/3.41/features/scenarios/` y **copiarlo** a la carpeta `/kraken/3.41/features/`.

- En la linea de comandos navegue hasta la ubicación del proyecto, ejecuté el siguiente comando para ir a la carpeta `kraken/3.41/  
```
cd kraken/3.41
```
- Ejecutar el escenaro seleccionado de las pruebas end to end 
```
npx kraken-node run
```
Este comando ejecutará las pruebas para los escenarios que se encuentren en `/kraken/3.41/features/` y guardara las screenshots en el a carpeta del repository con el nombre del escenario `{path del proyecto}/screenshots/3-41/{nombre del escenario}/`

- Para la versión 4.44, ejecute los mismos pasos pero desde la carpeta `/kraken/4.44`.
