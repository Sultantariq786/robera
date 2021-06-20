import { Injectable } from '@angular/core';
import { DynamicComponentService, GoogleAnalyticsService } from '@alight/core-utilities-lib';
import { RouterService } from '../services/router.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IUrlOptions } from '@alight/core-utilities-lib/lib/acsrc/models/rest.caller.model';
import { ErrorRollOverPageService } from '../services/errorrollover-page.service';
import { Subject } from 'rxjs/internal/Subject';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable()
export class SharedDataService {

    public editDataDetails: any = [];
    public subject = new Subject<any>();
    public messageSource = new BehaviorSubject(this.editDataDetails);
    currentMessage = this.messageSource.asObservable();

    constructor(private dynamicComponentService: DynamicComponentService,
        private gaService: GoogleAnalyticsService, private router: Router, private routerService: RouterService,
        private errorRollOverPageService: ErrorRollOverPageService) {
        this.dynamicComponentService.initializePageComponents();
    }

    static generateRequest(endPoint: string, queryParameters: string, contentType: string = 'application/json', customHeaderParam: any = []): IUrlOptions {
        let options: IUrlOptions = {
            restOfUrl: queryParameters,
            endPoint: endPoint,
            isSecure: true,
            contentType: contentType,
            customHeader: customHeaderParam
        };
        return options;
    }

    handleError(httpResponse) {
        let routerUrl = this.router.url;
        let baseUrl = routerUrl.substring(0, routerUrl.lastIndexOf('/'));
        let errorMessage = httpResponse.error.errorMessage;
        if (errorMessage === 'ACCESS_RESTRICTED') {
            this.errorRollOverPageService.redirectToRestrictedPage(errorMessage);
        }
    }

    /* GA - set url and title – function for page trackig */
    gaPageTracking(url: string) {
        const gaUrl = url.substr(url.lastIndexOf('/') + 0);
        this.gaService.postGACustomPageTracking(gaUrl);
    }

    changeMessage(message: string) {
        this.messageSource.next(message);
    }
}
