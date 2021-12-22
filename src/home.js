
import nodemodify from "./functions";
import footer from "./footer.js";
import Menu from "./menu.js";

const Home = function (){

    let homecontainer = document.createElement("div");
    let text = document.createElement("div");

    const createhome = function (){
        nodemodify.removenode();

        text.innerHTML = "<p>Momo is an indo-china version of dumpling with spicy filling very popular in Nepal. It combines the best of both regions.</p> <p>Our momo house has the best momo in town.</p><div style='color: white; cursor: pointer; text-decoration: underline overline;' class ='order'>Order Now!</div>";
        
        
        nodemodify.multipleAppend([text], homecontainer);
        nodemodify.multipleAppend([homecontainer], nodemodify.body);
        nodemodify.addClass([homecontainer],"home-container");
        nodemodify.addClass([text],"text");

        footer.createfooter();
        if(document.querySelector(".order")){
            document.querySelector(".order").addEventListener("click", Menu.createmenu);
        }
        


    }


    return {createhome};

}();

export default Home;