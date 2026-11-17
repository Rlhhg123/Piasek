passwd = "zaq1@WSX"
chance = 3

password = input("Podaj hasło: ")
while password != passwd and chance > 0:
    chance -= 1
    password = input(f"Niepoprawne hasło. Pozostało {chance} prób. ")

if chance == 0:
    print("Niepoprawne hasło. Dostęp zablokowany. ")
    import sys
    sys.exit()
    
if password == passwd:
    print("Witamy w systemie. ")