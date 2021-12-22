import img from './pics/momo.png';
import img1 from './pics/Momo_nepal.jpg';
import './style.css';
import nodemodify from './functions.js';

const Footer = function(){

    const footer = document.createElement("footer");
    const home = document.createElement("div");
    const menu = document.createElement("div");
    const contact = document.createElement("div");
    const logo = document.createElement("img");
    const footercontainer = document.createElement("div");

    nodemodify.body.style.backgroundImage = `url(${img1})`;

    function createfooter(){
        logo.src = img;
        home.innerText = "Home";
        menu.innerText = "Menu";
        contact.innerText = "Contact Us";
        

        nodemodify.addClass([footercontainer],"footercontainer");
        nodemodify.addClass([home, menu, contact],"footer-buttons");
        nodemodify.addClass([logo],"logo");
        nodemodify.multipleAppend([footer], nodemodify.body);
        nodemodify.multipleAppend([home, menu, contact], footercontainer)
        nodemodify.multipleAppend([logo, footercontainer] , footer);

    }
    

    return {createfooter};

}

let footer = Footer();

export default footer;
