function sprawdzImie(){
    document.getElementById("zamowienie").onsubmit = function(){
        if(document.getElementById("imie").value.trim() == ""){
            document.getElementById("blad").innerHTML = "Uzupełnij imię";
            return false;
        }
        else if(document.getElementById("ilosc").value.trim() == "" || isNaN(document.getElementById("ilosc").value)){
            document.getElementById("blad").innerHTML = "Ilość musi być liczbą";
            return false;
        }

        else if (!document.getElementById("regulamin").checked) {
            document.getElementById("blad").innerHTML = "Zaakceptuj regulamin";
            return false;
        }

        else if (document.getElementById("adres").value.trim() === "") {
            document.getElementById("blad").innerHTML = "Uzupełnij adres";
            return false;
        }
        
        else{
            document.getElementById("blad").innerHTML = "";
            return true;
        }
    }
}
window.onload = function(){
    sprawdzImie();
}