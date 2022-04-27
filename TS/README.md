# TypeScript
<br>

## ***Implicit and Explicity Typed variables***  
A variable is `implicitly typed` when the data type is defined by compiler itself whereas `Explicitly typed` variables are those that are explicitly defined by the user


```ts
//variables

let someVar = "Hello World"; //someVar is now Implicityly typed to ":string" type

let someOtherVar: string = "Hello Again"; //someOtherVar is now explicitly typed variable


//Functions
const getFullName = (firstName,lastName) => { //implicit
    return firstName + " " + lastName;
}

const getAgeAndAdress = (age:number,address:string):string => { //explicit
    return age as string + " " + address;
}
```
<br><br>

## ***Interfaces***
Interface in typescript are used to define an strongly typed object with data types and requied fields. For example if we want to create an object `car` with detais about it, we would be using the following piece of code:
```ts
interface CarsInterface {
    model : string;
    speedInKmph? : number; //using `?` will make the parameter optional
    color : string;
    manufacturer : string;
}
```
<br>
 And now to use the interface we just have to pass the name of the interface *i.e.* `CarsInterface` to the object as shown below:

```ts
const car: CarsInterface = {
    model : "Alto 800",
    speedInKmph : 180,
    color : "White",
    manufacturer : "Maruti Suzuki"
}
//example that will show an error
const car2: CarsInterface = {
    model : "Harier",
    color : "White",
}
// the above code will show an error because we didn't mention the `manufacturer` but it will not show error if we only had missed the `speedInKmph` because it has a `?` at the end , which makes it an optional parameter
```
<br><br>

## ***Types and Union operator***
Types are used to make alias to built in or user defined types. Example of how to define types and use union operator are shown below:
```ts
type someVar = string; // now we can use `someVar` to define a type isntead of string
type someAnotherVar = string | number | null | undefined; // now `someAnotherVar` can be used to define a type that can be either string, number, null or undefined
```

<br><br>

## ***Some More Miscellaeneous Types And `Type Aggression`*** 
There are some more types other than the default data types like: `any`, `unknown`, `void`. The usage of the types are shown below:  

- ### `any`
`any` type is used to completely remove the whole point of the typescript it allows the variable to take any type of data just like we can do in javascript 
```ts
let someVar: any = 10;

//no error will be thrown if we execute any of the following command

```
- ### `void`
`void` type is used when we dont have a return statement as shown below:
```ts
const someFunc = ():void => {
    console.log("Hello People! This is a randome function used for an example")
}

//below block of code will throw an error
const getFullName = (firstName:string, lastName:string):string => {
    return firstName + " " + lastName;
}
```
- ### `unknown`
`unknown` type is just like `any` type but with a little disadvantage. Following code shows that:
```ts
let anyVar:any = 10;
let unknownVar:unknown = 20;


//Type Aggression
let someOtherVar:string = anyVar // this will work this fine because it is of any type
let someMoreOtherVar:string = unknownVar // this will show an error because the compiler doesn't know what is the type of the variable to fix this error we need to tell the compiler what is the type of the variable
let fixedSomeMoreOtherVar:string = unknownVar as string


//Also if you want to convert a string into number you need to do the following
let strVar:string = "100";
let numVar:number = (strVar as unknown) as number; //because compiler cannot directly convert string to number we need to make the string into unknown and then into number
```