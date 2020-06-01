export interface StatisticsPowerActivityOption {
    id?: number;
    idathlete: number;
    idpoweractivity: number;
    poweraverage: number;
    powermedian: number;
    deviation: number;
    powerscore: number;
    nbrofeasy: number;
    nbrofmarathon: number;
    nbrofthreshold: number;
    nbrofinterval: number;
    nbrofrepetition: number;
    date: string;
    powerfirstquartil: number;
    deltafirstquartil: number;
    powerthirdquartil: number;
    deltathirdquartil: number;
}

export class StatisticsPowerActivityDTO {

    id: number;
    idathlete: number;
    idpoweractivity: number;
    poweraverage: number;
    powermedian: number;
    deviation: number;
    powerscore: number;
    nbrofeasy: number;
    nbrofmarathon: number;
    nbrofthreshold: number;
    nbrofinterval: number;
    nbrofrepetition: number;
    date: string;
    powerfirstquartil: number;
    deltafirstquartil: number;
    powerthirdquartil: number;
    deltathirdquartil: number;

    constructor(options: StatisticsPowerActivityOption) {
        this.id  = options.id  || 0;
        this.idathlete = options.idathlete;
        this.idpoweractivity = options.idpoweractivity;
        this.poweraverage = options.poweraverage;
        this.powermedian = options.powermedian;
        this.deviation = options.deviation;
        this.powerscore = options.powerscore;
        this.nbrofeasy = options.nbrofeasy;
        this.nbrofmarathon = options.nbrofmarathon;
        this.nbrofthreshold = options.nbrofthreshold;
        this.nbrofinterval = options.nbrofinterval;
        this.nbrofrepetition = options.nbrofrepetition;
        this.date = options.date;
        this.powerfirstquartil = options.powerfirstquartil;
        this.deltafirstquartil = options.deltafirstquartil;
        this.powerthirdquartil = options.powerthirdquartil;
        this.deltathirdquartil = options.deltathirdquartil;
    }
    
}
