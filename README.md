# Taxameter.js
## En opgave i Strategy Pattern

Lavede praktisk talt en copy paste af parkinglot.js, ændrede bare navne mm.

Den mest interasante variabel mener jeg selv er "rounding" den er der fordi det kun er "citybilen" der vil have at det er pr påbegyndt kilometer man skal tælle.

Grunden til at dette er et strategy pattern, som jeg har forstået det, er fordi at taxameter er det eneste dokument som der er delt med kunden.

### Opgave 4
KroneTaxas vil gerne være mere konkurrencedygtige på korte ture med normale vogn, og vil gerne ændre deres km pris til:
5 kr for den første km, derefter 9 kr/km.

Lav de nødvendige ændringer i krone-taxa.js

Kunne ikke finde en måde hvorpå jeg med ændringer ekslusivt til "kronetaxa.js" kunne løse denne problematik.

Kunne godt lægge 2 nye variable ind i js filerne 
"billige kilometer, og pris på billige kilometer", men kan ikke se en måde hvorpå jeg med ændringer kun til kronetaxa.js kan løse dette



### Bonus opgave 1 (overkommelig)
Udvid Taxameter.js med et firmanavn og en tekstbeskrivelse af prismodellen. Dette kræver at start.js bliver ændret en smule.


### Bonus opgave 2 (svær)
Elin Rejser har fået adgang til alle prismodellerne, og deres prismodel er altid den billigste af de andre modeller.

Lav filerne elin-rejser.js og elin-rejser.html og genbrug så meget som mulig kode fra de andre systemer uden at have duplikeret kode.