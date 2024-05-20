
import { Component, OnInit } from '@angular/core';
import { CrudService } from './crud.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  items: any[] = [];
  newItem: any = {};
  currentItem: any = {};

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.crudService.getItems().subscribe(data => {
      this.items = data;
    });
  }

  addItem(): void {
    this.crudService.addItem(this.newItem).subscribe(data => {
      this.items.push(data);
      this.newItem = {};
    });
  }

  editItem(item: any): void {
    this.currentItem = { ...item };
  }

  updateItem(): void {
    this.crudService.updateItem(this.currentItem.id, this.currentItem).subscribe(data => {
      this.getItems();
      this.currentItem = {};
    });
  }

  deleteItem(id: number): void {
    this.crudService.deleteItem(id).subscribe(() => {
      this.getItems();
    });
  }
}
