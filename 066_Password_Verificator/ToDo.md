Hier een eigen ToDo-list
De functie die we uiteindelijk gaan schrijven moet verifyPassword heten. We geven deze functie één argument. Dat argument gaat "iets" zijn dat we gaan checken om te kijken of het een goed genoeg wachtwoord is.

condities:

- password is korter dan 9 karakters
- password is niet null
- password heeft 1 of meer uppercase karakters
- password heeft 1 of meer lowercase karakters
- password heeft 1 of meer cijfers (zie: https://www.geeksforgeeks.org/javascript-regexp-test-method/)

password wordt goedgekeurd als:

- tenminste 3 van bovenstaande condities true zijn
- conditie 4 (lowercase) is true (deze moet dus altijd true zijn)

per conditie:
🟩 schrijf een aantal tests, zowel voor retour bij true als bij false
🟩 schrijf de (deel)functie

voor het totaal
🟩 schrijf de tests voor de algemene functie
🟩 schrijf de algemene functie, let op combinaties en zorg ervoor dat de tests passen

_Refactor code_
🟩 verbeter tijdelijke namen van variabelen
🟩 schoon code op
🟩 voeg relevante commentaarregels toe

test-wachtwoorden:

- henkie1 goed
- 1234a goed
- z goed
- henkie1234 goed
- HENKhenk goed
- Henk33$ goed
- 1234 fout
- ' ' (leeg) fout

🟩
✳️
✅
