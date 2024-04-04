import { Customer } from "./customer";
export class Room{
    roomID : number;
    numberOfRoom : number;
    customer : Customer[] = [];
    constructor(roomID: number, numberOfRoom: number){
        this.roomID = roomID;
        this.numberOfRoom = numberOfRoom;
    }
    setCustomer(cus: Customer){
        if (this.customer.length < this.numberOfRoom){
            this.customer.push(cus);
        }
    }
    
}