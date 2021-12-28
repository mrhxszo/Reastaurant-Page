import nodemodify from "./functions";
import maps from "./pics/address.jpg";
import footer from "./footer.js";


const Contact = function (){

    let container = document.createElement("div");
    let img = document.createElement("img");
    let info = document.createElement("div");
    img.src = maps;
    info.innerHTML = "<h1>Address</h1> <p>6 Rue Bonaparte, 06300 Nice</p> <h1>Phone</h1><p>04 89 24 10 30<p> <h1>E-mail</h1><p>momo.house@gmail.com<p>";
    const createcontact = function (){

        nodemodify.removenode();

        nodemodify.multipleAppend([img, info], container);
        nodemodify.multipleAppend([container], nodemodify.body);
        nodemodify.addClass([container],"contact-container");
        img.classList.add("contact-image");

        footer.createfooter();


    }


    return {createcontact};

}();

export default Contact;