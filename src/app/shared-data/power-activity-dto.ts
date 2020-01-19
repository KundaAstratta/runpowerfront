export interface PowerActivityOption {
    id?: number;
    latitude: number;
    longitude: number;
    elevation: number;
    hearthrate: number;
    timezone: string;
}

export class PowerActivityDTO {

    id: number;
    latitude: number;
    longitude: number;
    elevation: number;
    hearthrate: number;
    timezone: string;

    constructor(options: PowerActivityOption) {
        this.id  = options.id  || 0;
        this.latitude = options.latitude;
        this.longitude = options.longitude;
        this.elevation = options.elevation;
        this.hearthrate= options.hearthrate;
        this.timezone = options.timezone;
    }
}
