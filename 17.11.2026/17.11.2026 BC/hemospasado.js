let numbers = [4, 256, 2, 512, 8, 16, 128];

const uno = document.getElementById("uno");
const dos = document.getElementById("dos");
const wynikP = document.getElementById("wynik");

wynikP.textContent = "Przed sortowaniem: " + numbers.join(", ");

uno.addEventListener("click", function () {
    numbers.sort();
    wynikP.textContent = "Po sortowaniu alfabetycznym: " + numbers.join(", ");
});

dos.addEventListener("click", function () {
    numbers.sort(function(a, b) {
        return a - b;
    });
    wynikP.textContent = "Po sortowaniu numerycznym: " + numbers.join(", ");
})