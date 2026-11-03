function dzialania(a, b){
    var suma = (a+b);
    var iloczyn = (a*b);
    return{
        dodawanie: suma;
        mnozenie: iloczyn;
    }
}

var wynik = dzialania(5, 10)
document.write("Suma: " + wynik.dodawanie + " | Iloczyn " + wynik.mnozenie + "<br>");