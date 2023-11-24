
//CREATION OF THE HERO SQUELETTON 
import {Weapon, Weapon2, Weapon3} from "./Weapon_class"

export class Hero {
    protected breed: string;
    private name: string;
    private power: number;
    private resist: number;
// ====>     weapon ? : Weapon; =====>  property weapon : attribut weapon has a null value, at first.
// the ? make the Weapon an option of the Hero.
// The ! allows us to initialize the ATTRIBUT in the constructor and it's OK.
// Le private permet d'empecher de modifier les variables à souhait.
    weapon2 : Weapon2 | undefined;

// WE INITIALIZE THE FACT THAT IT HAVE LIFE, POWER, A NAME, AND A BREED, and A WEAPON (or NOT ... Thanks to "?")
    constructor(paramBreed : string, paramName : string, paramPower : number, paramResist : number) {
        this.breed = paramBreed;
        this.name = paramName;
        this.power = paramPower;
        this.resist = paramResist;
        //this.weapon = weapon; // The hero was created with a weapon, but it has a null value.
    } 
   
// GETTERS & SETTERS ==== > GET et SET
// AT FIRST, I CATCH. ===> d'abord un GET.
    get valueName() {
        return this.name;
    } 
// In a second time, i give it the possibility to be changed.
    set valueName (enterNewName : string){
        this.name = enterNewName;
    }

    get valueResist () : number {
        return this.resist;
    } // ACCESSEUR
    set valueResist (newResist: number) {
        this.resist = newResist;
    }// MODIFICATEUR

    get valuePower () : number {
        return this.power;
    }

    
     attack(opponent : Hero) : void {
        // nouvelle vie adversaire = ancienne vie adv. - puissance attack.
        // opponent.resist = opponent.resist - this.power;
        opponent.resist -= this.power;
                 console.log(`${opponent.name} attack ${this.name}, and inflict ${this.power} dammages. `);

    } // END FUNCTION ATTACK

    isAlive() : boolean {
        if (this.resist > 0) {
            return true;
        } else return false;
    } // == "RETURN THIS.RESIST > 0" ==> LE RESULTAT D'UNE COMPARAISON EST UN BOOLEEN.
 
} // END OF HERO CLASS

