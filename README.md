# Briefing

You will have to find the following information and test them as you go along in your program to experiment and understand how TypeScript will help you write your best code!

## Level 1

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ Which are the different primitive data types in TypeScript?

We find seven primitives Data Types : string, number, boolean, null, undefined, symbol, bigint.
the most commonly used are the Three first one : string, boolean, and number.
We define the variables by using them without Uppercase.

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ How to type an Array?

For the Arrays, it depends of what we are going to put in it.

```ts
let fruits: string[] = ["Apple", "Pinapple", "Banana"];
```

We can declare an array with differents types of Type like the following example :

```ts
let values: string | number = ["Apple", "Pinapple", 12, 67];
```

or

```ts
let fruits: Array<string> = ["Apple", "peach"];
```

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ What is the `any` type?

When we declare un variable with no specification, Typescript considers like an "ANY" Type.
WE CAN USE "ANY", but we have to NEVER DO IT !

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ How to type the return of a function as well as the type of its parameters?

We can specify a result of a function by using the two dots and the name of the Type. Just before the first braces.

```ts
function getFavoriteNumb(a: number, b: number): number {
  return getFavoriteNumb(23, 90);
}
```

**🎉🎉🎉🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱Update the Github Project board🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🎉🎉🎉**

## Level 2

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ What is a class?

It is a Group of objects (created with NEW word) which have all the same properties. A class is acting like a template, to build a lot of parameters in one shot, for another lot of Element. It works like a shape.

```ts
class MyClass {
  x : number;
  y : number;

  const MyClass = New MyClass();
MyClass.x = 0;
MyClass.y = 0;
  }
```

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ What is a class constructor?

The CONSTRUCTOR is a special/particular METHOD of the class, used to create objects and initialize field value.
A constructor is a special Function, which can be called only once.
ONE CONSTRUCTOR PER CLASS.

[Alt text](<src/image/Capture d’écran 2023-11-17 à 09.42.19.png>)

```ts
class Point {
  x: number;
  y: number;

  // Normal signature with defaults
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }
}
```

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ What is a class instance?

It is an Object. Known as Class Object or Class instance.
While classes are groups of objects, an instance is a specific object that actually belongs to a class.

```ts
class Person {
  taille: string;
  poid: string;

  constructor(taille: string, poid: string) {
    this.taille = taille;
    this.poid = poid;
  }
}
const personInstance = new Person("180 cm", "80kg");
```

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ How to check that a class is of a certain instance?

The instanceof operator in TS is used to check whether an object is an instance of a particular class or not.
objectName instanceOf className; Here, if objectName is an instance of className , the operator returns true . Otherwise, it returns false .
We can use it in a IF condition, it return a booelan Value.

```ts
function Car (make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const Bagnolle = new Car ("WolfWagen","Coccinelle","1960")

console.log(auto instanceOf Car); //Expected TRUE
console.log(auto instanceOf Object); // Expected TRUE
```

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ What is `this` in a class?

This. refer to the Class Instance, and its properties.
====>> We cannot use THIS if we don't have create a CONSTRUCTOR in the Class declaration.

Le THIS design T H I S one !
It act only one Instance.
Le THIS act also on Method.

```ts
class Voiture {
  marque: string;
  modele: string;

  constructor(marqueParam: string, modelParam: string) {
    this.marque = marqueParam;
    this.model = modelParam;
  }
  afficherDetails(): void {
    console.log(`Marque => ${this.marque}, Modèle => ${this.modele}`);
  }
}

const bagnolle = new Voiture("Toyota", "Coccinelle");
const caisse = new Voiture("Honda", " NianiNAiNAINIA");
```

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ What is a class method?
A method is like a function, in a Class, and it is Bound to this Class.
We declare a Class Dog, and this dog make noise. This Method (Noise) is bound to the Dog Class.
And we can call this Method, by using one Instance of the Dog Class.

We cannot call a method on an object which is not instanciated.
Excepted the Static Class.

