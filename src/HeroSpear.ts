
import { HeroAxe } from "./HeroAxe";
import { Hero } from "./Hero_class";
import { Weapon } from "./Weapon_class";

export class HeroSpear extends Hero {
    static paramPower: number;
    constructor (paramBreed : string, paramName : string, paramPower : number, paramResist : number) {
        super(paramBreed, paramName, paramPower, paramResist, new Weapon("Spear"));
        }// FIN DE CONSTRUCTOR    
        
    attack (opponent : Hero) : void {
           if (opponent instanceof HeroAxe) {
                    opponent.paramResist -= HeroAxe.newValuePower *2;
            } 
            console.log(`${Hero.name} attack ${opponent.getValueName} and inflict ${this.newValuePower}`);
             
        }  // FIN de ATTACK
} // FIN DE CLASS HEROSPEAR

