const display = document.getElementById("Display");

function AppendToDisplay(input){
    display.value += input;
}

function ClearDisplay(){
    display.value = "";
}

function CalculateDisplay(){

    try{
        display.value = eval(display.value);
    }catch(error){
        display.value = "Error";
    }
}