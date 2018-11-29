import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ExcursionService {

	excursions = [
								{
									'city': 'Casablanca',
									'excursions':
									[
										{
											'id': '142',
											'name': 'Bab Marrakech',
											'duration': '30',
											'guide': 'Brahim Brahim'
										},
										{	
											'id': '125',
											'name': 'Mosquee Hassan 2',
											'duration': '45',
											'guide': 'Karim'
										},
										{
											'id': '14',
											'name': 'Sidi Maarouf',
											'duration': '90',
											'guide': 'Hicham Hicham'
										},
										{
											'id': '29',
											'name': 'Eglise',
											'duration': '10',
											'guide': 'Dounia Brahim'
										}
									]
						},
						{
						'city': 'Fes',
									'excursions':
									[
										{
											'id': '142',
											'name': 'Dar Debagh',
											'duration': '30',
											'guide': 'Brahim Brahim'
										},
										{
											'id': '142',
											'name': 'Bab Marrakech',
											'duration': '30',
											'guide': 'Brahim Brahim'
										},
										{
											'id': '14',
											'name': 'Sidi Maarouf',
											'duration': '90',
											'guide': 'Hicham Hicham'
										},
										{
											'id': '29',
											'name': 'Eglise',
											'duration': '10',
											'guide': 'Dounia Brahim'
										}
									]
						},
						{
						'city': 'Marrakech',
									'excursions':
									[
										{
											'id': '142',
											'name': 'Bab Doukala',
											'duration': '30',
											'guide': 'Brahim Brahim'
										},
										{	
											'id': '125',
											'name': 'Bab Reb',
											'duration': '45',
											'guide': 'Karim'
										},
										{
											'id': '14',
											'name': 'Menara',
											'duration': '90',
											'guide': 'Hicham Hicham'
										},
										{
											'id': '74',
											'name': 'Koutoubia',
											'duration': '30',
											'guide': 'Brahim Brahim'
										},
										{	
											'id': '15',
											'name': 'Jamee El Fena',
											'duration': '45',
											'guide': 'Karim'
										},
										{
											'id': '1',
											'name': 'Palais El Bdiia',
											'duration': '90',
											'guide': 'Hicham Hicham'
										},
										{
											'id': '79',
											'name': 'Agdla',
											'duration': '10',
											'guide': 'Dounia Brahim'
										}
									]
						},
						{
						'city': 'Rabat',
									'excursions':
									[
										{
											'id': '142',
											'name': 'Bab El had',
											'duration': '30',
											'guide': 'Brahim Brahim'
										},
										{	
											'id': '125',
											'name': 'Bab Reb',
											'duration': '45',
											'guide': 'Karim'
										},
										{
											'id': '14',
											'name': 'Hassan',
											'duration': '10',
											'guide': 'Hicham Hicham'
										},
										{
											'id': '1',
											'name': 'Palais El Bdiia',
											'duration': '90',
											'guide': 'Hicham Hicham'
										},
										{
											'id': '79',
											'name': 'Agdla',
											'duration': '10',
											'guide': 'Dounia Brahim'
										}
									]
						},
						{
						'city': 'Tanger',
									'excursions':
									[
										{
											'id': '142',
											'name': 'Haffa',
											'duration': '30',
											'guide': 'Brahim Brahim'
										},
										{	
											'id': '125',
											'name': 'Place 1',
											'duration': '45',
											'guide': 'Karim'
										},
										{
											'id': '79',
											'name': 'Agdla',
											'duration': '10',
											'guide': 'Dounia Brahim'
										}
									]
						}
						];

	excursionCreated = new EventEmitter<boolean>();
	excursionChanged = new EventEmitter<boolean>();

  constructor() { }

  getExcursions(){
  	return this.excursions;
  }

  addExcursion(city, excursion){
  	this.excursions.find(c => c.city === city ).excursions.push(excursion);
  	this.excursionCreated.emit(true);
  }

  backToList(){
  	this.excursionCreated.emit(false);
  }

  deleteExcursion(city, id){
  	let self = this;
  	
   	this.excursions.forEach( (item, index) => {
		  if( item.city === city )
		  {
		  	item.excursions.forEach((exc,i) =>{
		  		if(exc.id === id) {
		  			item.excursions.splice(index,1);
		  		}
		  	});
		  }
		});

		this.excursionChanged.emit(true);
  }

}
