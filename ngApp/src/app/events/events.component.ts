import { Component, OnInit } from '@angular/core';

// import { ApiMap } from './apimaps';

declare var google: any;

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  
  mapStartData = {start:'New York, NY'}
  mapEndData = {end: 'Los Angeles, CA'}
  // mapResultadoData = {directionspanel: 'test'}

  constructor() { }

  ngOnInit() {
    
  }

  mapEnviar(){
    // console.log(this.mapStartData.start);
    // console.log(this.mapEndData.end);

    var start = this.mapStartData.start;
    var end =  this.mapEndData.end;
    var distancia = '';

    var directionsService = new google.maps.DirectionsService;
     
      
    calculateAndDisplayRoute(directionsService);
      
    
    // console.log(this.mapResultadoData.directionspanel);

    function calculateAndDisplayRoute(directionsService) {
        
        
        var waypts = [];
        
        directionsService.route({
         origin: start,
         destination: end,
         waypoints: waypts,
         optimizeWaypoints: true,
         travelMode: 'DRIVING'
       }, function(response, status) {
         if (status === 'OK') {
          //  directionsDisplay.setDirections(response);
           var route = response.routes[0];
          //  var summaryPanel = this.mapResultadoData.directions_panel;
           
           for (var i = 0; i < route.legs.length; i++) {
             
              distancia = ' Origin ' + start + ' To ';
              distancia += end + ' = ';
              distancia += route.legs[i].distance.text;
              
              // this.mapResultadoData.directionspanel= distancia;
              window.alert(distancia);
              console.log(distancia);
               
           }
         } else {
           window.alert('Directions request failed due to ' + status);
         }
       });
     }
  }

}
