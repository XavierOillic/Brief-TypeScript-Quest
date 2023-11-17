# Briefing

You will have to find the following information and test them as you go along in your program to experiment and understand how TypeScript will help you write your best code!

## Level 1

- Which are the different primitive data types in TypeScript?

We find seven primitives Data Types : string, number, boolean, null, undefined, symbol, bigint.
the most commonly used are the Three first one : string, boolean, and number.
We define the variables by using them without Uppercase.

- How to type an Array?

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

- What is the `any` type?

When we declare un variable with no specification, Typescript considers like an "ANY" Type.

- How to type the return of a function as well as the type of its parameters?

We can specify a result of a function by usinf the two dots and the name of the Type. Just before the first braces.

```ts
function getFavoriteNumb(a, b): number {
  return 26;
}
```

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 2

- What is a class?

It is a Group of objects (created with NEW word) which have all the same properties. A class is acting like a template, to build a lot of parameters in one shot, for another lot of Element.

```ts
class MyClass {
  x : number;
  y : number;

  const MyClass = New MyClass();
MyClass.x = 0;
MyClass.y = 0;
  }
```

- What is a class constructor?

The constructor is a special method of the class, used to create objects and initialize field value.
A constructor is a special Function, which can be called only once.
We create a CLASS (the template)![Alt text](<Capture d’écran 2023-11-17 à 09.42.19.png>)

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

- What is a class instance?

It is an Object. Known as Class Object or Class instance.
While classes are groups of objects, an instance is a specific object that actually belongs to a class.

```ts
class Person {}
const personInstance = new Person();
```

```ts
class Person {
  constructor(name: string) {
    console.log(`Constructor called with name=${name}`);
  }
}

const personInstance = new Person("Jane");
```

- How to check that a class is of a certain instance?

The instanceof operator in Java is used to check whether an object is an instance of a particular class or not.
objectName instanceOf className; Here, if objectName is an instance of className , the operator returns true . Otherwise, it returns false .

- What is `this` in a class?

- What is a class method?

- What is the visibility of properties?

- What is the difference between `public`, `private` and `protected`?

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

## Level 3

- How to split our program into different files? (e.g. a class in a file that I import into another)
- What is the `export` keyword?
- What is the `import` keyword?
- What's inheritance?
- How to call the constructor of a parent class?
- How to call a method of a parent class?
- What is polymorphism?

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

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

**🎉🎉🎉Update the Github Project board🎉🎉🎉**

---

**_Bonus 1 : Weapon damage_**

_Add a `damage` property to the `Weapon` class and make sure it is initialized by the constructor._

_Edit the `attack` method of `Hero` so that the damage is calculated as follows: the hero's power `power` + the weapon's damage `power`_

**_Bonus 2 : User interface_**

_Create a user interface for the application (for example, with a choice of heroes and weapons, and a visual on the damage inflicted)_
