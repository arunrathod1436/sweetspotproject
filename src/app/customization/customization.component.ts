import { Component, OnInit } from '@angular/core';

interface Ingredient {
  name: string;
  selected: boolean;
}

interface Design {
  image: string;
  selected: boolean;
}

@Component({
  selector: 'app-customization',
  templateUrl: './customization.component.html',
  styleUrls: ['./customization.component.css']
})
export class CustomizationComponent implements OnInit {
[x: string]: any;
  sizes: string[] = ['Small', 'Medium', 'Large'];
  selectedSize: string = 'Medium';

  ingredients: Ingredient[] = [
    { name: 'Chocolate Chips', selected: false },
    { name: 'Sprinkles', selected: false },
    { name: 'Strawberries', selected: false },
    { name: 'Blueberries', selected: false },
  ];

  designs: Design[] = [
    { image :'cake-design-1.jpg', selected: false },
    { image: 'cake-design-2.jpg', selected: false },
    { image: 'cake-design-3.jpg', selected: false },
  ];

  constructor() { }

  ngOnInit(): void { }

  selectIngredient(ingredient: Ingredient) {
    ingredient.selected = !ingredient.selected;
  }

  selectDesign(design: Design) {
    this.designs.forEach(d => d.selected = false);
    design.selected = true;
  }

  selectSize(size: string) {
    this.selectedSize = size;
  }
}
