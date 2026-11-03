number1 = prompt("Podaj pierwszą liczbę: ");
document.write("Liczba spierwiastkowana: " + Math.sqrt(number1).toPrecision(3) + "<br>");
document.write("Liczba podniesiona do kwadratu: " + Math.pow(number1, 2).toPrecision + "<br>");
document.write("Liczba podniesiona do potęgi π: " + Math.pow(number1, Math.PI).toPrecision(3) + "<br>");
document.write("Liczba spierwiastkowana pierwiastkiem czwartego stopnia: " + Math.pow(number1, 0.25).toFixed(3) + "<br>");
number2 = prompt("Podaj drugą liczbę: ");
document.write("Liczba 64 spierwiastkowana pierwiastkiem 3 stopnia: " + Math.pow(number2, 1/3).toPrecision(3) + "<br>");
document.write("Liczba π podniesiona do potęgi π: " + Math.pow(Math.PI, Math.PI).toPrecision(8) + "<br>");