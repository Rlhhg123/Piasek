def generuj_cpp(nazwa_funkcji, kod):
    return f"""#include <iostream>
using namespace std;

void {nazwa_funkcji}() {{
    {kod}
}}

int main() {{
    {nazwa_funkcji}();
    return 0;
}}
"""


nazwa = input("Podaj nazwę funkcji: ")
kod = input("Podaj kod C++ do wykonania: ")

cpp = generuj_cpp(nazwa, kod)

print("\n--- Wygenerowany kod C++ ---\n")
print(cpp)