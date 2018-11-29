import { Component, OnInit, Input } from '@angular/core';
import { ExcursionService } from '../../excursion.service';

@Component({
  selector: 'app-new-excursion',
  templateUrl: './new-excursion.component.html',
  styleUrls: ['./new-excursion.component.css']
})
export class NewExcursionComponent implements OnInit {

  name = "";
  description = "";
  guide = "";
  duration = "";
  @Input() city;

  constructor(private excursionService: ExcursionService) { 
  }

  guides = [
  					 {
  					 	'id':'4',
  					 	'name': 'Brahim Brahim',
  					 },
  					 {
  					 	'id':'14',
  					 	'name': 'Hassan Da',
  					 },
  					 {
  					 	'id':'2',
  					 	'name': 'Karim De',
  					 },
  					 {
  					 	'id':'3',
  					 	'name': 'Said Brahim',
  					 },
  					 {
  					 	'id':'5',
  					 	'name': 'Jaouad Bm',
  					 },
  					 {
  					 	'id':'1',
  					 	'name': 'Said Le',
  					 },
  					 {
  					 	'id':'9',
  					 	'name': 'Chafiq Ser',
  					 }
  				];
  ngOnInit() {
  }

  create(){
    let i = Math.random()*100;
    i = Math.floor(i); 
    let excursion = {
      'id': i,
      'name': this.name,
      'description': this.description,
      'duration': this.duration,
      'guide': this.guide
    }

    this.excursionService.addExcursion(this.city, excursion);
  }

  cancel(){
    this.excursionService.backToList();
  }

}
