export interface StatisticsPowerActivityOption {
    id?: number;
    idathlete: number,
    idpoweractivity: number,
    poweraverage: number;
    powermedian: number;
    deviation: number;
}

export class StatisticsPowerActivityDTO {

    id: number;
    idathlete: number;
    idpoweractivity: number;
    poweraverage: number;
    powermedian: number;
    deviation: number;


    constructor(options: StatisticsPowerActivityOption) {
        this.id  = options.id  || 0;
        this.idathlete = options.idathlete;
        this.idpoweractivity = options.idpoweractivity;
        this.poweraverage = options.poweraverage;
        this.powermedian = options.powermedian;
        this.deviation = options.deviation;
    }
}
