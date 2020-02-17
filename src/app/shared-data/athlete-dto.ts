export interface AthleteOption {
    id?: number;
    idathlete: number;
    name: string;
    surname :string;
    mass: number;
    heathmax: number;
}

export class AthleteDTO {

    id: number;
    idathlete: number;
    name: string;
    surnname: string;
    mass: number;
    hearthmax: number;

    constructor(options: AthleteOption) {
        this.id = options.id || 0;
        this.idathlete = options.idathlete;
        this.name = options.name;
        this.surnname = options.surname;
        this.hearthmax = options.heathmax;
    }
}