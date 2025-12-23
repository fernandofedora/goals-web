# Goals Web

Sitio web informativo de Goals System. Presenta la visión del proyecto, guía de inicio, blog, equipo y formas de apoyar. Construido con React, Vite y TypeScript, con enrutamiento mediante React Router y estilos con TailwindCSS.

## Tecnologías
- React 18 y TypeScript
- Vite
- React Router DOM
- TailwindCSS

## Funcionalidades
- Navbar con selector de idioma Español/English. El idioma se guarda en `localStorage` y se aplica en todo el sitio.
- Página Descarga con pasos de inicio, requisitos y sección para usar la versión en línea de producción. Nota: al ser un proyecto open-source, la instancia pública está limitada a 100 transacciones por mes. Botón hacia `https://goals.zeabur.app/`.
- Blog con 4 temas y páginas de detalle accesibles con “Leer más”. Contenido bilingüe y rutas dinámicas.
- Equipo con tarjeta de miembro, sección “¿Quieres unirte al equipo?” y sección de contacto (Issues y Discussions).
- Donar con métodos de apoyo.

## Estructura principal
```
goals-web/
  src/
    components/
      Navbar.tsx
      Footer.tsx
      Hero.tsx
      BlogCard.tsx
    pages/
      Home.tsx
      Download.tsx
      Blog.tsx
      BlogPost.tsx
      Team.tsx
      Donate.tsx
    data/
      blog.tsx
    i18n.tsx
    App.tsx
    main.tsx
  public/
    how-to-start.svg
```

## Enrutamiento
- `/` Home
- `/download` Descarga
- `/blog` Blog
- `/blog/:slug` Detalle de artículo
- `/team` Equipo
- `/donate` Donar

## Internacionalización (i18n)
- Proveedor i18n y diccionarios: `src/i18n.tsx`
- Activación global del proveedor: `src/main.tsx:10-15`
- Selector de idioma en el navbar: `src/components/Navbar.tsx:33-42`
- Ejemplos de uso de `t(...)`:
  - Home y Hero: `src/pages/Home.tsx` y `src/components/Hero.tsx`
  - Descarga: `src/pages/Download.tsx`
  - Blog y tarjetas: `src/pages/Blog.tsx`, `src/components/BlogCard.tsx`
  - Detalle de blog: `src/pages/BlogPost.tsx`
  - Equipo y contacto: `src/pages/Team.tsx`
  - Donar: `src/pages/Donate.tsx`
  - Footer: `src/components/Footer.tsx`

Para agregar nuevos textos, define claves en `src/i18n.tsx` en ambas secciones `es` y `en`, y usa `t('clave')` en los componentes.

## Contenido del Blog
- Contenido por idioma: `src/data/blog.tsx`
- Cada entrada tiene `slug`, `title`, `excerpt`, `date`, `tags` y `content` (JSX).
- Las rutas de detalle usan `/:slug` y cargan el artículo según el idioma actual.

## Imagen “Cómo empezar”
- Archivo: `public/how-to-start.svg`
- Render en Home: `src/pages/Home.tsx:66-71`

## Desarrollo
- Requisitos: Node.js y npm recientes
- Instalación: `npm install`
- Desarrollo: `npm run dev` y abrir `http://localhost:5173/`
- Build: `npm run build`
- Preview del build: `npm run preview`

## Configuración
- Enlaces externos (documentación, repositorio, Issues/Discussions) están en:
  - Footer: `src/components/Footer.tsx`
  - Equipo (join/contacto): `src/pages/Team.tsx`
- La sección de Descarga incluye el enlace a la guía y a la versión en línea: `src/pages/Download.tsx`
- Para personalizar el contenido o textos:
  - i18n: `src/i18n.tsx`
  - Blog: `src/data/blog.tsx`
  - Imagen de “Cómo empezar”: `public/how-to-start.svg`

## Contribuir
- Usa GitHub Issues para reportar bugs o solicitar características.
- Usa GitHub Discussions para conversaciones generales y compartir ideas con la comunidad.

