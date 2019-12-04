import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-championmodal',
  templateUrl: './championmodal.component.html',
  styleUrls: ['./championmodal.component.less']
})
export class ChampionmodalComponent implements OnInit, OnChanges {
  @Input() championName: string;

  public imageUrl = '';

  // public stats: {
  //   ad: Stat,
  //   ap: Stat,
  //   attackSpeed: Stat,
  //   health: Stat,
  //   armor: Stat,

  // };

  public stats: Stat[];

  public spells: Spell[];

  constructor(private api: ApiService) {

  }

  ngOnInit() {
  }

  ngOnChanges() {
    this.imageUrl = 'http://ddragon.leagueoflegends.com/cdn/img/champion/loading/' + this.championName + '_0.jpg';
    this.api.getChampion(this.championName).subscribe(x => {
      const s = x.data[this.championName].stats;
      const sp = x.data[this.championName].spells;
      this.stats = [];
      this.stats.push({name: 'Angriffsschaden', value: s.attackdamage, color: '#C0392B'});
      this.stats.push({name: 'Rüstung', value: s.armor, color: '#F4D03F'});
      this.stats.push({name: 'Angriffsgeschwindigkeit', value: s.attackspeed, color: '#F7F9F9'});
      this.stats.push({name: 'Magieresistenz', value: s.spellblock, color: '#8E44AD'});

      this.spells = [];
      this.spells.push(
        {
          name: sp[0].name,
          description: sp[0].description,
          url: 'http://ddragon.leagueoflegends.com/cdn/9.21.1/img/spell/' + sp[0].image.full
        });

      this.spells.push(
      {
        name: sp[1].name,
        description: sp[1].description,
        url: 'http://ddragon.leagueoflegends.com/cdn/9.21.1/img/spell/' + sp[1].image.full
      });

      this.spells.push(
        {
          name: sp[2].name,
          description: sp[2].description,
          url: 'http://ddragon.leagueoflegends.com/cdn/9.21.1/img/spell/' + sp[2].image.full
        });

      this.spells.push(
        {
          name: sp[3].name,
          description: sp[3].description,
          url: 'http://ddragon.leagueoflegends.com/cdn/9.21.1/img/spell/' + sp[3].image.full
        });
    });

  }
}

class Stat {
  name: string;
  value: any;
  color: string;


}

class Spell {
  name: string;
  description: string;
  url: string;
}


