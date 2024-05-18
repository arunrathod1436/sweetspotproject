import { CommonModule } from '@angular/common';
import { Component, ElementRef, OnInit, viewChild } from '@angular/core';
import {}from '@angular/material/input';
import{} from '@angular/material/from-field'
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-place-autocomplete',
  templateUrl: './place-autocomplete.component.html',
  styleUrl: './place-autocomplete.component.css',
  standalone: true,
  imports:[CommonModule,MatFormFieldModule, MatInputModule],
  template:
  <mat-form-field appearance="outline">
  <input #inputField matInput[placeholder]="placeholder"/>
  </mat-form-field>
,
styles[

]
})
export class PlaceAutocompleteComponent implements OnInit {
  @viewChild('inputField') inputFieldd: ElementRef
@Input() placeholder='';
autocomplete: google.maps.places.Autocomplete | undefined;

constructor() {}


ngOnInit(): void{}


ngAfterViewInit(){
this.autocomplete=new google.maps.places.Autocomplete(this.inputFieldd.nativeElement);

this.autocomplete.addListener('place_changed',()=>{
  const place=this.autocomplete?.getPlace();
console.log(place);
});
}
}
