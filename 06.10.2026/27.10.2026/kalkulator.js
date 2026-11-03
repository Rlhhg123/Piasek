const buttons = document.createElement("div");
buttons.innerHTML = `
    <button type="button" onclick="pokazWynik('suma')">Dodawanie</button>
    <button type="button" onclick="pokazWynik('roznica')">Odejmowanie</button>
    <button type="button" onclick="pokazWynik('iloczyn')">Mnożenie</button>
    <button type="button" onclick="pokazWynik('iloraz')">Dzielenie</button>
`;
document.getElementById("wynik").before(buttons);

const inputs = document.createElement("div");
inputs.innerHTML = `
    <label for="liczbaA">Pierwsza liczba:</label>
    <input id="liczbaA" type="number" step="any">

    <label for="liczbaB">Druga liczba:</label>
    <input id="liczbaB" type="number" step="any">
`;
buttons.before(inputs);

function kalkulator(a, b) {
    return {
        suma: a + b,
        roznica: a - b,
        iloczyn: a * b,
        iloraz: b === 0 ? null : a / b
    };
}

function pokazWynik(dzialanie) {
    const poleA = document.getElementById("liczbaA");
    const poleB = document.getElementById("liczbaB");
    const wynikElement = document.getElementById("wynik");

    if (poleA.value.trim() === "" || poleB.value.trim() === "") {
        wynikElement.textContent = "Wpisz obie liczby.";
        return;
    }

    const a = Number(poleA.value);
    const b = Number(poleB.value);
    const wyniki = kalkulator(a, b);
    const wynik = wyniki[dzialanie];

    if (wynik === null) {
        wynikElement.textContent = "Nie można dzielić przez zero.";
        return;
    }

    wynikElement.textContent = "Wynik: " + wynik;
}
