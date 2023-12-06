// start of js file 

counter = 0; 
function ClickEvent() 
{
    button = document.getElementById("button");
    counter++;
    document.getElementById("numbers").innerHTML = counter;
    if(counter >= 10){
        document.getElementById("numbers").style.left = "135px";
    }
    if(counter >= 100){
        document.getElementById("numbers").style.left = "110px";
    }

    if(counter >= 1000){
        document.getElementById("numbers").style.left = "85px";
    }
}

//end of js file
