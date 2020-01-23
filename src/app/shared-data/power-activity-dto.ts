export interface PowerActivityOption {
    id?: number;
    power: number;
    speed: number;
    hearthrate: number;
    distance: number;
    pace: number;
    timezone: number;
}

export class PowerActivityDTO {

    id: number;
    power: number;
    speed: number;
    hearthrate: number;
    distance: number;
    pace: number;
    timezone: number;

    constructor(options: PowerActivityOption) {
        this.id  = options.id  || 0;
        this.power = options.power;
        this.speed = options.speed;
        this.hearthrate = options.hearthrate;
        this.distance = options.distance;
        this.pace = options.pace;
        this.timezone = options.timezone;
    }
}
