import adapter from '@sveltejs/adapter-auto';
//import  {vitePreprocess}  from '@sveltejs/vite-plugin-svelte';
//import adapter from '@sveltejs/adapter-static';

const config = { 
    //preprocess: vitePreprocess(),
    kit: {  adapter: adapter(),
            alias: {"$assets/*": "./src/lib/assets/*"}
    } 
};
export default config;
