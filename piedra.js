     



    let user = document.getElementsByClassName(".p")
    for(let i=0;i<user.length;i++){
        user[i].addEventListener("click",function(){
               alert("hola");
        })
}
  
console.log(user);
    let maquina="";
    let random=Math.floor(Math.random()*3);
    if(random==0){
            maquina=="piedra"
    }else if(random==1){
            maquina=="papel"
    }else if(random==2){
            maquina=="tijera"
    }
     
    




function play(user, maquina){
    for(let i=0;i<user.length;i++){
        if(user==piedra){
            if(maquina==0){
                console.log("empate");
            } else if(maquina==1){
                console.log("perdiste");
            } else if(maquina==2){
                console.log("ganaste");
            }
        }
        
        if(user==papel){
            if(maquina==0){
                console.log("ganaste");
            }else if(maquina==1){
                console.log("empate");
            }else if(maquina==2){}
                console.log("perdiste");
        }
        
        if(user==tijera){
            if(maquina==0){
                console.log("perdiste");
            }else if(maquina==1){
                console.log("ganaste");
            }else if(maquina==2){
                console.log("empate");
            }
        }

 }



}

    
    








