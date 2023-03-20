export class CoinModel {
    name: string;
    idIcon: string;
    volume1hrsUsd: number;

    constructor(name: string, idIcon: string, volume1hrsUsd: number) {
        this.name = name;
        this.idIcon = idIcon;
        this.volume1hrsUsd = volume1hrsUsd;
    }
}

export class CoinsModel {
    result: [CoinModel];
    
    constructor(result: [CoinModel]) {
        this.result = result;
    }
}