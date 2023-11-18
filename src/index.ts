// GENERATION OF RANDOMIZED NUMBERS TO DEFINE THE BEAT POWER AND LIFE OF OUR CHARACTERS  
   const randomPower = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

    const randomResist = (min : number, max : number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

//DCREATION OF THE HERO SQUELETTON 
class Hero { 
    private breed: string;
    private name: string;
    private power: number;
    private resist: number;

// WE INITIALIZE THE FACT THAT IT HAVE LIFE, POWER, A NAME, AND A BREED.
    constructor(paramBreed : string, paramName : string, paramPower : number, paramResist : number ) {
        this.breed = paramBreed;
        this.name = paramName;
        this.power = paramPower;
        this.resist = paramResist;
    } 
   
// WE CREATE A MEHOD TO CATCH CERTAINS VALUES BECAUSE THEY ARE PRIVATE
    getValue() : any {
        return this.breed;
        return this.name;
        return this.power;
        return this.resist;
    } 

// THE FIRST FUNCTION...STILLE ALIVE
    isAlive(result : boolean) {
        return result;
    }

//THE SECOND ONE : THE FIGHT. IF THE FIRST IS MORE STRONGER THAN THE LIFE OF THE SECOND, THEN HE DIE. OTHERWISE ...
    attack(opponent : Hero) {
        if (this.power < this.resist) {
            return `${this.isAlive} ...Go on Bastard, i'm still alive ! Hit again !`;
        } else if (this.power > this.resist) {
            return `${Hero.name} !!!  eeeeeeuuuuuurgh......Tu m'as tué ! `;
            //console.log(this.isAlive (`${name}, Dirty ${this.breed}, eeeeeeuuuuuurgh...... True ! `));
        } else {
            return "Go one Dwarf, I'M WAITING FOR YOU ! !";
        }
    }
}

const opponent = new Hero("", "", randomResist(1, 100), randomPower(1, 100));
const grumpft = new Hero("Troll", "Grumpftt", randomResist(80, 90), randomPower(1, 100));
const balin = new Hero("Dwarf","Bâlin", randomResist(100, 150), randomPower(200, 300));
const legolas = new Hero("Elfe","Legolas", randomResist(1000, 1500), randomPower(200, 300));

console.log(legolas instanceof Hero);
console.log(grumpft instanceof Hero);
console.log(balin instanceof Hero);
console.log(opponent instanceof Hero);

console.log(opponent.attack(grumpft));

console.log(legolas);
console.log(grumpft);
console.log(balin);
console.log(opponent);







