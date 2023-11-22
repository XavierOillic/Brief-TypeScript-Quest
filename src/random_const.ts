// GENERATION OF RANDOMIZED NUMBERS TO DEFINE THE BEAT POWER AND LIFE OF OUR CHARACTERS  

   export const randomPower = (min: number, max: number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

    export const randomResist = (min : number, max : number) =>
    Math.floor(Math.random() * (max - min + 1)) + min;

