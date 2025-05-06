# A Svelte + threlte 3D project

- An example 3D project using Sveltekit, threlte.
- Build tools: sv, pnpm, vite.

## Creating a svelte project

Use ***' sv '*** to build a Svelte project, install instructions as bellow.
more info: [`https://github.com/sveltejs/cli`](https://github.com/sveltejs/cli)

```bash
# to install sv
pnpm add -g sv

# or to update sv
pnpm update -g sv

# create a new project in the current directory
sv create

# or in a new directory new_app
sv create new_app
```

## Developing

Add Dependencies: ` pnpm add three @threlte/core @threlte/extra `

To install: `pnpm i`  
To update : `pnpm install`

To start a development server:

```bash
pnpm run dev

# or start the server and open the app in a new browser tab  

pnpm run dev -- --open
```

## Building

To build your app for production:

```bash
pnpm run build
```

To preview the production build: `pnpm run preview`

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
