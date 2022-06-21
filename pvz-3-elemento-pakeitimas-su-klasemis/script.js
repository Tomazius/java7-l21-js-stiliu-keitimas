window.onload = function (){
    let pastraipa = document.getElementById("pastraipa");
    let mygtukas = document.getElementById("mygtukas");

    mygtukas.onclick = function(){
        togglepasleptaklase(pastraipa);

    }
}


function togglepasleptaklase(elementas){
    if (elementas.classList.contains("pasleptas")){
        elementas.classList.remove("pasleptas");
    }
    else{
        elementas.classList.add("pasleptas");
    }
}