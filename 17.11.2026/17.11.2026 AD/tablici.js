const names = ["Ola", "Ala", "Jan", "Zyga", "Adam"];

const przycisk = document.getElementById("przycisk");
const wynikP = document.getElementById("wynik");

wynikP.textContent = "Przed sortowaniem: " + names.join(", ");

przycisk.addEventListener("click", function () {
    names.sort();
    wynikP.textContent = "Po sortowaniu: " + names.join(", ");
});