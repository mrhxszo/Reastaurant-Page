import img from './pics/momo.png';
import img1 from './pics/Momo_nepal.jpg';
import './style.css';
import nodemodify from './functions.js';

const Header = function(){

    const header = document.createElement("header");
    const home = document.createElement("div");
    const menu = document.createElement("div");
    const contact = document.createElement("div");
    const logo = document.createElement("img");
    const headercontainer = document.createElement("div");

    nodemodify.body.style.backgroundImage = `url(${img1})`;

    function createheader(){
        logo.src = img;
        home.innerText = "Home";
        menu.innerText = "Menu";
        contact.innerText = "Contact Us";

        nodemodify.addClass([headercontainer],"headercontainer");
        nodemodify.addClass([home, menu, contact],"header-buttons");
        nodemodify.addClass([logo],"logo");
        nodemodify.multipleAppend([header], nodemodify.body);
        nodemodify.multipleAppend([home, menu, contact], headercontainer)
        nodemodify.multipleAppend([logo, headercontainer] , header);

    }
    

    return {createheader, home, menu, contact, logo};

}

let header = Header();

export default header;





