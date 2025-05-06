<script>
    import      {Canvas}    from  '@threlte/core';
    //import      {Studio}    from  '@threlte/studio';  //import      {NoToneMapping} from  'three'
    import      Scene       from  './Scene.svelte';
</script>


<main>
    <Canvas >    
         <Scene/>   <!--Studio>    <Scene/>    </Studio-->
    </Canvas>
</main>


<style>
        main { height: 100vh;  width: 100vw}
</style>