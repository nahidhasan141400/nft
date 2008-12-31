function go (){
    console.log(window.location);
    window.location.href = "/phone.html";
}
console.dir(Window);

let width = window.screen.width;
if(width <= 700){
   
    go()
}