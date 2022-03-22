import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Item } from "./item.model";

@Injectable({
  providedIn:'root'
})
export class ItemService {

  maxItemId!: number;

  item: Item = {
    name: 'first item',
    id: '0',
    brand: 'lenovo',
    model: 'flex',
    datePurchased: new Date(),
    dateAdded: new Date()
  }

  items: Item[] = [
    {
      name: 'first item',
      id: '0',
      brand: 'lenovo',
      model: 'flex',
      datePurchased: new Date(),
      dateAdded: new Date()
    },
    {
      name: 'second item',
      id: '1',
      brand: 'lenovo',
      model: 'flex',
      datePurchased: new Date(),
      dateAdded: new Date()
    },
    {
      name: 'third item',
      id: '2',
      brand: 'lenovo',
      model: 'flex',
      datePurchased: new Date(),
      dateAdded: new Date()
    },
  ];

  itemsChanged = new Subject<Item[]>();

  constructor() {
    this.maxItemId = this.getMaxId();
  }


  fetchItems() {

  }

  storeItems() {

  }

  getItems() {
    return this.items.slice();
  }

  getItem(id: string): Item {
    return this.items[+id];
  }

  addItem(item: Item) {

  }

  updateItem(originalItem: Item, newItem: Item) {

  }

  deleteItem(item: Item) {
    if (!item) {
      return;
    }
    const pos = this.items.indexOf(item);
    if (pos < 0) {
      return;
    }
    this.items.splice(pos, 1);
    this.itemsChanged.next(this.items.slice());

    this.storeItems();
  }

  getMaxId(): number {
    var maxId = 0;
    var currentId;
    for (var i = 0; i < this.items.length; i++) {
      currentId = parseInt(this.items[i].id);
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

}
