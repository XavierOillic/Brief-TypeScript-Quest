
//CREATION OF THE HERO SQUELETTON 

import {Weapon} from "./Weapon_class"
//import {HeroAxe, HeroSpear, HeroSword} from "./HeroAxe_HeroSpear_HeroSword";
import { randomPower, randomResist } from "./random_const";

export class Hero { 
    protected breed: string;
    private name: string;
    private power: number;
    private resist: number;
    weapon ? : Weapon; // property weapon : attribut weapon has a null value, at first.
    static newResistValue: any;
    static newValuePower: any;
// Le ? make the Weapon an option of the Hero.

// WE INITIALIZE THE FACT THAT IT HAVE LIFE, POWER, A NAME, AND A BREED.
    constructor(paramBreed : string, paramName : string, paramPower : number, paramResist : number, weapon ? : Weapon) {
        this.breed = paramBreed;
        this.name = paramName;
        this.power = paramPower;
        this.resist = paramResist;
        this.weapon = weapon; // The hero was created with a weapon, but it has a null value.
        //Hero.weapon = Weapon;
    } 
   
// WE CREATE two MEHOD/type TO CATCH CERTAINS VALUES BECAUSE THEY ARE PRIVATE
    getValueName() : string {
        return this.name;
    } 
    newName(enterNewName : string) : void {
        this.name = enterNewName;
    }
/////
    getValuePower() : number {
        return this.power;
    } 
    newValuePower(enterNewPowerVal : number) : void {
        this.power = enterNewPowerVal;
    }
/////
    getValueResist() : number {
        return this.resist;
    }
    newResistValue(enterNewResistVal : number) : void{
        this.resist = enterNewResistVal;
    }
/////
    getValueWeapon() : any {
        return this.weapon ;
    }
    

//THE first ONE Method: THE FIGHT. The opponent beat. IF THIS ATTACK IS MORE STRONGER THAN THE LIFE OF THE SECOND, THEN HE DIE. OTHERWISE ...
// here, the "THIS INSTANCEOF " make reference to the HERO CLASS.
// Ne gardez ici que l'attaque normale 
     attack(opponent : Hero) : void {
        /*if (opponent instanceof HeroAxe && this instanceof HeroSpear || 
            opponent instanceof HeroAxe && this instanceof HeroSword ||
            opponent instanceof HeroAxe && this instanceof HeroAxe ||

            opponent instanceof HeroSpear && this instanceof HeroAxe || 
            opponent instanceof HeroSpear && this instanceof HeroSword ||
            opponent instanceof HeroSpear && this instanceof HeroSpear ||

            opponent instanceof HeroSword && this instanceof HeroSpear || 
            opponent instanceof HeroSword && this instanceof HeroAxe ||
            opponent instanceof HeroSword && this instanceof HeroSword ) 
            {
            opponent.resist -= this.power *2;
                } else */
                opponent.resist -= this.power;
                     console.log(`${opponent.name} attack ${this.name}, and inflict ${this.power} dammage !
                            I'm dying...  eeeeeeuuuuuurgh...... `);

    } // END FUNCTION ATTACK


    isAlive() : boolean {
        if (this.resist > 0) {
            return true;
        } else return false;
    }

} // END OF HERO CLASS



