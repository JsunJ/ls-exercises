class Pet {
  constructor(species, name) {
    this.species = species;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.petCount = 0;
  }

  numberOfPets() {
    return this.petCount;
  }
}

class Shelter {
  constructor() {
    this.adoptionList = {};
  }

  adopt(adopter, pet) {
    if (!this.adoptionList[adopter.name]) {
      this.adoptionList[adopter.name] = [];
    }

    this.adoptionList[adopter.name].push(`a ${pet.species} named ${pet.name}`);
    adopter.petCount += 1;
  }

  printAdoptions() {
    for (const adopter in this.adoptionList) {
      console.log(`${adopter} has adopted the following pets:`)
      for (let i = 0; i < this.adoptionList[adopter].length; i++) {
        console.log(this.adoptionList[adopter][i]);
      }
      console.log('');
    }
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);