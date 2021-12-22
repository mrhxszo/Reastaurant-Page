import nodemodify from "./functions";
import footer from "./footer.js";
import img0 from './pics/Momo_nepal.jpg';
import img1 from './pics/jhol_MOMO.jpg';
import img2 from  './pics/kothey_momo.jpg';
import img3 from './pics/fried.jpeg';

const Menu = function (){
    
    const container = document.createElement("div");

    //put img tag and another div-text tag inside a div tag
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    const div3 = document.createElement("div");
    const div4 = document.createElement("div");

    const item1 = document.createElement("img");
    const item2 = document.createElement("img");
    const item3 = document.createElement("img");
    const item4 = document.createElement("img");

    div1.appendChild(item1);
    div2.appendChild(item2);
    div3.appendChild(item3);
    div4.appendChild(item4);
    
    item1.src = img0; 
    item2.src = img1; 
    item3.src = img2; 
    item4.src = img3;
    
    nodemodify.addClass([item1,item2, item3, item4], "menu-img"); 

    let array = [div1, div2, div3, div4];
    const createmenuItems = function(){
        array.forEach((node, i) => {
            const  text = document.createElement("div");
            text.classList.add(`text${i}`);
            node.appendChild(text);

        } )
    }

    const textMenu = function(){

        let text0 = document.querySelector(".text0");
        text0.innerHTML = "<h2>Steamed Momo</h2> <p>Most simplest kind of Momo served with chutney</p>";

        let text1 = document.querySelector(".text1");
        text1.innerHTML = "<h2>Jhol Momo</h2> <p>Steamed Momo served with thick broth</p>";

        let text2 = document.querySelector(".text2");
        text2.innerHTML = "<h2>Kothey Momo</h2> <p>Pan fried Momo</p>";

        let text3 = document.querySelector(".text3");
        text3.innerHTML = "<h2>Fried Momo</h2> <p>Momo fried and served with chutney</p>";
    }

    const createmenu = function (){
        nodemodify.removenode();

        createmenuItems();
        nodemodify.addClass([container], "menu-container");
        nodemodify.addClass(array, "item");
        nodemodify.multipleAppend(array, container);
        nodemodify.multipleAppend([container], nodemodify.body);
        textMenu();

        footer.createfooter();
    }


    return {createmenu};

}();

export default Menu;