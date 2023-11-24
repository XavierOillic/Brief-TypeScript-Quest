import { HeroSpear } from "./HeroSpear";
import { HeroSword } from "./HeroSword";
import { Hero } from "./Hero_class";
import { Weapon, Weapon2 } from "./Weapon_class";



export class HeroAxe extends Hero{
    constructor (paramBreed : string, paramName : string, paramPower : number, paramResist : number) {
        super(paramBreed, paramName, paramPower, paramResist);
        this.weapon2 = new Weapon2("Axe"); // Je crée une nouvelle Arme dans le constructeur de mon HERO ARME, je ne crée l'Instance juste ici.
    } // Fin de Constructor

    attack(opponent: Hero): void {
        if (opponent instanceof HeroSword && opponent instanceof HeroSpear){
            opponent.valueResist = opponent.valueResist - this.valuePower * 2; // on peut FAIRE UN " -= "
        } else super.attack(opponent);
    }
}
// Si l'OPPOSANT est une instance du HEROAXE, la vie de l'opposant sera diminuée de POWER * 2.
// SINON, j'utilise la METHODE DU PARENT GRACE à SUPER.ATTACK

