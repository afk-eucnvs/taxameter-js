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

minimumspris = 0;
kmPris = 12;
sPris = 69;
minutPris = 6.67;
rounding = false;

start(new Taxameter(
    clock, 
    kmPris, 
    sPris, 
    minutPris, 
    minimumspris, 
    rounding));