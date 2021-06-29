import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';
// import 'rxjs/add/observable/throw';
// import { Observable } from 'rxjs';
// import { HttpResponse } from '@angular/common/http';
// declare const require: any;

@Injectable({
  providedIn: 'root'
})
export class ProductService {
    private url = '../../assets/data/products.json';

    constructor(private http: HttpClient) { }

    // Dummy JSON Call
    public getProductsData(){
      return this.http.get(this.url);
    }

     // Actual Service Call
    //  getProductsData(): Observable<any> {
    //     let endPoint = 'channel/accountlockwidgets/accountLockedWidget';
    //     /* istanbul ignore next */
    //     return this.remoteService
    //         .request('get', SharedDataService.generateRequest(endPoint, ''), null, null, null, true).map((response: HttpResponse<any>) => {
    //             return response['body'];
    //         });
    // }
}
