import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WomenService {
  private url = '../../assets/data/womenData.json';

  constructor(private http: HttpClient) { }

  public getWomenData(){
    return this.http.get(this.url);
  }
}
