import { HeroSpear } from "./HeroSpear";
import { Hero } from "./Hero_class";
import { Weapon } from "./Weapon_class";



export class HeroSword extends Hero{
    constructor (paramBreed : string, paramName : string, paramPower : number, paramResist : number) {
        super(paramBreed, paramName, paramPower, paramResist, new Weapon("Sword"));
    }

          attack (opponent : Hero) : void {
           if (opponent instanceof HeroSpear) {
                    opponent.paramResist -= HeroSpear.paramPower *2;
            } 
            console.log(`${Hero.name} attack ${opponent.getValueName} and inflict ${this.newValuePower}`);
        }
} // FIN de CLASS HEROSWORD