/*these are the variables*/
var menu_btn=document.getElementsByClassName('material-symbols-outlined')[0];
var menu_container=document.getElementById('header_items');
var mybutton = document.getElementById("myBtn");
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
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }


export{showMenu,menu_btn,menu_container,topFunction,scrollFunction,mybutton}