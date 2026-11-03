var dzisiaj = new Date();
document.write(dzisiaj + "<br>");
document.write(dzisiaj.getFullYear() + "<br>");

var cisco = new Date();
document.write("Heute ist: " + cisco.getDay() + "<br>");
cisko = cisco.getDay();

cisko = Number(prompt("Podaj numer od 0 do 6: "))

switch (cisko)
{
    case 0:
        document.write("Poniedziałek");
        break;
    case 1:
        document.write("Wtorek");
        break;
    case 2:
        document.write("Środa");
        break;
    case 3:
        document.write("Czwartek");
        break;
    case 4:
        document.write("Piątek");
        break;
    case 5:
        document.write("Sobota");
        break;
    case 6:
        document.write("Niedziela");
        break;

    default:
        document.write("Nie ma takiego dnia tygodnia. ");
}
