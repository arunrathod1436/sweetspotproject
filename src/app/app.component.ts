import { Component,OnInit } from "@angular/core";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:['./app.component.css']
}

)

export class AppComponent implements OnInit{
  constructor(){}
  ngOnInit(): void {
    
  }

  display:any
  center: google.maps.LatLngLiteral={
    lat: 22.2736308,
    lng: 70.7512555
  };

  zoom=6;
  
  moveMap(event: google.maps.MapMouseEvent){
    if (event.latLng != null) this.center = (event.latLng.toJSON());
  }

  move (event: google.maps.MapMouseEvent){
    if (event.latLng != null) this.display = event.latLng.toJSON();
  }
}