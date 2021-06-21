import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RemoteService } from '@alight/core-utilities-lib';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Rx';
import { HttpResponse } from '@angular/common/http';
// import { SharedDataService } from 'src/services/shared-data-service';

declare const require: any;

@Injectable()
export class StartRolloverPageService {

    constructor(private http: HttpClient, private remoteService: RemoteService) { }

    // Dummy JSON Call
    getStartRolloverPageData() {
        let response;
        response = require('../al-assets/data/startRolloverPage.json');
        return (Observable.of(response));
    }

     // Actual Service Call
    //  getStartRolloverPageData(): Observable<any> {
    //     let endPoint = 'channel/accountlockwidgets/accountLockedWidget';
    //     /* istanbul ignore next */
    //     return this.remoteService
    //         .request('get', SharedDataService.generateRequest(endPoint, ''), null, null, null, true).map((response: HttpResponse<any>) => {
    //             return response['body'];
    //         });
    // }
}
