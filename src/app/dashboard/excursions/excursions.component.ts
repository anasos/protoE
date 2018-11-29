import { Component, OnInit, Input } from '@angular/core';
import { ExcursionService } from '../../excursion.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-excursions',
  templateUrl: './excursions.component.html',
  styleUrls: ['./excursions.component.css']
})
export class ExcursionsComponent implements OnInit {

	@Input() excursions:any[];
	@Input() city:string;
	
  displayedColumns: string[] = ['id', 'name', 'duration', 'guide', 'drop'];
  displayCreate = false;

  constructor(private excursionService:ExcursionService, private router: Router) { 
    let self = this;
    self.excursionService.excursionCreated.subscribe(e =>{
      self.toggleCreate();
    })
    self.excursionService.excursionChanged.subscribe(e =>{
      console.log(self.excursions);
    });
  }

  ngOnInit() {
  }

  toggleCreate(){
  	this.displayCreate = !this.displayCreate;
  }

  delete(id){
    let self = this;
    self.excursionService.deleteExcursion(this.city, id);
  }


}
