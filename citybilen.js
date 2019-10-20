/*
 * Denne fil kalder en funktion i filen start.js, der ligger i library-mappen, 
 * og som I ikke skal ændre ved i denne opgave. Til gengæld kunne man forestille 
 * sig at der her blev indsat et
 */
class realClock{
    now() {
        return new Date();
    }
};
class fakeClock{
    constructor(){
    this.time = new Date();
};

now() {
    return new Date(this.time.getTime());

}

forward(minutter){
    this.time.setMinutes(this.time.getMinutes() +minutter)
}
};
var clock = new realClock();

minimumsPris = 75;
kmPris = 4.5;
sPris = 39;
minutPris = 8.5;
rounding = true;

start(new Taxameter(clock, kmPris, sPris, minutPris, minimumsPris, rounding));