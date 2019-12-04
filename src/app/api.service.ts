import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private version: string;
  private language: string;

  constructor(private http: HttpClient) {
    this.version = '9.18.1';
    this.language = 'de_DE';
  }

  public getChampion(name: string) {
    return this.http.get<any>('http://ddragon.leagueoflegends.com/cdn/' + this.version + '/data/de_DE/champion/' + name + '.json');
  }

  public GetLatestVersion() {
    return this.http.get('https://ddragon.leagueoflegends.com/api/versions.json');
  }


  public GetAllChampions() {
    return this.http.get<any>('http://ddragon.leagueoflegends.com/cdn/' + this.version + '/data/' + this.language + '/champion.json');
  }


}
