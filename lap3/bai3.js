const dogs = [
  { weigh: 22, curFood: 250, owners: ["Alice", "Bob"] },
  { weigh: 8, curFood: 200, owners: ["Matial"] },
  { weigh: 13, curFood: 275, owners: ["Sarah", "John"] },
  { weigh: 32, curFood: 340, owners: ["Michael"] },
];

//1
dogs.forEach((dog) => (dog.recFood = Math.trunc(dog.weigh ** 0.75 * 28)));

//2
const dogSarah = dogs.find((dog) => dog.owners.includes("Sarah"));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? "much" : "little"
  } `
);

//3
const ownersEatTooMuch = dogs
  .filter((dog) => dog.curFood > dog.recFood)
  .flatMap((dog) => dog.owners);
//.flat();
console.log(ownersEatTooMuch);

const ownersEatTooLittle = dogs
  .filter((dog) => dog.curFood < dog.recFood)
  .flatMap((dog) => dog.owners);
//.flat();
console.log(ownersEatTooMuch);

//4
console.log(`${ownersEatTooMuch.join(" and")}'s dogs eat too much`);
console.log(`${ownersEatTooLittle.join(" and ")}'s dogs eat too little`);

//5
console.log(dogs.some(dog.curFood === dog.recFood));

//6
console.log(
  dogs.some(
    (dog) => dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
  )
);

console.log(dogs.some(checkEatingOkay));

//7
console.log(dogs.filter(checkEatingOkay));

//8
const dogsCopy = dogs.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsSorted);
