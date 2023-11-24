
import { HeroAxe } from "./HeroAxe";
import { HeroSword } from "./HeroSword";
import { Hero } from "./Hero_class";
import { Weapon, Weapon2 } from "./Weapon_class";

export class HeroSpear extends Hero {
    constructor (paramBreed : string, paramName : string, paramPower : number, paramResist : number) {
        super(paramBreed, paramName, paramPower, paramResist);
        this.weapon2 = new Weapon2("Spear");
        }// FIN DE CONSTRUCTOR    
        
     attack(opponent: Hero): void {
        if (opponent instanceof HeroAxe && opponent instanceof HeroSword){
            opponent.valueResist -= this.valuePower * 2; // on peut FAIRE UN " -= "
        } else super.attack(opponent);
    } // FIN de ATTACK
} // FIN DE CLASS HEROSPEAR

