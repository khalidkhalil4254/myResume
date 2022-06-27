/*All of the variables*/
var menu_btn=document.getElementsByClassName('material-symbols-outlined')[0];
var menu_container=document.getElementById('header_items');
var mybutton = document.getElementById('myBtn');
var close_btn=document.getElementById('close_icon');
var open_btn=document.getElementById('myPotofolio');
var porto_container=document.getElementsByClassName('myWork_container')[0];
var counter=1;

//method to show and hide or open\close the Nav->menu
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


// methods of showing and event handler for the go to top btn 
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  function scrollFunction() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }



  //method to show and hide the portofolio:
  function openpop(){
    porto_container.style.display="flex";
    console.log("this is the open func.");
  }
  function closepop(){
    porto_container.style.display="none";
    console.log("this is the close func.");
  }


//exporting all we want to another js file to be used there:
export{showMenu,menu_btn,menu_container,topFunction,scrollFunction,mybutton,open_btn,close_btn,closepop,openpop,porto_container}