# Pruebas automatizadas ghost

En este repositorio podemos encontrar los scripts para ejecutar las pruebas end to end de Ghost.

En la carpeta Kraken del repositorio podemos encontrar la implementación de kraken, donde, los escenarios de prueba programados para las diferentes funcionalidades estan en la carpeta kraken/scenarios/.

## Pre-requisitos
Node v12.22.12 o v14.21.3

## Instalar Ghost
[Instalacion ghost-Docker](https://github.com/leinaro/MISW4103-Ghost-Pruebas-Automatizadas/wiki/Instalacion-Ghost-Con-Docker)

## Ejecutar pruebas con Kraken
Las instrucciones para ejecutar las pruebas con Kraken estan en el siguiente link -> [kraken](https://github.com/leinaro/MISW4103-Ghost-Pruebas-Automatizadas/blob/main/kraken/Readme.md)

## Ejecutar pruebas con Playwrite
Las instrucciones para ejecutar las pruebas con Playwrite estan en el siguiente link -> [Playwrite](https://github.com/leinaro/MISW4103-Ghost-Pruebas-Automatizadas/blob/main/playwrite/README.md)

## Generar reporte de regresion visual
Las instrucciones para ejecutar las el reporte de regresión visual están en el siguiente link -> [Reporte](https://github.com/leinaro/MISW4103-Ghost-Pruebas-Automatizadas/blob/main/reporte/Readme.md)

## Pruebas de regresion visual
EL video con los cambios realizados para poder realizar la regresión visual está en el siguiente link->[Video](https://uniandes-my.sharepoint.com/:v:/g/personal/ia_rojas2_uniandes_edu_co/EXn0HnbXGwtLu7HPaa2Zmg4By2-nEBETzP8T29UoOEqAPA?e=gasExK) 

## Estrategias para la generación de datos
Le siguiente enlace podra encontrar las estrategias para la generación de datos en kraken y playwrite -> [Generación de datos](https://github.com/leinaro/MISW4103-Ghost-Pruebas-Automatizadas/wiki/Escenarios-de-prueba-de-validaci%C3%B3n-de-datos)

## Escenarios de prueba 

Los escenarios y casos de pruebas incluidos en cada herramienta se pueden ver en la siguiente lista de funcionalidades

### Funcionalidades
Las funcionalidades a probar se escogieron de la lista de funcionalidades definida 
(aquí)[https://github.com/leinaro/MISW4103-Ghost-Pruebas-Automatizadas/wiki/Listado-de-funcionalidades]

1. Crear Post 
2. Eliminar Post
3. Editar Post 
4. Agregar Usuario
5. Modificar usuario 


### Casos de prueba

| escenario     | caso de pruaba       | kraken |
| ------------- | -------------------- |--------|
|1. Crear Post ||
| crear post y publicarlo |- Iniciar sesion, hacer click en el boton new post de la barra lateral, agregar titulo, agregar contenido lorem ipsum, hacer click en publicar, hacer click en publicar sin modificar opciones. Navegar a la lista publicados (http://localhost:3001/ghost/#/posts?type=published), y validar que el nuevo post se creo. |x|
| crear post en draft |- Iniciar sesión, hacer click en el boton new post de la barra lateral, agregar titulo, agregar contenido lorem ipsum, sin hacer click en publicar navegar (http://localhost:3001/ghost/#/posts?type=draft), y validar que se creo el borrador. |x|
| crear post en schedule |- Iniciar sesion, hacer click en el tab Posts de la barra lateral, hacer click en el boton new post del contenido, agregar titulo, agregar contenido lorem ipsum, hacer click en publicar, seleccionar una fecha en el futuro, hacer click en schedule. Navegar a la lista schedule (http://localhost:3001/ghost/#/posts?type=scheduled), y validar que el nuevo post se creo. |x|
| crear post y agregar tag |- Iniciar sesion, hacer click en el tab Posts de la barra lateral, hacer click en el boton new post del contenido, agregar titulo, agregar contenido lorem ipsum, click en settings, agregar tag, hacer click en publicar,  Navegar a la lista publicados (http://localhost:3001/ghost/#/posts?type=published) y validar que el nuevo post se creo.|x|
|crear post agregar url  |- Iniciar sesion, hacer click en el tab Posts de la barra lateral, hacer click en el boton new post del contenido, agregar titulo, agregar contenido lorem ipsum, click en settings, agregar url, hacer click en publicar,  Navegar a la lista publicados (http://localhost:3001/ghost/#/posts?type=published) y validar que el nuevo post se creo. navegar a la nueva url y validar que es la nueva url.|x|
|2. Eliminar Post|||
|eliminar post publicado|- Crear un post y publicar post, navegar a publicados, seleccionar el post creado, click en settings, click en delete post, confirmar delete, navegar a post publicados, validar que no existe el post eliminado.|x|
|eliminar post en draft |- Crear un post y guardar draft, navegar a draft, seleccionar el post en draft, click en en settings, click en delete post, confirmar delete, navegar a post draft, validar que no existe el post eliminado.|x|
| eliminar post en schedule|- Crear un post y programar publicación, navegar a schedule, seleccionar el post en schedule, click en en settings, click en delete post, confirmar delete, navegar a post schedule, validar que no existe el post eliminado.|x|
|eliminar post con url |- Crear un post, click en en settings, click en delete post, confirmar delete, navegar a post draft, validar que no existe el post eliminado.|x|
|eliminar post con tag |- Crear un post y publicar post, click en settings, agregar tag, click en delete post, confirmar delete, navegar a post publicados, validar que no existe el post eliminado.|x|
|3. Editar Post|||
|cambiar titulo y contenido de un post|- Iniciar sesión, crear post con nombre y una descripción, publicar post, verificar que el post se creará, entrar en el post creado, editar Post, cambiarle el título y la descripción, publicar post, navegar a post publicados, encontrar el post que se modificó, entrar  el post modificado, confirmar que los cambios se realizaron.| X |
|editar post cambiar atributos|- Iniciar sesión, ir a la pestaña de post, crear post con nombre y una descripción, publicar post, verificar que el post se creará, entrar en el post creado, editar Post, cambiarle el título y la descripción, publicar post, navegar a post publicados, encontrar el post que se modificó, entrar  el post modificado, confirmar que los cambios se realizaron.| x|
|editar post en draft |- Iniciar sesión, ir a la pestaña de post, crear post con nombre y una descripción, publicar post, verificar que el post se creará, entrar en el post creado, editar Post, eliminar la descripción actualizar post, navegar a drafts de los post, encontrar el post que se modificó, entrar el el post modificado, confirmar que los cambios se realizaron.|x|
|editar post Schedule |- Iniciar sesión, ir a la pestaña de post, crear post con nombre y una descripción, guardar como schedule, verificar que el post se creará, navegar a shceduled posts , entrar en el post creado, editar post, guardar, calidar cambios en la lista de schedule|
|4. Agregar Usuario|||
|agregar staff|- Iniciar sesión, ir a la pestaña staff, click invite staff agregar un correo y por último dar click en invitar, navegar a staff y verificar que se haya agregado correctamente. | x |
|validar ventana envio correo |- Iniciar sesión, ir a la pestaña miembros, click nuevo miembro completar los campos y agregar un email, click en crear usuario, verificar aparición de ventana avisando del envío del correo de confirmación.||
| |- Iniciar sesión, ir a la pestaña staff, click nuevo miembro completar los campos y agregar una descripción que sea mayor a 200 palabras, dar en crear usuario, deberá avisar sobre la posible falla.||
| agregar staff sin correo|- Iniciar sesión, ir a la pestaña miembros, click invitar staff, completar los campos sin correo , click en invitar, deberá mostrar el error Email invalido| x|
| *agregar staff sin nombre|- Iniciar sesión, ir a la pestaña miembros, click nuevo miembro completar los campos excepto el nombre , dar en crear usuario, deberá avisar sobre la posible falla.||
|5. Modificar usuario |||
|cambiar nombre |- iniciar sesión, navegar al detalle de un miembro, modificar nombre del usuario o miembro, clic en guardar y verificar que se los cambios se encuentren | x |
| modificar correo|- iniciar sesión, ir a la pestaña miembros, clic el usuario o miembro creado, modificar correo del usuario o miembro, clic en guardar y verificar que se los cambios se encuentren |x|
|* modificar nota|- iniciar sesión, ir a la pestaña miembros, clic el usuario o miembro creado, modificar nota del usuario o miembro, clic en guardar y verificar que se los cambios se encuentren| |
|* modificar bio|- iniciar sesión, ir a la pestaña miembros, clic el usuario o miembro creado, modificar bio del usuario o miembro, clic en guardar y verificar que se los cambios se encuentren| |


## Integrantes
- Jesús Dario Rios Rosas        jd.rios2@uniandes.edu.co
- Inés Adela Rojas León         ia.rojas2@uniandes.edu.co
- Erich Giusseppe Soto Parada   eg.soto@uniandes.edu.co
- Andersson Avila Rojas	        a.avilar2@uniandes.edu.co
