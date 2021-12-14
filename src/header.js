import img from './pics/momo.png';
import './style.css';
import nodemodify from './functions.js';


const Header = function(){

    const body = document.querySelector("body");
    const content = document.createElement("div");
    const header = document.createElement("header");
    const home = document.createElement("div");
    const menu = document.createElement("div");
    const contact = document.createElement("div");
    const logo = document.createElement("img");
    const headercontainer = document.createElement("div");

    function createheader(){
        logo.src = img;
        home.innerText = "Home";
        menu.innerText = "Menu";
        contact.innerText = "Contact Us";

        nodemodify.addClass([headercontainer],"headercontainer");
        nodemodify.addClass([home, menu, contact],"header-buttons");
        nodemodify.addClass([logo],"logo");
        nodemodify.multipleAppend([header, content], body);
        nodemodify.multipleAppend([home, menu, contact], headercontainer)
        nodemodify.multipleAppend([logo, headercontainer] , header);

    }
    

    return {createheader};

}

let header = Header();

export default header;





