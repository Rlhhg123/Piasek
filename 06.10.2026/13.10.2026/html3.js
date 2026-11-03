let lower = Number(prompt("Podaj początek zakresu: "));
let upper = Number(prompt("Podaj koniec zakresu: "));
let divisor = Number(prompt("Podaj dzielnik: "));


    while (divisor === 0)
    {
        divisor = Number(prompt("Podaj dzielnik RÓŻNY OD 0: "));
    }

    if (upper < lower)
        {
        document.write("Dolny zakres nie może być większy od górnego. Zakres dolny i górny zostaną zamienione.<br>");
        const temp = lower;
        lower = upper;
        upper = temp;
    }

    document.write("Liczby niepodzielne przez " + divisor + " w zakresie od " + lower + " do " + upper + ":<br>");
    for (let i = lower; i <= upper; i++)
    {
        if (i % divisor !== 0)
        {
            document.write("Wynik: " +i + " reszty " + (i % divisor) + "<br>");
        }
    }