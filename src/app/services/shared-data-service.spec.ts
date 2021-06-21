import { TestBed, async, inject } from '@angular/core/testing';
import { SharedDataService } from './shared-data.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
/* tslint:disable */
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
/* tslint:enable */
import { HttpClientModule } from '@angular/common/http';
import { RouterService } from '../services/router.service';
import { RemoteService, DomStorageFallbackService, DynamicComponentService, GoogleAnalyticsService, LoggingService, IDBService, AppUtility, LoggingStartupConfigService, UIStorageService, LocalCacheService, CacheStorageService, AppStartupService, LogFrontendError, BrandingService, GenericService } from '@alight/core-utilities-lib';
import { LandingPageService } from '../services/landing-page.service';
import { ErrorRollOverPageService } from '../services/errorrollover-page.service';

class RouterMockDataService {
    url: String = 'https://l8sita09:9711/web/retirement4x/login';
}

@Injectable()
class DynamicComponentServiceStub {
    templateContent;

    dynamicComponents(templateContent) {
        this.templateContent = templateContent;
    }
    loadCustomJS() {
    }
    initializePageComponents() {
    }
}

describe('SharedDataService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            declarations: [
            ],
            providers: [
                { provide: SharedDataService, useClass: SharedDataService },
                { provide: Router, useClass: RouterMockDataService },
                { provide: DomStorageFallbackService, useClass: MockDataService },
                { provide: DynamicComponentService, useClass: DynamicComponentServiceStub },
                { provide: RouterService, useClass: RouterServiceMockDataService },
                { provide: LandingPageService, useClass: LandingPageService },
                { provide: ErrorRollOverPageService, useClass: MockErrorRollOverService },
                IDBService,
                LoggingService,
                AppUtility,
                RemoteService,
                DomStorageFallbackService,
                LoggingStartupConfigService,
                UIStorageService,
                LocalCacheService,
                CacheStorageService,
                AppStartupService,
                LogFrontendError,
                BrandingService,
                GenericService,
                LoggingService,
                GoogleAnalyticsService
            ]
        }); /*To compile html and css code */

    }));

    it('Component Service call Successfully Executed', inject([SharedDataService], (service: SharedDataService) => {
        expect(service).toBeTruthy();
        service.gaPageTracking('Shared Service');
        service.changeMessage('');
    }));

    it('Should run handleError', async(inject([SharedDataService], (sharedDataService) => {
        let accessRestrictedErrorObj = { error: { errorMessage: 'ACCESS_RESTRICTED' } };
        sharedDataService.handleError(accessRestrictedErrorObj);
    })));
});

class RouterServiceMockDataService {
    onRouteNavigateByURL(path) {

    }
    navigateByComponentEndPoint(path) {

    }
}

export class MockDataService {
    navigate() {
        return true;
    }
    /* tslint:enable */
    getItem() {
        return true;
    }
}

class MockErrorRollOverService {
    redirectToRestrictedPage(message) { }
}
