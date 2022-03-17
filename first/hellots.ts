import { createJsxJsxClosingFragment, SelectionRange } from "typescript";

//jj. type string
let firstname : string = "paweł";

//jj. type  number
let age : number = 23;

//jj. type boolean
let male : boolean = true;

//jj. type any is like step back to classic js
let xx : any;
xx = "Paweł";
xx = 3;
xx = {};
xx = ()=>{};
let xage : string = xx;

//jj. how to handle arr
let myArr : number[] = [];
myArr.push(34);

//jj. how to handle touple
let myTouple : [string, number] = ["Paweł", 32]

//jj. type any 
// While declarateing a function remember to add to arguments specific type. 
// ! after brackets also specify te type expected value. 
function sum(a : number ,b : number) : number {
    return a+b;
};
console.log(sum(2, 3));

//jj. allow more then one type 

let an : number | string | boolean;

const f = (x: number | string): number| string => {
    return x;
};

let mymultiTypeArr :  Array<string | number> = [34, 'jan'];
let mymultiTypeArrDuo :  (string | number)[]= [34, 'jan'];


//jj. it is possible to define very specific types
let dice: 1|2|3|4|5|6;
dice = 4;

let trueOrFalse : true|false;
trueOrFalse = false;

let iCanHandleOnlyOneValue: "dom";
iCanHandleOnlyOneValue = "dom";
//jj. as shown ts allows define even concrete value to variable

//jj.type void is value that means no value similar to undefine

function printText(text : string) : void{
    console.log(text);
}

let person : void = undefined;

//jj. In case when values comes form api or user it is necessary to validate.
//jj. to do this use typeof
let logical : boolean = true;


//jj. OKREŚLANIE WŁASNYCH TYPOW

//jj. Alias's: Insted of setting same types to deferent variables create aliases
type d6 = 1|2|3|4|5|6;
let nextDice :d6;

type basicType = number | string | boolean;
let someVar : basicType;

//jj. object defining types
const persona : {name: string, age: number, email ?: string} = {
    name:"Paweł",
    age:2,
};
//jj. setting interfaces

interface Person{
    age: number,
    name: string,
    email?: string
};
 
interface Pet {
    age: number,
    name: string,
    color?: string    
};

let union : Person | Pet = {
    name: "paweł",
    age: 32,
    email: "cat@catch.com",
};
let join: Person & Pet ={
    name: "paweł",
    age: 32,
    email: "cat@catch.com",
    color: "red"
};

//jj. extension for interfaces
interface Human {
    name: string,
    age: number,
    email?: string
};

interface Child extends Human {
    favColor: string
}
interface Adult extends Human {
    favMeal: string

}
const young : Child = {
    name:"Ada",
    age:5,
    favColor:"red"
}

//jj. classes with type script 

class Email{
    name: string;
    domain: string;

    constructor(name : string, domain : string){
        this.name=name;
        this.domain=domain;
    }
    toString = () => {
        return `${this.name}@${this.domain}`
    }
}

class ContactInfo {
    name : string;
    email : Email;

    constructor(name : string, email : Email) {
       this.name = name;
       this.email = email;
    }   

    stringify = () => {
        return `${this.name} ${this.email.toString()}`
    }
}

let workerContact =  new ContactInfo('Kinga', new Email("kinga","wp.pl"))

console.log(workerContact.stringify())

//.jj editing access

class Email2{
    private name: string;
    private domain: string;

    constructor(name : string, domain : string){
        this.name=name;
        this.domain=domain;
    }
    public toString = () => {
        return `${this.name}@${this.domain}`
    }
}

class ContactInfo2 {
    private name : string;
    private email : Email;
    private preferences : string[] 

    constructor(name : string, email : Email) {
       this.name = name;
       this.email = email;
       this.preferences = [];
    }   

    public stringify = () => {
        return `${this.name} ${this.email.toString()}`
    }
    public setEmail(email : Email) : void {
        this.email = email;
    }
    public getEmail() : Email {
        console.log('Email filed was read');
        return this.email
    }
    public getPreferences() : string[]{
        return Object.assign([], this.preferences);
    }
    public addPreferenes(pref : string) : string[]{
        this.preferences.push(pref)
        return this.preferences;
    }
}

let workerContact2 =  new ContactInfo('Kinga', new Email("kinga","wp.pl"))

console.log(workerContact2.stringify())
//jj. inheritance

class Rectangle {
    protected a : number
    private b : number

    constructor(a : number, b : number){
        this.a = a;
        this.b = b;
    }

    public area = () : number|string => {
        return this.a*this.b + 'cm^2';
    }
}

let lovelyRect : Rectangle = new Rectangle(10,5);
console.log("pole ulubionego prostokąta: ", lovelyRect.area())

class Square extends Rectangle {
    constructor(a: number){
        super(a,a);
    }

    public toString=() : string =>{
        return `jestem kwadratem o boku ${this.a}`
    }
}
let lovelySquare : Square = new Square(5);

console.log("pole ulubionego kwadratu: ",lovelySquare.area());
console.log('dostęp do a ponieważ procected: ', lovelySquare.toString());

//jj. abstract and polymofr

abstract class Shape {

    abstract area: () => number;   
}

class ExtRactangle extends Shape {

    private a : number;
    private b : number;

    constructor(a: number, b: number){
        super();
        this.a = a;
        this.b = b
    }
    //jj. when using abstract methods they has to be public 
    public area = () : number => {
         return this.a*this.b;
    }
    
}
let someShape : Shape = new ExtRactangle(4,4);
someShape.area();

//jj. generic types
interface wrapType<x> {
    value : x
}

function wrap<n>(x: n) : wrapType<n>{
    return{
        value: x
    }
}
wrap(5)
wrap('michal')

//jj. this is the and of the chapter 1
//jj. reminding that to run ts compilator use command npx tsc (npx if local)
//jj. to run nodemon use npx nodemon (path)np: ./first/hellots.js 


