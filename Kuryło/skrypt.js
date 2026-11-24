function formatuj(kolor) {
    var tekst = document.getElementById("tekstFormatowany");
    var rozmiar = document.getElementById("rozmiar").value;
    var styl = document.getElementById("styl").value;

    tekst.style.color = kolor;

    if (rozmiar !== "") {
        tekst.style.fontSize = rozmiar + "%";
    }

    tekst.style.fontStyle = styl === "italic" ? "italic" : "normal";
}