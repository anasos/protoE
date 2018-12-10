import { Component, OnInit } from '@angular/core';
import { ExcursionService } from '../../excursion.service';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-edit-excursion',
  templateUrl: './edit-excursion.component.html',
  styleUrls: ['./edit-excursion.component.css']
})
export class EditExcursionComponent implements OnInit {

	excursion:any;
	name = "";
  description = "";
  guide = "";
  duration = "";

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

  constructor(private excursionService: ExcursionService, private activeRoute: ActivatedRoute) { 
  }

  ngOnInit() {
  	let id = this.activeRoute.snapshot.params['excursionId'];
  	this.excursion = this.excursionService.getExcursion(id);
    console.log(this.excursion);
  	this.name = this.excursion.name;
  	this.description = `The vessel overflows into each irony! The monopoly cracks a medium. The prison organizes a broke premise under an electron. The fifth matrix closes the poke. His orchestral insect swears on top of her gibberish.
    `;
    this.duration = this.excursion.duration;
  	this.guide = this.excursion.guide;
  }

}
