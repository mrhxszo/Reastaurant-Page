
let nodemodify = function(){

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

    return {addClass, multipleAppend}; 

}();


export default nodemodify;