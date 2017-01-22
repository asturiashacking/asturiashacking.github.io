+++
title = "devops day"
date = "2017-01-04"
+++

# 20170104 DevOps Day

En esta sesión disfrutamos de las ponencias de 3 profesionales del desarrollo de software y la administración de sistemas:

* [Diego Guerra](https://twitter.com/dg_suarez) (CTO en [Sweetspot Intelligence](http://sweetspotintelligence.com)) nos habló sobre lo fácil que es hacer el _setup_ de un entorno de desarrollo utilizando [Docker Compose](https://docs.docker.com/compose/) y como nos facilita esto la gestión de dependencias entre varios servicios que se deben ejecutar a la vez y entre los que existen dependencias de ejecución. Además, [publicó en GitHub](https://github.com/dgsuarez/trapwilly) un proyecto que muestra una aplicación web con diferentes servicios conectados entre sí para ejemplificar lo fácil que es gestionarlos utilizando Docker.
* [Raúl Naveiras](https://twitter.com/rnaveiras) (Infrastructure Lead en [BeBanjo](http://bebanjo.com/)) explicó qué es Kubernetes y como nos puede ayudar a la hora de gestionar los diferentes sistemas que forman parte de la arquitectura de una aplicación web. Además de introducir los conceptos clave, Raúl introdujo también las novedades de Kubernetes en su última versión, la 1.5.
* [Israel Gayoso](https://twitter.com/igayoso) (System Administrator en [Kodify](https://kodify.io/)) realizó un repaso general a la arquitectura de sistemas en una aplicación web con alto tráfico y alta disponibilidad. Nos explicó como utilizar diferentes niveles de _caching_ para reducir las llamadas a base de datos (que él mismo considera como la **pieza clave**), como establecer workflows de monitorización que se ajusten a las necesidades reales del equipo, como provisionar servidores utilizando [Chef](https://www.chef.io/chef/) y algunos de los problemas con los que se han enfrentado en los últimos años. Podéis encontrar sus transparencias [aquí](/assets/devops-day-igayoso.pdf).
