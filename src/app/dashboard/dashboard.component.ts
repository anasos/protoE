import { Component, OnInit } from '@angular/core';
import { ExcursionService } from '../excursion.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	cities = ['Casablanca', 'Fes', 'Marrakech', 'Rabat', 'Tanger'];
	cityDisplay = 'Casablanca';
	dataSource:any[];
	excursions:any[];
	displayCreate = false;
	cityName = "Casablanca";
	loading = false;

  constructor(private excursionService: ExcursionService) { 
  	let self = this;
  	this.excursions = this.excursionService.getExcursions();
  	this.excursionService.excursionChanged.subscribe( e => {
  		self.loading = true;
  		self.excursions = self.excursionService.getExcursions();
  		self.updateExcursions();
  		setTimeout(function(){
  			self.hideLoading()
  		}, 500);
  	})
  }

  ngOnInit() {
  	this.dataSource = this.getExcursions("Casablanca");
  }

  hideLoading(){
  	this.loading = false;
  }

  getExcursions(_city) : any[]{
  	let self = this;
  	return self.excursions.find( city => city.city === _city).excursions;
  }

  updateExcursions(){
  	this.dataSource = this.getExcursions(this.cityName);
  }

  changeExcursions(city){
  	this.dataSource = this.getExcursions(city);
  	this.cityName = city;
  }


}
