# A Svelte + threlte 3D project

- example 3D project using Sveltekit + threlte (three.js)
- A good starter template + setup guide on the right tools.
- tools/libs: sv, pnpm, vite, svelte, threlte...
- tap items to switch into a different time-space.
- double tap/click to start-stop rotation, move around...

## Todo

- reduce assets size: higher compression at same quality (ready)  
- improve UX: player control/moves/perspective/ergonomics (80%)  
- improve 3D UX: graphics, moving, animation, composition (60%)  
- improve scenario, interaction, objectives (what to do) (20%)  
- improve immersion:  3D, +real space, game play, sounds (20%)  
- add multiple modes/themes: day-night-space, play/demo mode (70%)  
- improve space: add solar system `planets` + better space (10%)  

---
.
.

## Setup instructions - Create a new project

save repo + install with pnpm or use ***' sv '*** to build a new Svelte project by following below instructions.  
More info: [`https://github.com/sveltejs/cli`](https://github.com/sveltejs/cli)

```bash
# to install sv
pnpm  add -g sv

# or to update sv
pnpm  update -g sv

# create a new project in the current directory
sv  create

# or in a new directory new_app
sv  create new_app

# add Dependencies: 
pnpm  add  three  @threlte/core  @threlte/extra

# to setup dependencies:
pnpm  i

# or to update :
pnpm  update

# start a dev server:
pnpm  run dev

# or start dev server + open app in a new browser tab  
pnpm  run dev  --  --open
```

## Building

```bash
# build for production
pnpm  run  build

# preview the build:
pnpm  run  preview
```

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
