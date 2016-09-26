export class User{
    name:string ;
    password:string;
    age:number ;
    weight:number ;
    height:number ;

    constructor(name:string, password:string, age:number, weight:number, height:number){
        this.name = name;
        this.password = password
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    isOld():boolean{
        if(this.age >= 100)
            return true;
        else
            return false;
    }

    getBMI():number{
        return this.weight/( this.height / 100 * this.height / 100);
    }

    isHealthy():boolean{
        //range of bmi 18.5 => 24.9 ==> healthy
        if(this.getBMI() >= 18.5 && this.getBMI() <= 24.9)
            return true;
        return false;
    }

}