import header from "./header.js";
import Home from "./home.js";
import Menu from "./menu.js";
import Contact from "./contact.js";

header.createheader();
Home.createhome();

header.home.addEventListener('click', Home.createhome);

header.menu.addEventListener('click', Menu.createmenu);

header.contact.addEventListener('click', Contact.createcontact);

// Contact.createcontact();
//Home.createhome();
//Menu.createmenu();


