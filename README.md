# Doctors Page

Aplicacion web construida con React, TypeScript, Vite, Tailwind CSS 4 y shadcn/ui.

## Requisitos

- Node.js (version LTS recomendada).
- npm, incluido con Node.js.

Comprueba que ambos esten disponibles:

```bash
node --version
npm --version
```

## Instalacion y ejecucion

Desde la carpeta del proyecto, instala las dependencias y levanta el servidor de desarrollo:

```bash
npm install
npm run dev
```

Vite mostrara la URL local en la terminal (normalmente `http://localhost:5173`). Para generar y revisar la version de produccion:

```bash
npm run build
npm run preview
```

El proyecto tambien incluye `npm run lint` para ejecutar Oxlint.

## React Router

React Router permite definir las rutas y mostrar las paginas dentro de un layout. Para instalarlo en un proyecto React que aun no lo tenga:

```bash
npm install react-router
```

En este proyecto el paquete ya esta declarado en `package.json`; en una clonacion limpia basta con ejecutar `npm install`. El enrutador se configura en `src/app.router.tsx`, `DoctorsApp` monta el `RouterProvider` y el layout debe renderizar un `<Outlet />` para mostrar la pagina hija correspondiente.

## Tailwind CSS 4

Tailwind CSS 4 ya esta instalado en este proyecto como dependencia (`tailwindcss` y `@tailwindcss/vite`). En una instalacion desde cero, `npm install` instala esas dependencias desde `package.json`. Si se integra Tailwind en otro proyecto Vite con React, se pueden instalar con:

```bash
npm install tailwindcss @tailwindcss/vite
```

Agrega el plugin de Tailwind a `vite.config.ts`:

```ts
import tailwindcss from "@tailwindcss/vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
```

Y agrega la importacion de Tailwind al archivo CSS principal (en este proyecto, `src/index.css`):

```css
@import "tailwindcss";
```

`src/main.tsx` debe importar ese CSS para que Vite lo incluya en la aplicacion:

```ts
import "./index.css"
```

No se necesita crear `tailwind.config.js` para la configuracion basica de Tailwind CSS 4.

## shadcn/ui

shadcn/ui no es una dependencia de componentes global: su CLI agrega a la aplicacion los componentes seleccionados y sus dependencias. Este proyecto ya tiene configurado el alias `@` necesario para seguir la configuracion de shadcn/ui.

Inicializa shadcn/ui desde la raiz del proyecto:

```bash
npx shadcn@latest init
```

Completa las opciones que solicite el CLI. Cuando se pregunte por el alias de los componentes, usa `@/components`; para las utilidades, usa `@/lib/utils`. Revisa que el CSS indicado sea `src/index.css`. Despues, agrega solo los componentes que necesites, por ejemplo:

```bash
npx shadcn@latest add button
```

Los componentes se generan en el codigo del proyecto (usualmente en `src/components/ui`) y pueden personalizarse directamente. Importa uno asi:

```tsx
import { Button } from "@/components/ui/button"
```

## Configuracion de TypeScript

La configuracion de `paths` permite que TypeScript resuelva imports como `@/components/...` hacia `src/components/...`. En `tsconfig.json` (configuracion compartida en la raiz) se agregan `baseUrl` y `paths`:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Como el codigo de la aplicacion se compila con el proyecto `tsconfig.app.json`, la misma resolucion del alias tambien se declara en ese archivo:

```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

Integra estas opciones en los objetos `compilerOptions` existentes; no reemplaces el resto de las opciones ni las referencias de proyecto.

## Configuracion de Vite

Vite tambien necesita conocer el alias en tiempo de ejecucion. En `vite.config.ts`, agrega el import de `path` y define `resolve.alias`. En este proyecto la configuracion completa queda asi:

```ts
import path from "path"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "./src"),
    },
  },
})
```

El alias debe apuntar a la misma carpeta que `@/*` en TypeScript (`src`). Mantener ambas configuraciones sincronizadas permite que el editor, el compilador y Vite resuelvan los imports de la misma manera.