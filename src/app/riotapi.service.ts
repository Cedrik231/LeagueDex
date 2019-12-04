import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RiotapiService {

  private version : string ;
  private language : string;

  constructor(private http: HttpClient) { 

      this.version = "9.18.1";
      this.language = "de_DE";
      
  }

  public GetLatestVersion(){
    return this.http.get("https://ddragon.leagueoflegends.com/api/versions.json");
  }


  public GetAllChampions () {



    return this.http.get("http://ddragon.leagueoflegends.com/cdn/"+this.version+"/data/"+this.language+"/champion.json");
  }

}
