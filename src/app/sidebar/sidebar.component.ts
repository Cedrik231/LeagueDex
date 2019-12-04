import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  @Output() classDropdownSeleted = new EventEmitter<string>();
  @Output() classPropertySelected = new EventEmitter<string>();
  @Output() classSideBarSearch = new EventEmitter<FiltnSort>();

  SelectedClass = {id: '', name: 'Select a class'};
  SelectedProperty = {id: '', name:'Select a Property'}
  Ascending = true;


  Classes = [
    {id: 'All', name : "Alle"},
    {id: 'Tank', name: 'Tanks'},
    {id: 'Fighter', name: 'Kämpfer'},
    {id: 'Mage', name: 'Magier'},  
    {id: 'Marksman', name: 'Schützen'},
    {id: "Assassin", name : "Assassinen"},
    {id: 'Support', name: "Unterstützer"}
  ];

  Properties = [
    {id: 'key', name : "Name" },    
    {id: 'armor', name : "Rüstung"},
    {id: 'spellblock', name : "Magieresistenz"},
    {id: 'attackdamage', name : "Angriff"},
    {id: 'attackspeed', name : "Geschwindigkeit"}
  ]

  constructor() { }

  ngOnInit() {
  }

  onClassDropdownSelected(selectedClass: any) {
    this.SelectedClass = selectedClass;
    this.classDropdownSeleted.emit(selectedClass.id);
  }

  onPropertyDropdownSelected(selectedProperty: any){
    this.SelectedProperty = selectedProperty;
    this.classPropertySelected.emit(selectedProperty.id);
  }

  onSideBarSearch() {
      this.classSideBarSearch.emit(new FiltnSort(this.SelectedClass.id, this.SelectedProperty.id, this.Ascending));
  }

  onSortOrder(bool : boolean){
    this.Ascending = bool;
  }

}

export class FiltnSort {
    filterClass : string;
    sortProperty : string;
    ascending : boolean;

    constructor(filterClass : string, sortProperty: string, ascending : boolean){
      this.filterClass = filterClass;
      this.sortProperty = sortProperty;
      this.ascending = ascending;
    }
}
