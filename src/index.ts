import { HeroAxe } from "./HeroAxe";
import { HeroSpear } from "./HeroSpear";
import { HeroSword } from "./HeroSword";
import { Hero } from "./Hero_class";
import { randomPower, randomResist } from "./random_const";


class Game {
    battle () {
            while (hero4.isAlive() && hero5.isAlive()) {
                hero4.attack(hero5);
                hero5.attack(hero4);
            }
   }
}


/*const hero1 = new Hero("Dwarf","Bâlin", randomResist(1000, 1500), randomPower(200, 300), HeroAxe);
const hero2 = new Hero("Elfe","Legolas", randomResist(1000, 1200), randomPower(200, 300), HeroSpear);
const hero3 = new HeroAxe("Troll","Groumpft", randomResist(1000, 1200), randomPower(200, 300));

const hulk = new Hero("Avengers","hulk", randomResist(1000, 1500), randomPower(20, 30));
const thor = new Hero("Avengers","Thor", randomResist(1000, 1500), randomPower(20, 30));*/

const hero4 = new HeroAxe("Avengers","Hulk", randomPower(100, 150), randomResist(1000, 1500));
const hero5 = new HeroSpear("Avengers","Thor", randomPower(100, 150), randomResist(1000, 1500));

const partie1 = new Game(); // JE CREE UNE INSTANCE DE MA GAME que j'appelle PARTIE 1
const partie2 = new Game();

partie1.battle(); // J'appelle la Partie1."LA METHODE" BATTLE.
partie2.battle()