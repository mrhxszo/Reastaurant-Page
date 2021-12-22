
let nodemodify = function(){

    const body = document.querySelector("body");

    const addClass = function(array, element){
        //array is the nodes and element is the class to be added
        array.forEach(node => {
           node.classList.add(element);
        });
    }
    
    
    
    const multipleAppend = function(array, element){
    
        array.forEach(node => {
            element.appendChild(node);
        });
    } 

    const removenode = function(){
        let remove = null;

        if(document.querySelector(".home-container")){
            remove = document.querySelector(".home-container");
        }
        else if(document.querySelector(".menu-container")){
            remove = document.querySelector(".menu-container");
        }
        else{
            remove = document.querySelector(".contact-container");
        }

        if(remove){
            nodemodify.body.removeChild(remove);
        }
        
    }

    return {addClass, multipleAppend, body, removenode}; 

}();


export default nodemodify;