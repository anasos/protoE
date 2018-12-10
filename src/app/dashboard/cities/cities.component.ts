import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {

  constructor(private router:Router) { }

  cities = ['Casablanca', 'Fes', 'Marrakech', 'Rabat', 'Tanger']

  ngOnInit() {
  }

  goToCity(city){
  	this.router.navigate(['dashboard/city',city]);
  }

}
