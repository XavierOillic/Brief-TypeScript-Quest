import { HeroAxe } from "./HeroAxe";
import { HeroSpear } from "./HeroSpear";
import { HeroSword } from "./HeroSword";
import { Hero } from "./Hero_class";
import { randomPower, randomResist } from "./random_const";

const hulk = new HeroSpear("Avengers","Hulk", randomPower(100, 150), randomResist(1000, 1500));
const thor = new HeroSpear("Avengers","Thor", randomPower(100, 150), randomResist(1000, 1500));

const legolas = new Hero("Elfe","Legolas", randomPower(10, 120), randomResist(200, 300));
const groumpft = new HeroAxe("Troll","Groumpft", randomPower(10, 120), randomResist(200, 300));



// WHILE, TANT que l'un ET l'autre sont toujours en vie, ils peuvent se battre.
    function battle (fighterOne: Hero, fighterTwo : Hero) {
            while (fighterOne.isAlive() && fighterTwo.isAlive()) {
                
                fighterOne.attack(fighterTwo);
                fighterTwo.attack(fighterOne);
            }
            if (fighterOne.isAlive()) {
                return `${fighterOne.valueName} wins !`;
            } else if (fighterTwo.isAlive()) {
                return `${fighterTwo.valueName} wins !`;
            } else return "It's a draw !"
   }

console.log("-------------------------------------------------------------------------")

console.log(thor);
console.log(hulk);

console.log("-------------------------------------------------------------------------")

const resultFight = battle(hulk, thor);
console.log(resultFight);

console.log("-------------------------------------------------------------------------")

