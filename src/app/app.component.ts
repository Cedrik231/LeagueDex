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
  listOfChamps: string[];

  constructor(private api: ApiService) {

  }

  ngOnInit() {
    this.api.GetAllChampions().subscribe(x => {
      const champions = x.data;
      this.listOfChamps = [];
      for (var key in champions) {
        this.listOfChamps.push(champions[key].id);
      }

    }, e => {

    })
  }

  onChampSelected(name: string) {
    this.selectedChamp = name;
    // $('#championModal').modal();
    $('#championModal').modal('show');
  }
}