```ts
class Animal {
  nom: string;
  race: string;

  constructor(nomParam: string, raceParam: string) {
    this.nom = nomParam;
    this.race = raceParam;
  }
  faitDuBruit(): void {
    console.log("...fait sn bruit d'animal.");
  }
}
const chien = new Animal("Gepetto", "Bouvier Bernois");
const chat = new Animal("Pignouse", "chat");
```

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ What is the visibility of properties?

By default, the visibility of all properties, methods Classes is "Public".
So, we can access outside of the class using an object of the class.

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ What is the difference between `public`, `private` and `protected`?

===> PUBLIC : access everywhere.
===> PRIVATE : only allows only INSIDE the class, not even with a Child.
===> PROTECTED : allows access inside the class, and in the derived Class, like a Child.

The PRIVATE ACCESS modifier ensures that the Class members are visible only to that class and are not accessible outside the containing class.

```ts
class Employee {
  private code: number;
  public: string; // Public par defaut
}
let employeeNew = new employee();
employeeNew.code = 123; //====> COMPILOR ERROR !
employeeNew.name = "Marc"; //====> OK !

class Emploi extends Employee {
  // La  class Emploi depend de la class Employee.
}
```

**🎉🎉🎉🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱Update the Github Project board🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🎉🎉🎉**

## Level 3

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ How to split our program into different files? (e.g. a class in a file that I import into another)

When we create a program, and when it becomes too long, we can split it into differents parts, so as to make it easily to read, and maintain.
In a Program, we can specify what parts of the code we wanted to call in another file.
Finally, we will have severals files with parts of a same program.

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ What is the `export` keyword?

To allow an import from another file, we have to use the Key Word EXPORT at the beginning of the Class and/or Programm.

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ What is the `import` keyword?

As soon as we have write the Key word, we can use this one to IMPORT one part.

This example for importing a Function, but we also can import a Class.

```ts
File1.ts :
export SomeFunction () {
  //body of the function
}

File2.ts :
import { Somefunction } from "./File1"

someFunction();

//===============================================================

File1.ts :
const AddTwoNumbers = (a : number, b : number) : number => {
  return a + b;
}
export default AddTwoNumbers;

File2.ts :
import AddTwoNumbers from "./File1"
const result = AddTwoNumbers(4, 5);

```

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ What's inheritance?

It occurs when a Child Class inherit the properties, methods from a Parent Class.
To inherit a Class, we use the EXTENDS key word.

```ts
class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstname;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstname} ${this.lastName}`;
  }
  describe(): string {
    return `this is ${this.firstname} ${this.lastName}`;
  }
}

class Employee extends person {
  //...
}
```

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ How to call the constructor of a parent class?

We use the "SUPER()" method of the constructor Method.
Using it in the Constructor of the Child Class to access to the Constructor of the Parent Class.

```ts
class Person {
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}
// =======>> To inherit from the Parent Class "Person", we have to use the KEY word EXTENDS at the beginning of the next one; we have also to call the Constructor by using the key Word SUPER().
//inside the Parenthis, we write the two parameters we want to take into.

class Employee extends Person {
  constructor(firstName: string, lastName: string, private jobTitle: string) {
    // call the constructor of the Person class:
    super(firstName, lastName);
  }
}
```

At least, we can creates only one employee with the parameters of the both class beyond it.
Because the Employee class inherits properties and methods of the Person class, you can call the getFullName() and describe() methods on the employee object, as follows:

```ts
let employee = new Employee("John", "Doe", "Web Developer");

console.log(employee.getFullName());
console.log(employee.describe());
```

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ How to call a method of a parent class?

We have to use the "super. methodInParentClass()" syntax to invoke the methodInParentClass() in the method of the child class.

The class which inherits properties and methods is called the child class. And the class whose properties and methods are inherited is known as the parent class.
Inheritance allows you to reuse the functionality of an existing class without rewriting it.

```ts
class Animal {
  public name;
  constructor(name) {
    this.name = name;
  }
  move(meters) {
    alert(this.name + " moved " + meters + "m.");
  }
}

class Snake extends Animal {
  constructor(name) {
    super(name);
  }
  move() {
    alert("Slithering...");
    super.move(5);
  }
}

