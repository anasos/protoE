import { Component, OnInit, Input } from '@angular/core';
import { ExcursionService } from '../../excursion.service';
import { RouterModule, Routes, Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit {

	excursions:any[];
  city:string;
	
  displayedColumns: string[] = ['id', 'name', 'duration', 'guide', 'drop', 'show'];
  displayCreate = false;

  constructor(private excursionService:ExcursionService, private router: Router, private activeRoute: ActivatedRoute) { 
    let self = this;

    self.excursionService.excursionCreated.subscribe(e =>{
      self.toggleCreate();
    })
    self.excursionService.excursionChanged.subscribe(e =>{
      // self.excursions = self.excursionService.getExcursionsofCity(self.city);
    });
  }

  ngOnInit() {
    let self = this;
    self.activeRoute.params.subscribe(params => {
      self.city = params.cityName;
      self.excursions = self.excursionService.getExcursionsofCity(self.city);
    });
  }

  getExcursions(_city) : any[]{
    let self = this;
    return self.excursions.find( city => city.city === _city).excursions;
  }

  toggleCreate(){
  	this.displayCreate = !this.displayCreate;
  }

  delete(id){
    let self = this;
    self.excursionService.deleteExcursion(this.city, id);
  }


}
