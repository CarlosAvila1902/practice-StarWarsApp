## Desarrollar una aplicación web interactiva utilizando React y React Router DOM que muestre datos de la API de Star Wars (SWAPI). La aplicación debe permitir a los usuarios explorar diferentes recursos de Star Wars (personajes, películas, naves, etc.) y ver detalles específicos de cada uno.

+ La aplicación debe tener una página de inicio o una barra de navegación que permita al usuario seleccionar qué tipo de recurso de Star Wars desea explorar (ej. "Personajes", "Películas", "Naves Estelares").
Al seleccionar un tipo de recurso, la aplicación debe mostrar una lista paginada de los elementos disponibles para ese recurso (ej. una lista de personajes).
Cada elemento en la lista debe mostrar información básica relevante (ej. nombre del personaje, título de la película).

+ Al hacer clic en un elemento de la lista, la aplicación debe navegar a una vista de detalle para ese elemento específico.
+ La vista de detalle debe mostrar toda la información relevante disponible en la API para ese recurso individual.
+ Si un detalle contiene enlaces a otros recursos de la API (ej. un personaje tiene una lista de películas en las que aparece), estos enlaces deben ser navegables dentro de la aplicación para llevar al usuario a la vista de detalle de ese recurso relacionado.

+ Toda la información mostrada en la aplicación debe ser obtenida directamente de la API de SWAPI.
Se deben manejar los estados de carga y errores de la API.

+ La aplicación debe ser construida íntegramente con React. Se espera un uso adecuado de componentes, estado (state) y propiedades (props).
+ La navegación entre las vistas de lista y las vistas de detalle debe ser manejada con React Router DOM. Se debe hacer un uso correcto de BrowserRouter, Routes, Route, Link o NavLink, y useParams (o el hook equivalente para obtener parámetros de la URL).
+ El código debe estar bien organizado en una estructura de carpetas lógica (ej. componentes, páginas/vistas, servicios/api).
Si bien no es el foco principal, una interfaz de usuario limpia y funcional será valorada. Puedes usar CSS plano, SASS/LESS, o liwbrerías de componentes UI si lo deseas.

+ Un repositorio de Git (GitHub, GitLab, Bitbucket) con el código fuente del proyecto.