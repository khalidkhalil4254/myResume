/*these are the variables*/
var menu_btn=document.getElementsByClassName('material-symbols-outlined')[0];
var menu_container=document.getElementById('header_items');

var counter=1;

var showMenu=function(){
    if(counter%2==0){
        menu_container.style.animationName='disapeare';
        menu_container.style.animationDuration='0.4s'
        menu_container.style.animationDirection='reverse';
         

        setTimeout(function rr(){
            menu_container.style.display='none';
        },200);

    }
    else{
        menu_container.style.animationName='apeare';
        menu_container.style.animationDuration='0.4s'
        menu_container.style.animationDirection='reverse';
        menu_container.style.display='flex';
    
    }
    counter++;
}



export{showMenu,menu_btn,menu_container}