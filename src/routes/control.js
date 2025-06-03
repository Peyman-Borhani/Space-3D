
useTask( delta=>
{ 
    rotation += delta*.2;
    if(!fly) return;
    //if (path==='' && move==='') {fly=false;   rotate[0].target= -1.2;   return}
        if(path!=='') { 
            //  L/R
                if(count_x<25)  {pos[0].target+= ps[0];  count_x++}
                else {count_x=0;  ps[0]=0}
            //  U/D
                if(count_y<25)  {pos[1].target+= ps[1];  count_y++}
                else {count_y=0;  ps[1]=0}
        }
        if(count_x===0 && count_y===0)  path ='';
        //  B/F
        if(move!=='') {
                if(count_z<25)  {pos[2].target+= ps[2];  count_z++}
                else {count_z=0;  ps[2]=0;  move=''}
        }        

        if(path==='' && move==='') {fly=false;   rotate[0].target= -1.2;   return}
        else fly=true;

console.log('paaaaaaaaaaaaath: ',path)

        // move==='F'? pos[2].target-=3   :move==='B'? pos[2].target+=3  :{};
});
