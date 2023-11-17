class Hero {
    breed: string;
    name: string;
    power: number;
    life: number;


  // Normal signature with defaults
  constructor(breed : string, name : string, power : number, life : number ) {
    this.breed = breed;
    this.name = name;
    this.power = power;
    this.life = life;
  } 

    balin(opponent : Hero) {
        if (this.power < this.life) {
            return this.isAlive(`...still Alive, Dwarf !!`);
        } else if (this.power > this.life){
            return this.isAlive("eeeeeeuuuuuurgh......");
        }
  }

  isAlive(result : string) {

  };
}

const balin = new Hero("Dwarf","Bâlin", 750, 700);
const legolas = new Hero("Elfe","Legolas", 1000, 600)
