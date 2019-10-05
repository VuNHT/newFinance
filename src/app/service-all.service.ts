import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceAllService {
  public apiMaket = 'http://5d7e423fd756030014184189.mockapi.io/market';
  public apiUsing = 'https://task-finance.herokuapp.com/';
  constructor(
    private http: HttpClient
  ) { }

  public postPriceMarket(data) {
    return this.http.post(this.apiUsing + 'addDataMarket', data);
  }

  public getMarket() {
    return this.http.get(this.apiUsing + 'dataMarket');
  }

  public deleteMarket(id) {
    return this.http.delete(this.apiUsing + 'deleteDataMarket/' + id);
  }

  public postPriceUsing(data) {
    return this.http.post(this.apiUsing + 'addDataUsing', data);
  }

  public getUsing() {
    return this.http.get(this.apiUsing + 'dataUsing');
  }

  public deleteUsing(id) {
    return this.http.delete(this.apiUsing + 'deleteDataUsing/' + id);
  }
}
