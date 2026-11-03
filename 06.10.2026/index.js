let dolny = Number(prompt("Podaj dolny zakres):"));
let gorny = Number(prompt("Podaj górny zakres:"));
const dzielnik = Number(prompt("Podaj dzielnik:"));

if (dzielnik === 0) {
    document.write("Nie można dzielić przez 0. <br>");
} else {
    if (gorny < dolny) {
        document.write("Dolny zakres nie może być większy od górnego. Zakres dolny i górny zostaną zamienione.<br>");
        const tymczasowy = dolny;
        dolny = gorny;
        gorny = tymczasowy;
    }

    document.write(
        "Liczby podzielne przez " + dzielnik +
        " w zakresie od " + dolny + " do " + gorny + ":<br>"
    );

    for (let i = dolny; i <= gorny; i++) {
        if (i % dzielnik !== 0) {
            continue;
        }

        document.write(`<span class="wynik">${i}</span><br>`);
    }
}