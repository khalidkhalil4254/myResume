//importing all methods and variables from another module.js
import * as name from "./methods.js";
//craeting events handlers for all the events can be occured by the user:
window.onscroll = function() {name.scrollFunction()};
name.menu_btn.addEventListener('click',name.showMenu);
name.mybutton.addEventListener('click',name.topFunction);