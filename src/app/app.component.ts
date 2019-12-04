import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {

  selectedChamp = '';
  listOfChamps: Champion[];
  listofAllChamps: Champion[];
  
  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.api.GetAllChampions().subscribe(x => {
      const champions = x.data;
      this.listOfChamps = [];
      for (var key in champions) {
        this.listOfChamps.push(new Champion(champions[key].id, champions[key].tags, champions[key].stats.attackdamage, champions[key].stats.armor, champions[key].stats.attackspeed, champions[key].stats.spellblock));
      }
      this.listofAllChamps = this.listOfChamps;
    }, e => {

    })
  }

  onChampSelected(name: string) {
    this.selectedChamp = name;
    // $('#championModal').modal();
    $('#championModal').modal('show');
  }


  onChampionSearch(filterString : string){
     
      if(filterString != "" || filterString == undefined){
      this.listOfChamps = this.listofAllChamps.filter(x=>x.id.includes(filterString));
      }
      else{
        this.listOfChamps = this.listofAllChamps;
      }      

  }

  filterSortList(key: any) {
    let bo = key.ascending;
    let filterString = key.filterClass;
    let sortString = key.sortProperty;
    this.listOfChamps = this.listofAllChamps;

    if (filterString != "" && filterString != "All") {
      this.listOfChamps = this.listOfChamps.filter(x => x.class.indexOf(filterString) > -1);
    } else {
      this.listOfChamps = this.listofAllChamps;
    }

    if (sortString != "") {
      this.listOfChamps = this.listOfChamps.sort((obj1, obj2) => {
        switch (sortString) {
          case "spellblock":
            if (obj1.mr > obj2.mr) {
              return 1;
            }
            else {
              return -1;
            }
            case "armor":
              if (obj1.armor > obj2.armor) {
                return 1;
              }
              else {
                return -1;
            }
            case "attackdamage":
              if (obj1.ad > obj2.ad) {
                return 1;
              }
              else {
                return -1;
            }
            case "attackspeed":
              if (obj1.as > obj2.as) {
                return 1;
              }
              else {
                return -1;
            }
            case "key":
              if (obj1.id > obj2.id) {
                return 1;
              }
              else {
                return -1;
            }
        }
      });
    }
    if (!bo){
      this.listOfChamps.reverse();
    }

    
  }
}

class Champion {
  id: string;
  class: string[];
  ad: number;
  armor: number;
  as: number;
  mr: number;


  constructor(Id: string, Class: string[], ad: number, armor: number, as: number, mr: number) {
    this.id = Id;
    this.class = Class;
    this.ad = ad;
    this.armor = armor;
    this.as = as;
    this.mr = mr;
  }
}
