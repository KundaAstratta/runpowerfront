export interface ExternalConditionOption {
    id?: number;
    idathlete: number;
    idpoweractivity: number;
    pressureatm: number;
    temperature: number;
    humidity: number;
    speedwind: number;

}

export class ExternalConditionDTO {

    id: number;
    idathlete: number;
    idpoweractivity: number;
    pressureatm: number;
    temperature: number;
    humidity: number;
    speedwind: number; 

    constructor(options: ExternalConditionOption) {
        this.id = options.id || 0;
        this.idathlete = options.idathlete;
        this.idpoweractivity = options.idpoweractivity;
        this.temperature = options.temperature;
        this.humidity = options.humidity;
        this.speedwind = options.speedwind;    
    }
}