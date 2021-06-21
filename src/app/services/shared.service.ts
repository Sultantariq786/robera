// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class SharedService {

//   constructor() { }

//   onDataCall() {
    
//   }
// }

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

    public editDataDetails: any = [];
    public subject = new Subject<any>();
    public messageSource = new BehaviorSubject(this.editDataDetails);
    currentMessage = this.messageSource.asObservable();

    constructor(private router: Router) {

    }

    static generateRequest(endPoint: string, queryParameters: string, contentType: string = 'application/json', customHeaderParam: any = []): any {
        let options: any = {
            restOfUrl: queryParameters,
            endPoint: endPoint,
            isSecure: true,
            contentType: contentType,
            customHeader: customHeaderParam
        };
        return options;
    }

    // handleError(httpResponse) {
    //     let routerUrl = this.router.url;
    //     let baseUrl = routerUrl.substring(0, routerUrl.lastIndexOf('/'));
    //     let errorMessage = httpResponse.error.errorMessage;
    //     if (errorMessage === 'ACCESS_RESTRICTED') {
    //         this.errorRollOverPageService.redirectToRestrictedPage(errorMessage);
    //     }
    // }

    /* GA - set url and title – function for page trackig */
    // gaPageTracking(url: string) {
    //     const gaUrl = url.substr(url.lastIndexOf('/') + 0);
    //     this.gaService.postGACustomPageTracking(gaUrl);
    // }

    // changeMessage(message: string) {
    //     this.messageSource.next(message);
    // }
}
