<script>
    import      {T, useTask}        from '@threlte/core';

    import      { useGltf,  GLTF, Text3DGeometry, Sky, useTexture,
                  interactivity,  TransformControls, useDraco,
                  OrbitControls,  useGltfAnimations }   from '@threlte/extras';
    
    import      {AmbientLight}  from 'three';

    import      {Spring}        from 'svelte/motion';
    

    import      Phonix          from './Phoenix.svelte';
    
    //const drL    = useDraco();
    const phonix = useGltf('/assets/phoenix.glb');//, {drL});
    const moon   = useGltf('/assets/moon.glb');
    const world  = useGltf('/assets/wonderful_world.glb');
    const cosmos = useGltf('/assets/need_space.glb');
    
    let {actions, mixer} =useGltfAnimations(world)

    setTimeout(()=> console.log('items: ', world, actions), 2000 );
    //setTimeout(()=> {$actions['Animation'].play()}, 3000 );

    interactivity();

    const scale = [new Spring(1), new Spring(1)];
    const cam   = $state([new Spring(0), new Spring(128), new Spring(256)]);
    let pos   = $state([new Spring(0), new Spring(12), new Spring(26)]);
    let path   = $state('');
    let mov = $state('');
    //const cam   = [new Spring(0), new Spring(128), new Spring(256)];
    console.log('cam: ',cam[1])
    //let y = 1;//setInterval(()=>{ y=y>6? 1  :y+1}, 200)
    let rotation = $state(0);
    let autoRotate = $state(true);
    let day_night =$state(-8);
    let fly =$state(false);
    let mov_count = 0;
    
useTask( (delta)=> { 
        
        rotation += delta*.3;
    
        if(mov_count>30) {path='';   mov_count=0}
        if (path==='' && mov==='') {fly=false; return};
        fly=true;   mov_count++;
        

        path==='L'? pos[0].target-=3  :path==='R'? pos[0].target+=3  
        : path==='U'? pos[1].target+=3  :path==='D'? pos[1].target-=3  :{};

        path==='F'? pos[2].target+=3  :path==='B'? pos[2].target-=3  :{}
});

    const   itm  = $state( Array(2).fill({y: 12}) );
    let     pxcam= $state(false);
    //$effect(()=>console.log(itm[0].y))
//const  R={x:0, y:8, z:-4}

//const  pos =$state([0, 64, -4]);//([0, 8, -4]);
//const  pos =[0, 64, -4];
$inspect(pos);


function inpKB(e)
{   
    mov  =e.altKey? 'F'  :e.shiftKey? 'B'  : ''; 
    
    e=e.key;
    if (e===path && mov_count<15) return;
    //console.log('Key press: ', e,mov);
    switch (e)
    { //Directions:  L-eft | R-ight | D-own | U-p
      case 'ArrowLeft':  case 'a':    path='L';    break;
      case 'ArrowRight': case 'd':    path='R';    break;
      case 'ArrowDown':  case 's':    path='D';    break;
      case 'ArrowUp':    case 'w':    path='U';    break;
      //Rotate player
      case 'Tab':   cam[2] *= -1;     path='';     break;
      //Move:  F-orward | B-ackward  
      case 'Alt':   case 'e':   mov='F';   break;
      case 'Shift': case 'x':   mov='B';   break;

      default: fly=false;  break;  
    }
    //console.table(pos) //pos[0] =R.x;  pos[1] =R.y;   pos[2] =R.z;
}

const   xWorld =(x='')=> {day_night= x==='night'?-8 :(x==='dawn'||day_night===-8)? .8 :x==='dusk'? -2 :-8 }

</script>
  


<svelte:window  ondblclick={_=>autoRotate=!autoRotate}  
                onkeydown={inpKB}/>


<T.PerspectiveCamera    
            makeDefault
            position ={[cam[0].current, cam[1].current, cam[2].current]}
            oncreate ={ref=> ref.lookAt(1, 2, 1)}
            near={1}        far={9999}
>
    <OrbitControls  target={[pos[0].current, pos[1].current, pos[2].current]}
                    {autoRotate} 
                    autoRotateSpeed={0.4}
                    enableDamping />
</T.PerspectiveCamera>


<Sky  elevation={day_night} scale={8192} />
<!-- T.AmbientLight   intensity={.6}  color='#edb' / -->

<T.DirectionalLight  position ={[0, 36, 8]}
                     castShadow
                     intensity={1} 
/>


{#if (day_night===.8 || day_night===-2)}
        <T.Mesh     position ={[0, -256, 0]}
                    receiveShadow
                    rotation.x={-Math.PI / 2}
        >          
                    <T.SphereGeometry   args={[256, 64, 64]} />
                    <T.MeshStandardMaterial  color='#434'/>
        </T.Mesh>
{:else}
        {#await  world  then  m }
            <T  
                is={m.scene}    position={[0, -255, 0]}
                scale={101}     rotation={[0,0,.4]}
            />
        {/await}
{/if}

<!-- TransformControls  position.y =1 -->

<T.Mesh     position ={[-48, itm[0].y, -24]}
            scale={scale[0].current}
            rotation.y={rotation}
            rotation.x={rotation}
            castShadow  receiveShadow
            onpointerenter={()=> {itm[0].y=16;  scale[0].target =1.6} }
            onpointerleave={()=> {itm[0].y=12;  scale[0].target =1}  }
            onclick={_=>xWorld('night')}
>
            <T.BoxGeometry      args ={[24, 24 , 24]}/>
            <T.MeshStandardMaterial  color ='#62b'/>
</T.Mesh>

<!--T.Mesh     position ={[0, -4, 0]}
            rotation.y={rotation}
>
            <T.SphereGeometry   args ={[24, 24, 24]}/>
            <T.MeshStandardMaterial  color ='#444'  wireframe/>
</T.Mesh -->

<T.Mesh     position ={[32, itm[1].y, 16]}
            castShadow  receiveShadow
            rotation.y={rotation}
            scale={scale[1].current}
            onpointerenter={()=> {itm[1].y=24;  scale[1].target =1.6} }
            onpointerleave={()=> {itm[1].y=16;  scale[1].target =1} }
            onclick ={_=>xWorld((day_night<0?'dawn' :'dusk'))}
>
            <T.SphereGeometry   args ={[16, 32, 32]}/>
            <T.MeshStandardMaterial  color ='red'  wireframe/>
</T.Mesh>


<!-- GLTF   url ='/assets/horse.gltf' / -->

<Phonix    bind:pos  bind:pxcam  {fly}/>



{#await  moon  then  m }
    {#if day_night<0}
        <T  
            is={m.scene}    position={[0, 24, -800]}
            scale={128}     rotation={[6, rotation, .4]}
            intensity={1}
        />
    {/if}
{/await}

{#await  cosmos  then  m }
    {#if day_night<0}
        <T  
            is={m.scene}    position={[0, 6144, -920]}
            scale={2048}    rotation={[256, 0, 0]} 
        />
    {/if}
{/await}

<Text3DGeometry  args{[10,100,10]}  color='white' text='Hello' size={400} position ={[-10, 20, -24]} />
