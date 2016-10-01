# asturiashacking.github.io

Este repositorio contiene el código fuente para la página web oficial de [AsturiasHacking](http://asturiashacking.org). El sitio web está construido utilizando el generador [Hugo](https://gohugo.io/) y servido desde [Github Pages](https://pages.github.com/)


## Organización del repositorio

* `source`: contiene el código fuente del sitio web. Todos los desarrollos sobre la aplicación deben partir de esta rama y deben terminar mergeados en ella.
* `master`: contiene el sitio web estático generado por Hugo. Esta rama es la que utiliza Github Pages para servir la información. Su contenido **nunca** se debe modificar manualmente. Todos los cambios se producen mediante la utilización del *script* `deploy.sh` que se encuentra en la rama `source`.

## Dependencias

Para poder ejecutar el proyecto, sólo es necesario tener instalados [Docker y Docker Compose](https://docs.docker.com/engine/installation/#installation) (disponibles para Windows, macOS y Linux).

## Ejecución del proyecto

Con todas las dependencias instaladas, sólo será necesario ejecutar la siguiente orden en una terminal (desde el directorio raíz del proyecto): `docker-compose up`. La primera vez que se ejecute la orden anterior, es posible que el proceso tarde unos cuantos minutos (dependiendo de la velocidad de conexión a Internet), pero será el momento en que Docker esté instalando todas las dependecias para ejecutar el proyecto.

Cuando el proceso de instalación termine, el sitio web se estará siriviendo en la siguiente dirección: `http://localhost:1313`.

## Otras tecnologías

### Gulp

Se utiliza para el procesamiento de CSS mediante [PostCSS](http://postcss.org/). `docker-compose up` se encarga de arrancar la tarea `server` definida en el `gulpfile.js` para procesar los ficheros CSS y levantar el entorno de Hugo.

### PostCSS

Los plugins de PostCSS soportados son:

* [cssnano](http://cssnano.co/)
* [cssnext](http://cssnext.io/)
* [postcss-import](https://github.com/postcss/postcss-import)
