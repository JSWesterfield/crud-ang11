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

  getItem(item: item): void {
    this.items.push(item);
  }

}
