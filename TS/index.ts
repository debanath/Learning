//TODO Variables
let SomeVar  = "Randome text"; //this is a implicitly typed variable 
let SomeVar2: string = "Insert some more random texts"; //this is a explicitly typed variable

//! These 2 throws an error because in ts the type of the variable is defined and if we try to assign a different type it will throw an error
//! SomeVar = 123; //this throws an error 
//! SomeVar2 = 456; //this throws an error too



//TODO Functions
const getFullName = (firstName, lastName) => {
    return firstName + " " + lastName;
}

const getFullName2 = (firstName: string, lastName: string):string => {
    return firstName + " " + lastName;
}



//TODO Interface
interface UserInterface {
    name : string;
    age? : number; //* `?` means that the property is optional
}
interface interfaceWithFunction {
    name : string;
    age? : number;
    getFullName : () => string;
}
const user:UserInterface  = {
//const user: {name: string, age: number} = {
    name: "John",
    age: 30,
}

const user2:UserInterface = {
    name: "Johny",
}

const user3:interfaceWithFunction = {
    name: "John Cena",
    age: 35,
    getFullName: () => {
        return user3.name;
    }
}

//TODO Types and union
// * types are used to make allias for different types inbuilt or custom
type something = string | number | null | undefined; // now something is a data type that can be a string, number, null or undefined `|` or `union` basically means that it can be one of those types

let myVar :something; //now myVar is a variable that can be a string, number, null or undefined

let someRandomVar:any = "Some text" //any basically means that it can be anything or TS is turned off

const someRandomVar2 = ():void => { //this function is fine until we try to return something because we cannot return anything in void data type
    console.log("Hello");
}

let vAny:any = "Some text"; // this can be anything
let vUnknown:unknown = "Some text"; // this can be anything too but we cannot assign it to a variable of type string or call with any other type of variable

let some2:string = vAny //this is fine because we can assign it to a variable of any type 
//! let some3:string = vUnknown // this gives an error because our compiler still doesnt know what type of variable VUnknown is yet
let some3:string = vUnknown as string // this is fine because we now told our compiler that vUnknown is a string

//* we can do this with any other types too 
let strVal:string = "10"
// ! let numVal:number = strVal as number // this will give an error just to make sure its not intentional to fix this we need to conver it to unknown first
let numVal:number = (strVal as unknown) as number // this is fine because we are converting it to unknown first and then to number