class Horse extends Animal {
  constructor(name) {
    super(name);
  }
  move() {
    alert(super.name + " is Galloping...");
    super.move(45);
  }
}
```

🤪🤪🤪🤪🤪🤪🤪🤪 ➠ What is polymorphism?

It is the ability to create a Class that have more than one Form; in others words, Classes have the same
Methods but differents Implementations.
When several classes inherit from a parent class, and override the same Functionnality.

```ts
class Car {
  Rent(type: string): this {
    console.log(`${type} has been rented.`);
    return this;
  }

  Record(): this {
    console.log(`Car was rented at ${new Date().toLocaleString()}`);
    return this;
  }

  Return(type: string): this {
    console.log(`${type} has been returned.`);
    return this;
  }
}
//At first, We create a Class car with 3 methods : Rent, record and return.

class ElectricCar {
  Charge(): this {
    console.log(`ElectricCar is charged and ready to be rented`);
    return this;
  }
}
class GazCar {
  Refill( : this {
    consol.log('...is full !');
    return this;
  })
}
```

Thanks to the "THIS" in the two followers class, next to car, the Electric and gasCar inherit from the First one Car, the three Methods in it : rent, record and return.
Just by returning THIS at the end of electric et gas.

**🎉🎉🎉🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱Update the Github Project board🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🎉🎉🎉**
**🎉🎉🎉🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱Update the Github Project board🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🎉🎉🎉**
**🎉🎉🎉🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱Update the Github Project board🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🎉🎉🎉**

## Boss level

You've learned a lot of things! Now it's time to put it into practice through this exercise in pairs!

### Part 1 : Heroes

Create a `Hero` class that allows you to create objects with the following properties:

```ts
name: string;
power: number;
life: number;
```

And the methods

```ts
  attack(opponent: Hero)
  isAlive()
```

The `attack` method has an `opponent` parameter (of type `Hero`). It is necessary to reduce the number (`life`) of `opponent` by as much damage (`power`) of the attacker.

​*Example: If the Joan instance, attacks the Leon instance, it will be represented by this method call:*

```ts
joan.attack(leon);
```

The `isAlive` method should return `true` if the hero's life points are greater than zero and `false` otherwise.

Create two instances of `Hero` and check that the `attack` and `isAlive` methods work.

**Constraint to add**: you now have to make sure that the `name`, `power`, `life` properties are private. You will have to create methods to access their value and modify their value.

### Part 2 : Weapons

​
Create a `Weapon` class with the following property:

```ts
name: string;
```

Add the `weapon` attribute (of type `Weapon`) to the `Hero` class without modifying the constructor (so `weapon` is not initialized).

Create three classes `HeroAxe`, `HeroSword` and `HeroSpear` that inherit from `Hero`.

These three classes call the constructor of their parent and initialize `weapon` with instances of the `Weapon` class whose names will be `axe`, `sword` or `spear` as the case may be.

In the `HeroAxe`, `HeroSword` and `HeroSpear` classes, redefine the `attack` method to take into account the following cases:

- `HeroAxe` : if the type of `opponent` is `HeroSword`, multiply `power` by two
- `HeroSword` : if the type of `opponent` is `HeroSpear`, multiply `power` by two
- `HeroSpear` : if the type of `opponent` is `HeroAxe`, multiply `power` by two

Tip: use the `super` keyword to call the `attack` method of the parent class.
​
Create instances of the three classes `HeroAxe`, `HeroSword` and `HeroSpear` and check that their `attack` methods work correctly.
​

### Part 3 : Battle

Create a loop that makes two instances of subclasses `Hero` fight each other (they attack at the same time).

When at least one of them is dead, display `{heroName} wins`. If both are dead, display `It's a draw`.

**🎉🎉🎉🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱Update the Github Project board🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🐱🎉🎉🎉**

---

**_Bonus 1 : Weapon damage_**

_Add a `damage` property to the `Weapon` class and make sure it is initialized by the constructor._

_Edit the `attack` method of `Hero` so that the damage is calculated as follows: the hero's power `power` + the weapon's damage `power`_

**_Bonus 2 : User interface_**

_Create a user interface for the application (for example, with a choice of heroes and weapons, and a visual on the damage inflicted)_
