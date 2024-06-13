'use strict'
//declaro constante DOM que necesito
const display =  document.querySelector ("#display");
const buttons = document.querySelectorAll('button');

// recorro arrey para traer informacion de los botones 

buttons.forEach((item) =>{
item.onclick =()=>{
    if(item.id == 'clear'){
        display.innerText = "";
    }else if (item.id == 'backspace'){
        let string = display.innerText.toString(); // convierto a string lo que contenga display
        display.innerText = string.substr(0,string.length-1);  // devuelvo caracteres del string
    }else if (display.innerText !="" && item.id == 'equal'){
      display.innerText = eval(display.innerText);
    }else if (display.innerText == "" && item.id == 'equal'){
        display.innerText = "ERROR";
        setTimeout(()=> (display.innerText == ""),2000); 
    }else{
        display.innerText += item.id;
    }
        
}
})
