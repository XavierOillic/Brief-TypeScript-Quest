class Hero {
    private breed: string;
    private name: string;
    private power: number;
    private life: number;

  constructor(paramBreed : string, paramName : string, paramPower : number, paramLife : number ) {
    this.breed = paramBreed;
    this.name = paramName;
    this.power = paramPower;
    this.life = paramLife;
    }

    getValue() {
    return this.breed;
    return this.name;
    return this.power;
    return this.life;
    }

    isAlive(String: string) {
    console.log(String);
    }

    attack(balin : Hero) {
        if (this.power < this.life) {
            console.log(this.isAlive (`False ! ...still Alive, Dwarf !!`));
        } else if (this.power > this.life) {
            console.log(this.isAlive (`${name}, Dirty ${this.breed}, eeeeeeuuuuuurgh...... True ! `));
        } else {
            console.log("Go one Dwarf !");
        }
    }
}
const grumpft = new Hero("Troll", "Grumpftt", 3000, 1500);
const balin = new Hero("Dwarf","Bâlin", 750, 700);
const legolas = new Hero("Elfe","Legolas", 800, 600);
const opponent = new Hero("Droïde","Niaarkk!", 2000, 600);

console.log(this.attack(opponent, Hero));
