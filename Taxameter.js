/**
 * Skal have følgende felter
 * - turStartetTidspunkt: et dato objekt for hvornår turen er startet. 
 *   Hvis turen ikke er startet, er den undefined
 * - afstand: hvor langt taxaen har kørt i KM. Denne værdi sendes til scriptet
 *   udefra (i dette tilfælde fra funktionen start(Taxameter), som ligger i 
 *   library-mappen, og som er det script, der styrer applikationen).
 * 
 * Skal have følgende metoder/funktioner, som alle kaldes fra start.js
 * - startTur(): sætter turStartetTidspunkt til nuværende tidspunkt
 * - slutTur(): skal nulstille taxameteret 
 *   ved at  sætte turStartetTidspunkt til undefined og afstand til 0
 * - koer(delta_afst): skal tælle afstand op med det ekstra antal km, som
 *   bilen har kørt siden sidste beregning. 
 * - beregnPris(): skal returnere prisen beregnet udfra taxaselskabets prissætning
 */
var price;

class Taxameter {

    constructor(clock, kmPris, sPris, minutPris, minimumspris,rounding) {
        this.clock = clock;
        this.afstand = 0;
        this.turStartetTidspunkt = undefined;
        this.kmPris = kmPris;
        this.sPris = sPris;
        this.minutPris = minutPris;
        this.minimumspris = minimumspris;
        this.rounding=rounding;
    }
    

    startTur() {
        this.turStartetTidspunkt = this.clock.now();
    }

    slutTur() {
        this.turStartetTidspunkt = undefined;
        this.turSluttetTidspunkt = undefined;
        this.afstand = 0;

    }

    koer(delta_afst) {
        this.afstand += delta_afst;
    }



    beregnPris() {
        if(this.rounding == true){
            price = ((Math.round(this.afstand)+1) * (this.kmPris) + this.sPris + ((clock.now() - this.turStartetTidspunkt) * this.minutPris) / 600)
        } else price = (this.afstand+1 * (this.kmPris) + this.sPris + ((clock.now() - this.turStartetTidspunkt) * this.minutPris) / 600)

        if (this.turStartetTidspunkt === undefined)
            return 0;
        else if(price < this.minimumspris) return this.minimumspris
        else return (price)
      
    }
}