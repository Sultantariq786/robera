import { TestBed, inject, async} from '@angular/core/testing';
import { HttpClientModule} from '@angular/common/http';
import { RemoteService} from '@alight/core-utilities-lib';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { StartRolloverPageService } from './startrollover-page.service';
import { RouterService } from './router.service';

class MockRouterService {
    navigateByComponentEndPoint(path: string) {
    }
}

describe('StartRolloverPageService', () => {
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientModule
            ],
            declarations: [
            ],
            providers: [
                { provide: StartRolloverPageService, useClass: StartRolloverPageService },
                { provide: RouterService, useClass: MockRouterService },
                { provide: RemoteService, useClass: mockDataService }
            ]
        });
    }));

    it('Component Service call Successfully Executed', inject([StartRolloverPageService], (service: StartRolloverPageService) => {
        service.getStartRolloverPageData();
        expect(service).toBeTruthy();
    }));

});

/* tslint:disable */
export class mockDataService {
    navigate() {
        return true;
    }
    /* tslint:enable */
    getItem() {
        return true;
    }
    map() {
        return true;
    }
    request() {
        return Observable.of(true);
    }
    getRequest() {
        return Observable.of(true);
    }
}
