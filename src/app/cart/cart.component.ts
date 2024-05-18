import { Component } from '@angular/core';

interface Item {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  items: Item[] = [
    { id: 1, name: 'vanila', price: 100 },
    { id: 2, name: 'white forest', price: 150 },
    { id: 3, name: 'black forest ', price: 200 }
  ];

  selectedItems: Item[] = [];

  constructor() { }

  addItemToCart(item: Item) {
    if (!this.selectedItems.find(selectedItem => selectedItem.id === item.id)) {
      this.selectedItems.push(item);
    }
  }

  removeItemFromCart(item: Item) {
    const index = this.selectedItems.findIndex(selectedItem => selectedItem.id === item.id);
    if (index !== -1) {
      this.selectedItems.splice(index, 1);
    }
  }
}
