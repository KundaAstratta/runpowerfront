export interface PowerActivityOption {
    id?: number;
    idathlete: number,
    idpoweractivity: number,
    power: number;
    speed: number;
    hearthrate: number;
    distance: number;
    pace: number;
    timezone: number;
}

export class PowerActivityDTO {

    id: number;
    idathlete: number;
    idpoweractivity: number;
    power: number;
    speed: number;
    hearthrate: number;
    distance: number;
    pace: number;
    timezone: number;


    constructor(options: PowerActivityOption) {
        this.id  = options.id  || 0;
        this.idathlete = options.idathlete;
        this.idpoweractivity = options.idpoweractivity;
        this.power = options.power;
        this.speed = options.speed;
        this.hearthrate = options.hearthrate;
        this.distance = options.distance;
        this.pace = options.pace;
        this.timezone = options.timezone;
    }
}
