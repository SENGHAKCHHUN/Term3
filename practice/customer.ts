import { Address } from "./address";
export class Customer{
    firstName : string;
    lastName : string
    address : Address[] = [];
    constructor(firstName : string, lastName : string){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    setAddress(address : Address){
        this.address.push(address)
    }
}