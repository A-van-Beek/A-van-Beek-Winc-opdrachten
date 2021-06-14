const superheroes = [
  {
    heroName: "Batman",
    publisher: "DC Comics",
    alter_ego: "Bruce Wayne",
    first_appearance: "Detective Comics #27",
    weight: "210",
  },
  {
    heroName: "Superman",
    publisher: "DC Comics",
    alter_ego: "Kal-El",
    first_appearance: "Action Comics #1",
    weight: "220",
  },
  {
    heroName: "Flash",
    publisher: "DC Comics",
    alter_ego: "Jay Garrick",
    first_appearance: "Flash Comics #1",
    weight: "195",
  },
  {
    heroName: "Green Lantern",
    publisher: "DC Comics",
    alter_ego: "Alan Scott",
    first_appearance: "All-American Comics #16",
    weight: "186",
  },
  {
    heroName: "Green Arrow",
    publisher: "DC Comics",
    alter_ego: "Oliver Queen",
    first_appearance: "All-American Comics #16",
    weight: "195",
  },
  {
    heroName: "Wonder Woman",
    publisher: "DC Comics",
    alter_ego: "Princess Diana",
    first_appearance: "The Incredible Hulk #180",
    weight: "165",
  },
  {
    heroName: "Blue Beetle",
    publisher: "DC Comics",
    alter_ego: "Dan Garret",
    first_appearance: "Mystery Men Comics #1",
    weight: "145",
  },
  {
    heroName: "Spider Man",
    publisher: "Marvel Comics",
    alter_ego: "Peter Parker",
    first_appearance: "Amazing Fantasy #15",
    weight: "167",
  },
  {
    heroName: "Captain America",
    publisher: "Marvel Comics",
    alter_ego: "Steve Rogers",
    first_appearance: "Captain America Comics #1",
    weight: "220",
  },
  {
    heroName: "Iron Man",
    publisher: "Marvel Comics",
    alter_ego: "Tony Stark",
    first_appearance: "Tales of Suspense #39",
    weight: "250",
  },
  {
    heroName: "Thor",
    publisher: "Marvel Comics",
    alter_ego: "Thor Odinson",
    first_appearance: "Journey into Myster #83",
    weight: "200",
  },
  {
    heroName: "Hulk",
    publisher: "Marvel Comics",
    alter_ego: "Bruce Banner",
    first_appearance: "The Incredible Hulk #1",
    weight: "1400",
  },
  {
    heroName: "Wolverine",
    publisher: "Marvel Comics",
    alter_ego: "James Howlett",
    first_appearance: "The Incredible Hulk #180",
    weight: "200",
  },
  {
    heroName: "Daredevil",
    publisher: "Marvel Comics",
    alter_ego: "Matthew Michael Murdock",
    first_appearance: "Daredevil #1",
    weight: "200",
  },
  {
    heroName: "Silver Surfer",
    publisher: "Marvel Comics",
    alter_ego: "Norrin Radd",
    first_appearance: "The Fantastic Four #48",
    weight: "unknown",
  },
];

/*
gebruik alleen:
 .map =>
      array.map(function(currentValue, index, arr), thisValue)

      const items = filtered.map(n => {
        const obj = { value: n};
        return obj;
      })

 .filter  => 
      numbers.filter(function(value){return value >= 0})
 .reduce  =>
      array.reduce(function(total, currentValue, currentIndex, arr), initialValue)
*/

// Maak een array van alle superhelden namen

// /*
// 1: maak een array van alle namen
// */

// const heroNames = superheroes.map((hero) => {
//   return hero.heroName;
// });
// console.log(heroNames);

/*
2. maak array van alle lichte helden
*/

// const lightHeroes = superheroes.filter((hero) => {
//   return hero.weight < 190;
// });

// console.log(lightHeroes);
// // bij de oplossing maken ze gebruik van loghtHeroes.length. Dan krijg je 'gewoon' 4.
// // is dat dan het antwoord wat ze zochten??

/*
3. maak array met de namen van alle helden die 200 pounds wegen
*/

// const HeavyHeroes = superheroes
//   .filter((hero) => {
//     return hero.weight == 200;
//   })
//   .map((hero) => {
//     return hero.heroName;
//   });

// console.log(HeavyHeroes);

/*
4. maak array met alle comics waar de superhelden hun
"first appearances" hebben gehad
*/

// const firstAppearance = superheroes.map((hero) => hero.first_appearance);
// console.log("firest appearance:", firstAppearance);

/*
5.
- maak array met alle superhelden van DC Comics.
- maak een array met alle superhelden van Marvel Comics.
*/

// const heroesDCCommics = superheroes
//   .filter((hero) => {
//     return hero.publisher == "DC Comics";
//   })
//   .map((hero) => {
//     return hero.heroName;
//   });

// // console.log(heroesDCCommics);

// const heroesMarvelComics = superheroes
//   .filter((hero) => {
//     return hero.publisher == "Marvel Comics";
//   })
//   .map((hero) => {
//     return hero.heroName;
//   });

// console.log(heroesMarvelComics);

/*
6.
- tel het gewicht van alle superhelden van DC Comics bij elkaar op.
- idem van Marvel Comics.
- bepaal datatype van het gewicht
- controleer of iedereen wel een gewicht heeft
*/
// const DCComics = superheroes.filter((hero) => hero.publisher === "DC Comics");

// const addedWeightDC = DCComics.map((hero) => {
//   return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
// }).reduce((weight1, weight2) => weight1 + weight2);

// console.log("TotalWeight of DC Comics - supersmall version:", addedWeightDC);

// const marvelComics = superheroes.filter((hero) => {
//   return hero.publisher == "Marvel Comics";
// });

// const addedWeightMarvel = marvelComics
//   .map((hero) => {
//     return hero.weight !== "unknown" ? parseInt(hero.weight, 10) : 0;
//     // hier staat: als gewicht niet onbekend is, geef gewicht als integer,
//     // anders (:) geef een nul
//   })
//   .reduce((weight1, weight2) => weight1 + weight2, 0);
// // die 0 op het laatst, daarmee geef je aan wat de initiele waarde is van de reduce functie.
// console.log("TotalWeight of Marvel:", addedWeightMarvel);

/*
7.
- wie is het zwaarste ? (antwoord moet zijn: Hulk)
*/

// First cast all values to a number or 0 if unknown
const allHeroes = superheroes.map((hero) => {
  const weight = hero.weight !== "unknown" ? parseInt(hero.weight) : 0;
  hero.weight = weight;
  return hero;
});

// next, use reduce to find the largest value
const heaviestHero = allHeroes.reduce(
  (currentHeaviestHero, currentHero) => {
    if (currentHero.weight > currentHeaviestHero.weight) {
      return currentHero;
    } else {
      return currentHeaviestHero;
    }
  },
  allHeroes[0]
  // met deze laatste waarde geef je aan
  // wat de initiele waarde moet zijn van de functie
);

console.log(
  "Heaviest hero:",
  heaviestHero.heroName + ", with a weight of: " + heaviestHero.weight
);
