let x: number = 10;
console.log(x);

// array
const myNumbers: number[] = [1, 2, 3];
console.log(myNumbers);

myNumbers.push(4);
console.log(myNumbers);

// tuplas
let myTuple: [number, string, string[]];
myTuple = [5, "teste", ["a", "b", "c"]];
// myTuple ["teste", 5];

//object literals -> {prop: value};
const user: { name: string, age: number } = {
    name: "Breno",
    age: 24
}
console.log(user);

// any
let a: any = 0;
a = "teste"
a = true
console.log(a);

// union type
let id: string | number = "10"
id = 200;
// id = true;

// type alias
type myIdType = number | string;
const userId: myIdType = 10;
const herId: myIdType = "Her Loss";

// enum 
// tamanho de roupas (size: Médio / size: Pequeno)
enum Size {
    P = "Pequeno",
    M = "Médio",
    G = "Grande"
}
const camisa = {
    name: "Camila gola V",
    size: Size.G,
}
console.log(camisa);

// literal types
let teste: "somevalue";

// functions
function sum(a: number, b: number) {
    return a + b;
}
console.log(sum(12, 12));

function sayHelloTo(name: string): string {
    return `Hello ${name}`;
}
console.log(sayHelloTo("Breno"));

function logger(msg: string): void {
    console.log(msg);
}
logger('Teste!');

function greeting(name: string, greet?: string): void {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
    } else {
        console.log(`Olá ${name}`);
    }
}
greeting("José");
greeting("Pedro", "Sr.");

// interfaces
interface MathFunctionParams {
    n1: number,
    n2: number,
}
function sumNumbers(nums: MathFunctionParams) {
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }));

function multiplyNumbers(nums: MathFunctionParams) {
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 3, n2: 8 }));

// narrowing
function doSomething(info: number | boolean) {
    if (typeof info == "number") {
        console.log(`O número é ${info}`)
        return;
    }
    console.log("Não foi passado um número!");
}
doSomething(5);
doSomething(false);

// generics
function showArraysItems<T>(arr: T[]) {
    arr.forEach((item) => {
        console.log(`ITEM: ${item}`)
    })
}
const a1 = [1, 2, 3];
const a2 = ['a', 'b', 'c'];
showArraysItems(a1);
showArraysItems(a2);

// classe
class User {
    name;
    role;
    isApproved;

    constructor(name: string, role: string, isApproved: boolean) {
        this.name = name;
        this.role = role;
        this.isApproved = isApproved
    }

    showUserName() {
        console.log(`O nome do usuário é ${this.name}`);
    }
}
const zeca = new User("Zé", "admin", true);
console.log(zeca);
zeca.showUserName();

// interfaces em classes
interface IVehicle {
    brand: string,
    showBrand(): void
}

class Car implements IVehicle {
    brand
    wheels

    constructor(brand: string, wheels: number) {
        this.brand = brand;
        this.wheels = wheels;
    }

    showBrand(): void {
        console.log(`A marca do carro é ${this.brand}`)
    }
}
const fusca = new Car("VW", 4);
fusca.showBrand();

// herança 
class SuperCar extends Car {
    engine

    constructor(brand: string, wheels: number, engine: number) {
        super(brand, wheels)
        this.engine = engine;
    }
}
const a4 = new SuperCar("Audi", 4, 2.0);
console.log(a4);
a4.showBrand();

// decorators

// constructor decorator
function BaseParameters(){
    return function <T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor{
            id = Math.random();
            createdAt = new Date();
        }
    }
}

@BaseParameters()
class Person {
    name

    constructor(name: string){
        this.name = name;
    }
}

const sam = new Person("Sam");
console.log(sam);
