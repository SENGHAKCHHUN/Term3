export class  Address {
    private city: string;
    private street : string;
    private country : string;
    constructor(city: string, street : string, country: string) {
        this.city = city;
        this.street = street;
        this.country = country;
    }
}