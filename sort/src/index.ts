import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

// const numbers = new NumbersCollection([-1, 10, 2, 3, 5, 12, 1]);
// const chars = new CharactersCollection("dupaxXxadadzzzgfa");
// const sorter = new Sorter(chars);

// sorter.sort();

const linkedList = new LinkedList();

linkedList.add(500);
linkedList.add(300);
linkedList.add(-2);
linkedList.add(20);

// sorter.sort();
linkedList.print();
