# Pruebas automatizadas ghost

## Integrantes
- Jesús Dario Rios Rosas        jd.rios2@uniandes.edu.co
- Inés Adela Rojas León         ia.rojas2@uniandes.edu.co
- Erich Giusseppe Soto Parada   eg.soto@uniandes.edu.co
- Andersson Avila Rojas	        a.avilar2@uniandes.edu.co

## Escenarios de prueba 
### Funcionalidades
Las funcionalidades a probar se escogieron de la lista de funcionalidades definida (aquí)[https://github.com/leinaro/MISW4103-Ghost-Pruebas-Automatizadas/wiki/Listado-de-funcionalidades]

1. Crear Post 
2. Eliminar Post
3. Editar Post 
4. Agregar Usuario
5. Modificar usuario 
6. Eliminar usuario usuario 

### Casos de prueba

 1. Crear Post 

- Iniciar sesion, hacer click en el boton new post de la barra lateral, agregar titulo, agregar contenido lorem ipsum, hacer click en publicar, hacer click en publicar sin modificar opciones. Navegar a la lista publicados (http://localhost:3001/ghost/#/posts?type=published), y validar que el nuevo post se creo. 
- Iniciar sesión, hacer click en el boton new post de la barra lateral, agregar titulo, agregar contenido lorem ipsum, son hacer click en publicar navegar (http://localhost:3001/ghost/#/posts?type=draft), y validar que se creo el borrador. 
- Iniciar sesion, hacer click en el tab Posts de la barra lateral, hacer click en el boton new post del contenido, agregar titulo, agregar contenido lorem ipsum, hacer click en publicar, seleccionar una fecha en el futuro, hacer click en schedule. Navegar a la lista schedule (http://localhost:3001/ghost/#/posts?type=scheduled), y validar que el nuevo post se creo. 
- Iniciar sesion, hacer click en el tab Posts de la barra lateral, hacer click en el boton new post del contenido, agregar titulo, agregar contenido lorem ipsum, click en settings, agregar tag, hacer click en publicar,  Navegar a la lista publicados (http://localhost:3001/ghost/#/posts?type=published) y validar que el nuevo post se creo.
- Iniciar sesion, hacer click en el tab Posts de la barra lateral, hacer click en el boton new post del contenido, agregar titulo, agregar contenido lorem ipsum, click en settings, agregar url, hacer click en publicar,  Navegar a la lista publicados (http://localhost:3001/ghost/#/posts?type=published) y validar que el nuevo post se creo. navegar a la nueva url y validar que es la nueva url.

2. Eliminar Post
- Crear un post y publicar post, navegar a publicados, seleccionar el post creado, click en settings, click en delete post, confirmar delete, navegar a post publicados, validar que no existe el post eliminado.
- Crear un post y guardar draft, navegar a draft, seleccionar el post en draft, click en en settings, click en delete post, confirmar delete, navegar a post draft, validar que no existe el post eliminado.
- Crear un post y programar publicación, navegar a schedule, seleccionar el post en schedule, click en en settings, click en delete post, confirmar delete, navegar a post schedule, validar que no existe el post eliminado.
- Crear un post, click en en settings, click en delete post, confirmar delete, navegar a post draft, validar que no existe el post eliminado.
- Crear un post y publicar post, click en settings, click en delete post, confirmar delete, navegar a post publicados, validar que no existe el post eliminado.

3. Editar Post
- Iniciar sesión, ir a la pestaña de post, crear post con nombre y una descripción, publicar post, verificar que el post se creará, entrar en el post creado, editar Post, cambiarle el título y la descripción publicar post, navegar a post publicados, encontrar el post que se modificó, entrar el el post modificado, confirmar que los cambios se realizaron. 
- Iniciar sesión, ir a la pestaña de post, crear post con nombre y una descripción, publicar post, verificar que el post se creará, entrar en el post creado, editar Post, eliminar la descripción publicar post, navegar a drafts de los post, encontrar el post que se modificó, entrar el el post modificado, confirmar que los cambios se realizaron.
- Iniciar sesión, ir a la pestaña de post, crear post con nombre y una descripción, publicar post, verificar que el post se creará, entrar en el post creado, entrar en la pestaña de settings,

3. Editar Post
- Iniciar sesión, ir a la pestaña de post, crear post con nombre y una descripción, publicar post, verificar que el post se creará, entrar en el post creado, editar Post, cambiarle el título y la descripción publicar post, navegar a post publicados, encontrar el post que se modificó, entrar el el post modificado, confirmar que los cambios se realizaron. 
- Iniciar sesión, ir a la pestaña de post, crear post con nombre y una descripción, publicar post, verificar que el post se creará, entrar en el post creado, editar Post, eliminar la descripción publicar post, navegar a drafts de los post, encontrar el post que se modificó, entrar el el post modificado, confirmar que los cambios se realizaron.
- Iniciar sesión, ir a la pestaña de post, crear post con nombre y una descripción, publicar post, verificar que el post se creará, entrar en el post creado, entrar en la pestaña de settings,

4. Agregar Usuario
- iniciar sesión, ir a la pestaña miembros, click nuevo miembro completar los campos y por último dar click en guardar, ingresar a miembros y verificar que se haya agregado correctamente. 

5. Modificar usuario 
- iniciar sesión, ir a la pestaña miembros, clic el usuario o miembro creado, modificar nombre del usuario o miembro, clic en guardar y verificar que se los cambios se encuentren 
- iniciar sesión, ir a la pestaña miembros, clic el usuario o miembro creado, modificar correo del usuario o miembro, clic en guardar y verificar que se los cambios se encuentren 
- iniciar sesión, ir a la pestaña miembros, clic el usuario o miembro creado, modificar nota del usuario o miembro, clic en guardar y verificar que se los cambios se encuentren 
