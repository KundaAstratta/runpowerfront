export interface PredictionOption {
    id?: number;
    idathlete: number;
    idpoweractivity: number;
    powerOptimal: number;
    speedOptimal: number;
    paceOptimal: string;
    paceEasy: string;
    paceThreshold: string;
    paceHard: string;
    paceMin: string;
    paceMax: string;
    paceMarathon: string;
    timeForMarathon: string;
    paceHalfMarathon: string;
    timeForHalfMarathon: string;
    paceTenKm: string;
    timeForTenKm: string;
}

export class PredictionDTO {

    id: number;
    idathlete: number;
    idpoweractivity: number;
    powerOptimal: number;
    speedOptimal: number;
    paceOptimal: string;
    paceEasy: string;
    paceThreshold: string;
    paceHard: string;
    paceMin: string;
    paceMax: string;
    paceMarathon: string;
    timeForMarathon: string;
    paceHalfMarathon: string;
    timeForHalfMarathon: string;
    paceTenKm: string;
    timeForTenKm: string;

    constructor(options: PredictionOption) {
        this.id  = options.id  || 0;
        this.idathlete = options.idathlete;
        this.idpoweractivity = options.idpoweractivity;
        this.powerOptimal = options.powerOptimal;
        this.speedOptimal = options.speedOptimal;
        this.paceOptimal = options.paceOptimal;
        this.paceEasy = options.paceEasy;
        this.paceThreshold = options.paceThreshold;
        this.paceHard = options.paceHard;
        this.paceMin = options.paceMin;
        this.paceMax = options.paceMax;
        this.paceMarathon = options.paceMarathon;
        this.timeForMarathon = options.timeForMarathon;
        this.paceHalfMarathon = options.paceHalfMarathon;
        this.timeForHalfMarathon = options.timeForHalfMarathon;
        this.paceTenKm = options.paceTenKm;
        this.timeForTenKm = options.timeForTenKm;
    }

}
