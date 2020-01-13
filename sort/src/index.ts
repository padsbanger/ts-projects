import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";

const numbers = new NumbersCollection([-1, 10, 2, 3, 5, 12, 1]);
const chars = new CharactersCollection("dupaxXxadadzzzgfa");
const sorter = new Sorter(chars);

sorter.sort();
console.log(sorter.collection.data);
