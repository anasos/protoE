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
											'guide': 'Dounia Brahim',
											'image': 'http://www.desdomesetdesminarets.fr/wp-content/uploads/2015/01/cathedrale-casablanca-sacre-coeur.jpg'
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
											'guide': 'Brahim Brahim',
											'image': "http://www.alentour.net/img/gallery/180.jpg"
										},
										{
											'id': '14982',
											'name': 'Médersa Bou Inania',
											'duration': '30',
											'guide': 'Brahim Brahim',
											'image': "https://voyages.michelin.fr/sites/default/files/styles/poi_slideshow_big/public/images/travel_guide/NX-18049.jpg?itok=z5gKvZdt"
										},
										{
											'id': '1334',
											'name': 'Médersa Attarine',
											'duration': '90',
											'guide': 'Hicham Hicham',
											'image': "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Al-Attarine_Madrasa_%288753523807%29.jpg/800px-Al-Attarine_Madrasa_%288753523807%29.jpg"
										},
										{
											'id': '2119',
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
											'id': '14312',
											'name': 'Bab El had',
											'duration': '30',
											'guide': 'Brahim Brahim'
										},
										{	
											'id': '12530',
											'name': 'Bab Reb',
											'duration': '45',
											'guide': 'Karim'
										},
										{
											'id': '1004',
											'name': 'Hassan',
											'duration': '10',
											'guide': 'Hicham Hicham'
										},
										{
											'id': '104',
											'name': 'Palais El Bdiia',
											'duration': '90',
											'guide': 'Hicham Hicham'
										},
										{
											'id': '7009',
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
											'guide': 'Brahim Brahim',
											'image': 'https://media-cdn.tripadvisor.com/media/photo-s/03/d7/21/a2/tavolo-vista-mare.jpg'
										},
										{	
											'id': '10025',
											'name': "Grottes d'Hercule",
											'duration': '45',
											'guide': 'Karim',
											'image': "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Cuevas_de_H%C3%A9rcules%2C_Cabo_Espartel%2C_Marruecos%2C_2015-12-11%2C_DD_22-24_HDR.JPG/256px-Cuevas_de_H%C3%A9rcules%2C_Cabo_Espartel%2C_Marruecos%2C_2015-12-11%2C_DD_22-24_HDR.JPG"
										},
										{
											'id': '7859',
											'name': 'Cap Spartel',
											'duration': '10',
											'guide': 'Dounia Brahim',
											'image': "https://media-cdn.tripadvisor.com/media/photo-s/13/09/c0/d9/cap-spartel.jpg"
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

  editExcursion(id, data){
  	let result = {};
   	this.excursions.forEach( (item, index) => {
		  	item.excursions.forEach((exc,i) =>{
		  		if(exc.id === id) {
		  			exc.duration = data.duration;
		  			exc.guide = data.guide;
		  			exc.name = data.name;
		  		}
		  	});
		});
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
