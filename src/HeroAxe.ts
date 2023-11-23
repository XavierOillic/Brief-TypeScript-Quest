import { HeroSword } from "./HeroSword";
import { Hero } from "./Hero_class";
import { Weapon } from "./Weapon_class";


export class HeroAxe extends Hero{
    static paramPower: number;
    constructor (paramBreed : string, paramName : string, paramPower : number, paramResist : number) {
        super(paramBreed, paramName, paramPower, paramResist, new Weapon("Axe"));
    } // Fin de Constructor

    attack (opponent : Hero) : void {
           if (opponent instanceof HeroSword) {
                   resist - power *2;
            } 
            console.log(`${Hero.name} attack ${opponent.getValueName} and inflict ${this.newValuePower}`);
    }
}




 /*if (opponent instanceof HeroAxe && this instanceof HeroSpear || 
    opponent.getValueResist() instanceof HeroAxe && this instanceof HeroSword */
