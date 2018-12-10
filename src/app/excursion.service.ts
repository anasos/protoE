import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ExcursionService {

	excursions = [
								{
									'city': 'Casablanca',
									'excursions':
									[
										{
											'id': '1452',
											'name': 'Bab Marrakech',
											'duration': '30',
											'guide': 'Brahim Brahim'
										},
										{	
											'id': '125',
											'name': 'Mosquee Hassan 2',
											'duration': '45',
											'guide': 'Karim',
											'image': "http://www.womens-travel-club.com/img/Morocco2.jpg"
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
											'id': '14112',
											'name': 'Dar Debagh',
											'duration': '30',
											'guide': 'Brahim Brahim'
										},
										{
											'id': '14982',
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
											'guide': 'Brahim Brahim',
											'image': "https://p4.storage.canalblog.com/40/75/1394830/109884907_o.jpg"
										},
										{	
											'id': '1235',
											'name': 'Bab Reb',
											'duration': '45',
											'guide': 'Karim',
											'image': "https://www.marrakech-riad.co.uk/wp-content/uploads/2014/07/P1000161-1024x768.jpeg"
										},
										{
											'id': '1401',
											'name': 'Menara',
											'duration': '90',
											'guide': 'Hicham Hicham',
											'image': 'https://www.infomediaire.net/wp-content/uploads/2018/10/monuments-historiques.jpg'
										},
										{
											'id': '754',
											'name': 'Koutoubia',
											'duration': '30',
											'guide': 'Brahim Brahim',
											'image': 'http://marrakech.viaprestige-holidays.com/wp-content/uploads/koutoubia-marrakech-1-e1497864599319.jpg'
										},
										{	
											'id': '1511',
											'name': 'Jamee El Fena',
											'duration': '45',
											'guide': 'Karim'
										},
										{
											'id': '1058',
											'name': 'Palais El Bdiia',
											'duration': '90',
											'guide': 'Hicham Hicham'
										},
										{
											'id': '7459',
											'name': 'Agdal',
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
											'id': '1412',
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
											'id': '1342',
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

  getExcursion(id):any{  	
  	let result = {};
   	this.excursions.forEach( (item, index) => {
		  	item.excursions.forEach((exc,i) =>{
		  		if(exc.id === id) {
		  			result = exc;
		  		}
		  	});
		});

		return result;
  }

  getExcursionsofCity(_city) : any[]{
    let self = this;
    return self.excursions.find( city => city.city === _city).excursions;
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
