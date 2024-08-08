# Plantilla para bodas - Modelo hojas

## 📁 Estructura del proyecto

Dentro del proyecto veras las siguientes carpetas y archivos

```text
/
├── public/
├── src/
│   └── pages/
│       └── index.astro
│   └── components/
└── package.json
```

Astro busca archivos `.astro` o `.md` en el directorio `src/pages/`. Cada página se expone como una ruta basada en su nombre de archivo.

Cualquier activo estático, como imágenes, puede colocarse en el directorio `public/`.

## 🚀 Comandos

Todos los comandos se ejecutan desde la raíz del proyecto, desde un terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Servicios de terceros para correr el proyecto
[![Open in StackBlitz](https://developer.stackblitz.com/img/open_in_stackblitz.svg)](https://stackblitz.com/github/withastro/astro/tree/latest/examples/minimal)
[![Open with CodeSandbox](https://assets.codesandbox.io/github/button-edit-lime.svg)](https://codesandbox.io/p/sandbox/github/withastro/astro/tree/latest/examples/minimal)
[![Open in GitHub Codespaces](https://github.com/codespaces/badge.svg)](https://codespaces.new/withastro/astro?devcontainer_path=.devcontainer/minimal/devcontainer.json)

## 👀 Quieres saber más?

Consultar la [documentation](https://docs.astro.build) de astro.
