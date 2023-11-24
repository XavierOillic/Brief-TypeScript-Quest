import { HeroAxe } from "./HeroAxe";
import { HeroSpear } from "./HeroSpear";
import { Hero } from "./Hero_class";
import { Weapon, Weapon2 } from "./Weapon_class";



export class HeroSword extends Hero{
    constructor (paramBreed : string, paramName : string, paramPower : number, paramResist : number) {
        super(paramBreed, paramName, paramPower, paramResist);
        this.weapon2 = new Weapon2("Sword");
    }

         attack(opponent: Hero): void {
        if (opponent instanceof HeroSpear && opponent instanceof HeroAxe){
            opponent.valueResist = opponent.valueResist - this.valuePower * 2; // on peut FAIRE UN " -= "
        } else super.attack(opponent);
    }
} // FIN de CLASS HEROSWORD