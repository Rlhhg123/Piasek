const formularz = document.querySelector("#formularz");
const imie = document.querySelector("#imie");
const nazwisko = document.querySelector("#nazwisko");
const wiek = document.querySelector("#wiek");
const polaNazwy = [imie, nazwisko];
const komunikaty = document.createElement("div");
let sprawdzonoFormularz = false;

komunikaty.className = "komunikaty-bledu";
komunikaty.setAttribute("aria-live", "polite");
formularz.querySelector("fieldset").after(komunikaty);

polaNazwy.forEach((pole) => {
    pole.addEventListener("input", () => {
        const pierwszaLitera = pole.value.slice(0, 1);
        const wielkaLitera = pierwszaLitera.toLocaleUpperCase("pl-PL");

        if (pierwszaLitera !== wielkaLitera) {
            const poczatekZaznaczenia = pole.selectionStart;
            const koniecZaznaczenia = pole.selectionEnd;
            pole.value = wielkaLitera + pole.value.slice(pierwszaLitera.length);
            pole.setSelectionRange(poczatekZaznaczenia, koniecZaznaczenia);
        }

        if (sprawdzonoFormularz) {
            sprawdzDane();
        }
    });
});

wiek.addEventListener("input", () => {
    if (sprawdzonoFormularz) {
        sprawdzDane();
    }
});

function sprawdzDane() {
    const bledy = [];
    const poprawneImie = /^\p{L}+$/u.test(imie.value);
    const poprawneNazwisko = /^\p{L}+$/u.test(nazwisko.value);
    const wartoscWieku = Number(wiek.value);
    const poprawnyWiek = wiek.value !== ""
        && Number.isInteger(wartoscWieku)
        && wartoscWieku >= 0
        && wartoscWieku <= 140;

    imie.setAttribute("aria-invalid", String(!poprawneImie));
    nazwisko.setAttribute("aria-invalid", String(!poprawneNazwisko));
    wiek.setAttribute("aria-invalid", String(!poprawnyWiek));

    if (!poprawneImie) {
        bledy.push("Wprowadź imię, używając wyłącznie liter. ");
    }
    if (!poprawneNazwisko) {
        bledy.push("Wprowadź nazwisko, używając wyłącznie liter.");
    }
    if (!poprawnyWiek) {
        bledy.push("Wprowadź wiek od 0 do 126");
    }

    komunikaty.replaceChildren();
    if (bledy.length > 0) {
        const lista = document.createElement("ul");
        bledy.forEach((blad) => {
            const element = document.createElement("li");
            element.textContent = blad;
            lista.append(element);
        });
        komunikaty.append(lista);
    }

    return bledy.length === 0;
}

formularz.addEventListener("submit", (event) => {
    event.preventDefault();
    sprawdzonoFormularz = true;

    if (!sprawdzDane()) {
        return;
    }

    window.location.href = "index2.html";
});