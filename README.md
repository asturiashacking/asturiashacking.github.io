# Sitio web de AsturiasHacking

![Twitter](https://img.shields.io/twitter/follow/AsturiasHacking?style=social)

Este proyecto contiene el código fuente para el [sitio web oficial][website] de
[AsturiasHacking][saraos]. La aplicación está construida utilizando las
siguientes tecnologías: [React][react], [NEXT.js][next] y [MDX][mdx].

# Desarrollo

Como cualquier otro proyecto Node, lo primero es instalar las dependencias a
través del comando: `npm install`. Después, puedes arrancar un servidor de
desarrollo a través del comando: `npm run dev`, esto debería hacer que una
versión local de la web de AsturiasHacking se cargue en la URL:
<http://localhost:3000>.

## Cómo crear una nueva página

Los ficheros `.mdx` bajo la carpeta `pages` se convierten automáticamente en
nuevas páginas en la web. Puedes utilizar como referencia algún otro fichero
`.mdx` para ver cómo configurar correctamente el layout.

## ¿Dónde están los componentes?

Los componentes reutilizables se encuentran bajo la carpeta `components`. Todos
los elementos situados en esa carpeta deben ser _context-free_ y, por tanto,
potencialmente utilizables en cualquier página de la web. Algunos componentes ya
disponibles son:

- Títulos
- Listas
- Enlaces

## Cómo estilar los componentes React

Para los estilos, estamos utilizando [styled-jsx][styled-jsx] (una
implementación de Vercel para CSS-in-JS), que viene integrado por defecto en
NEXT.js.

# Testing

Como el sitio web es 100% estático y no tiene ninguna lógica de negocio, hay una
pequeña capa de [smoke tests][smoke-testing] construidos utilizando
[Cypress][cypress]. Los test se pueden ejecutar localmente a través del comando:
`npm run test`. Además, se ejecutarán automáticamente utilizando GitHub Actions
con cada nuevo _push_ y _pull request_.

Puedes ver los tests bajo la carpeta `cypress/integration`.

[website]: https://asturiashacking.org
[saraos]: https://saraos.tech/@asturiashacking
[react]: https://reactjs.org/
[next]: https://nextjs.org/
[mdx]: https://mdxjs.com/
[styled-jsx]: https://github.com/zeit/styled-jsx
[smoke-testing]: https://en.wikipedia.org/wiki/Smoke_testing_(software)
[cypress]: https://www.cypress.io/
[actions]: https://github.com/features/actions
