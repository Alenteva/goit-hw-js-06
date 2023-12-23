class Storage {
  #item;
  constructor(item) {
    this.#item = item;
  }
  getItems() {
    return this.#item;
  }
  addItem(newItem) {
    this.#item.push(newItem);
  }
  removeItem(itemToRemove) {
    const index = this.#item.indexOf(itemToRemove);
    if (index > -1) {
      this.#item.splice(index, 1);
    }
  }
}

// class Storage {
//   constructor(initialItems) {
//     this.items = initialItems;
//   }

//   getItems() {
//     return this.items;
//   }

//   addItem(newItem) {
//     this.items.push(newItem);
//   }

//   removeItem(itemToRemove) {
//     const index = this.items.indexOf(itemToRemove);
//     if (index !== -1) {
//       this.items.splice(index, 1);
//     }
//   }
// }
const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
storage.addItem("Droid");
console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
storage.removeItem("Prolonger");
console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]
