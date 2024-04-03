class person {
    private name : string;
    private yearOfBirthday : number;
    constructor(name : string, yearOfBirthday: number){
        this.name = name;
        this.yearOfBirthday = yearOfBirthday;
    }
    public getName(): string{
        return this.name
    }
    public getYearOfBirth(): number{
        return this.yearOfBirthday
    }
}

class canlendar{
    private CurrentYear : number;
    constructor(){
        this.CurrentYear = 2024;
    }
    public getAge(year : number){
        return this.CurrentYear - year;
    }
}


let him = new person("him", 1996);
let heang = new person("heang", 2000);

let heangDate = heang.getYearOfBirth();
let himDate = him.getYearOfBirth();

let heangYear = new canlendar().getAge(heangDate);
let himYear = new canlendar().getAge(himDate);
