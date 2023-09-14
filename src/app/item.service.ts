import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  private items: Item[] = [];

  constructor() {}

  getAllItems(): Item[] {
    return this.items;
  }

  getItem(item: Item): void {
    this.items.push(item);
  }

  updateItem(updatedItem: Item): void {
    const index = this.items.findIndex((item) => item.id === updatedItem.id);
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
  } 

}
