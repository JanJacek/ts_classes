"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//jj. type string
let firstname = "paweł";
//jj. type  number
let age = 23;
//jj. type boolean
let male = true;
//jj. type any is like step back to classic js
let xx;
xx = "Paweł";
xx = 3;
xx = {};
xx = () => { };
let xage = xx;
//jj. how to handle arr
let myArr = [];
myArr.push(34);
//jj. how to handle touple
let myTouple = ["Paweł", 32];
//jj. type any 
// While declarateing a function remember to add to arguments specific type. 
// ! after brackets also specify te type expected value. 
function sum(a, b) {
    return a + b;
}
;
console.log(sum(2, 3));
//jj. allow more then one type 
let an;
const f = (x) => {
    return x;
};
let mymultiTypeArr = [34, 'jan'];
let mymultiTypeArrDuo = [34, 'jan'];
//jj. it is possible to define very specific types
let dice;
dice = 4;
let trueOrFalse;
trueOrFalse = false;
let iCanHandleOnlyOneValue;
iCanHandleOnlyOneValue = "dom";
//jj. as shown ts allows define even concrete value to variable
//jj.type void is value that means no value similar to undefine
function printText(text) {
    console.log(text);
}
let person = undefined;
//jj. In case when values comes form api or user it is necessary to validate.
//jj. to do this use typeof
let logical = true;
let nextDice;
let someVar;
//jj. object defining types
const persona = {
    name: "Paweł",
    age: 2,
};
;
;
let union = {
    name: "paweł",
    age: 32,
    email: "cat@catch.com",
};
let join = {
    name: "paweł",
    age: 32,
    email: "cat@catch.com",
    color: "red"
};
;
const young = {
    name: "Ada",
    age: 5,
    favColor: "red"
};
//jj. classes with type script 
class Email {
    constructor(name, domain) {
        this.toString = () => {
            return `${this.name}@${this.domain}`;
        };
        this.name = name;
        this.domain = domain;
    }
}
class ContactInfo {
    constructor(name, email) {
        this.stringify = () => {
            return `${this.name} ${this.email.toString()}`;
        };
        this.name = name;
        this.email = email;
    }
}
let workerContact = new ContactInfo('Kinga', new Email("kinga", "wp.pl"));
console.log(workerContact.stringify());
//.jj editing access
class Email2 {
    constructor(name, domain) {
        this.toString = () => {
            return `${this.name}@${this.domain}`;
        };
        this.name = name;
        this.domain = domain;
    }
}
class ContactInfo2 {
    constructor(name, email) {
        this.stringify = () => {
            return `${this.name} ${this.email.toString()}`;
        };
        this.name = name;
        this.email = email;
        this.preferences = [];
    }
    setEmail(email) {
        this.email = email;
    }
    getEmail() {
        console.log('Email filed was read');
        return this.email;
    }
    getPreferences() {
        return Object.assign([], this.preferences);
    }
    addPreferenes(pref) {
        this.preferences.push(pref);
        return this.preferences;
    }
}
let workerContact2 = new ContactInfo('Kinga', new Email("kinga", "wp.pl"));
console.log(workerContact2.stringify());
//jj. inheritance
class Rectangle {
    constructor(a, b) {
        this.area = () => {
            return this.a * this.b + 'cm^2';
        };
        this.a = a;
        this.b = b;
    }
}
let lovelyRect = new Rectangle(10, 5);
console.log("pole ulubionego prostokąta: ", lovelyRect.area());
class Square extends Rectangle {
    constructor(a) {
        super(a, a);
        this.toString = () => {
            return `jestem kwadratem o boku ${this.a}`;
        };
    }
}
let lovelySquare = new Square(5);
console.log("pole ulubionego kwadratu: ", lovelySquare.area());
console.log('dostęp do a ponieważ procected: ', lovelySquare.toString());
//jj. abstract and polymofr
class Shape {
}
class ExtRactangle extends Shape {
    constructor(a, b) {
        super();
        //jj. when using abstract methods they has to be public 
        this.area = () => {
            return this.a * this.b;
        };
        this.a = a;
        this.b = b;
    }
}
let someShape = new ExtRactangle(4, 4);
someShape.area();
function wrap(x) {
    return {
        value: x
    };
}
wrap(5);
wrap('michal');
//jj. this is the and of the chapter 1
//jj. reminding that to run ts compilator use command npx tsc (npx if local)
//jj. to run nodemon use npx nodemon (path)np: ./first/hellots.js 
