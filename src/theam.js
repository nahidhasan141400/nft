// window.addEventListener('load',()=>{
    const button = document.querySelector('#toggle-theem');
    const body = document.querySelector('body');
    const li = document.querySelectorAll('#body-main .social ol li');

    let v= false;
    button.addEventListener('click',()=>{
        
        if(v){
            body.style.background= "var(--lightBGclor)";
            body.className = "";
            for (let i = 0; i < li.length; i++) {
                li[i].style.border = "2px solid blue";
                
            }
            
            v = false;
        }else{
            body.style.background= "var(--darkBGclor)";
            body.className = "dark";
  
            for (let i = 0; i < li.length; i++) {
                li[i].style.border = "2px solid aqua";
                
            }
           
            v = true;
        }
    })
// })