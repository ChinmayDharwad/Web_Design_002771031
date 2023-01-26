let menuVisible = false;
//Function to make menu work
function Menu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}

function hideOnSelection(){
    //Hide the menu upon selection
    document.getElementById("nav").classList = "";
    menuVisible = false;
}