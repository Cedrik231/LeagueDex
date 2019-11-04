import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { RiotapiService } from '../riotapi.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {

  @Output() searchEmit = new EventEmitter<string>();

  public championListe: Champion[];

  constructor(private api: RiotapiService) {
  }

  ngOnInit() {
  }

  onSearch(value: string) {
    this.searchEmit.emit(value);
  }

}

export class Champion {
  public Name: string;

  constructor(name: string) {
    this.Name = name;
  }


}
