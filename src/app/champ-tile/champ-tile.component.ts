import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-champ-tile',
  templateUrl: './champ-tile.component.html',
  styleUrls: ['./champ-tile.component.less']
})
export class ChampTileComponent implements OnInit {

  @Input() champ: string;
  @Output() champSelected = new EventEmitter<string>();

  public url;
  public title;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.url = 'http://ddragon.leagueoflegends.com/cdn/9.18.1/img/champion/' + this.champ + '.png';
    this.api.getChampion(this.champ).subscribe(x => {
        this.title = (x as any).data[this.champ].title;

      }
      );
  }



}
