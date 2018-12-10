import { Component, OnInit } from '@angular/core';
import { ExcursionService } from '../../excursion.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-show-excursion',
  templateUrl: './show-excursion.component.html',
  styleUrls: ['./show-excursion.component.css']
})
export class ShowExcursionComponent implements OnInit {

	excursion:any;
	picture = "https://st.depositphotos.com/1056393/4711/i/950/depositphotos_47114525-stock-photo-jamaa-el-fna-marrakesh-morocco.jpg";

  constructor(private excursionService: ExcursionService,
    private router: Router, private activeRoute: ActivatedRoute) { 
  }

  ngOnInit() {
  	let id = this.activeRoute.snapshot.params['excursionId'];
  	this.excursion = this.excursionService.getExcursion(id);
  	this.getPicture();
  }

  getPicture(){  	
  	if( this.excursion.image != null){
  		this.picture = this.excursion.image;
  	}
  }

  edit(){
    let id = this.activeRoute.snapshot.params['excursionId'];
    this.router.navigate(['/dashboard', id, 'edit']);
  }

}
