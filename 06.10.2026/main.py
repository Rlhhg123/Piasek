def add(a, b):
    return(a + b)

def sub(a, b):
    return(a - b)

def multi(a, b):
    return(a * b)

def div(a, b):
    return(a / b)

import sys

password = "123"
attempts = 3

passwdint = input("Podaj hasło: ")
while passwdint != password:
  attempts -= 1
  print(f"Niepoprawne hasło. Pozostało {attempts} prób. ")
  passwdint = input("Podaj hasło: ")
  if attempts == 0:
    print("Niepoprawne hasło. Dostęp zablokowany. ")
    sys.exit()
    
print("Poprawne hasło. ")

nr1 = float(input("Podaj pierwszą liczbę: "))
nr2 = float(input("Podaj drugą liczbę: "))
choice = int(input("Podaj, jakie działanie wykonać: 1 - dodawanie, 2 - odejmowanie, 3 - mnożenie, 4 - dzielenie. "))

if choice == 1:
    print(add(nr1, nr2))

elif choice == 2:
    sub_choice = int(input("Którą liczbę od której chcesz odjąć? 1 - pierwsza od drugiej, 2 - druga od pierwszej. "))
    if sub_choice == 1:
        print(sub(nr2, nr1))
    
    elif sub_choice == 2:
        print(sub(nr1, nr2))

elif choice == 3:
    print(multi(nr1, nr2))

elif choice == 4:
    div_choice = int(input("Którą liczbę przez którą chcesz podzielić? 1 - pierwsza przez drugą, 2 - druga przez pierwszą. "))
    if div_choice == 1:
        if nr1 == 0:
            print("Nie można dzielić przez zero. ")
        print(div(nr2, nr1))

    elif div_choice == 2:
        if nr2 == 0:
            print("Nie można dzielić przez zero. ")
        print(div(nr1, nr2))