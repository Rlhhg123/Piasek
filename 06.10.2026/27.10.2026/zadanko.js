function sprawdzImie(){
    document.getElementById("zamowienie").onsubmit = function(){
        if(document.getElementById("imie").value.trim() == ""){
            document.getElementById("blad").innerHTML = "Brak imienia!";
            return false;
        }
        else
        {
            document.getElementById("blad").innerHTML = "";
            return true;
        }
    }
}
window.onload = function(){
    sprawdzImie();
}