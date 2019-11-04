import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnInit {

  @Output() classDropdownSeleted = new EventEmitter<string>();

  SelectedClass = {id: '', name: 'Select a class'};

  Classes = [
    {id: 'tanks', name: 'Tanks'},
    {id: 'fighter', name: 'Kämpfer'},
    {id: 'slayer', name: 'Schlächter'},
    {id: 'mage', name: 'Magier'},
    {id: 'controller', name: 'Beherrscher'},
    {id: 'marksman', name: 'Schützen'}
  ];

  constructor() { }

  ngOnInit() {
  }

  onClassDropdownSelected(selectedClass: any) {
    this.SelectedClass = selectedClass;
    this.classDropdownSeleted.emit(selectedClass.id);
  }

}
