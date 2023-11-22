import { Hero } from "./Hero_class";
import { Weapon } from "./Weapon_class";


export class HeroAxe extends Hero{
    constructor (paramBreed : string, paramName : string, paramPower : number, paramResist : number) {
        super(paramBreed, paramName, paramPower, paramResist, new Weapon("Axe"));
        //this.weapon = new Weapon("Axe");
    }
}