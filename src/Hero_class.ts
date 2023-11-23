
//CREATION OF THE HERO SQUELETTON 
import {Weapon} from "./Weapon_class"

export class Hero {
    protected breed: string;
    private name: string;
    private power: number;
    private resist: number;
    weapon ? : Weapon; // property weapon : attribut weapon has a null value, at first.
// Le ? make the Weapon an option of the Hero.

// WE INITIALIZE THE FACT THAT IT HAVE LIFE, POWER, A NAME, AND A BREED, and A WEAPON (or NOT ... Thanks to "?")
    constructor(paramBreed : string, paramName : string, paramPower : number, paramResist : number, weapon ? : Weapon) {
        this.breed = paramBreed;
        this.name = paramName;
        this.power = paramPower;
        this.resist = paramResist;
        this.weapon = weapon; // The hero was created with a weapon, but it has a null value.
    } 
   
// WE CREATE two MEHOD/type TO CATCH CERTAINS VALUES BECAUSE THEY ARE PRIVATE
// AT FIRST, I CATCH.
    getValueName() : string {
        return this.name;
    } 
// In a second time, i give it the possibility to be changed.
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
    
     attack(opponent : Hero) : void {
                opponent.resist -= this.power;
                     console.log(`${opponent.name} attack ${this.name}, and inflict ${this.power} dammages. `);

    } // END FUNCTION ATTACK

    isAlive() : boolean {
        if (this.resist > 0) {
            return true;
        } else return false;
    }

} // END OF HERO CLASS




/*
attack(opponent : Hero) : void {
        let dammages = 0;
        dammages = this.power;
        console.log(this.power);
            if ((this.resist -= dammages) == 0) {
                     console.log(`${opponent} attack ${this.name}, and inflict ${this.power} dammages. `)};

    } // END FUNCTION ATTACK

*/

