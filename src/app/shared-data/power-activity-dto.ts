export interface PowerActivityOption {
    id?: number;
    power:number;
    latitude: number;
    longitude: number;
    elevation: number;
    hearthrate: number;
    timezone: number;
}

export class PowerActivityDTO {

    id: number;
    power:number;
    latitude: number;
    longitude: number;
    elevation: number;
    hearthrate: number;
    timezone: number;

    constructor(options: PowerActivityOption) {
        this.id  = options.id  || 0;
        this.power = options.power;
        this.latitude = options.latitude;
        this.longitude = options.longitude;
        this.elevation = options.elevation;
        this.hearthrate= options.hearthrate;
        this.timezone = options.timezone;
    }
}
