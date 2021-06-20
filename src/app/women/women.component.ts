import { Component, OnInit } from '@angular/core';
import { WomenService } from './../services/women.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  womensPgResponse: any;

  constructor(private womenService: WomenService) { }

  ngOnInit(): void {
    this.getWomensPage();
  }

  getWomensPage() {
    this.womenService.getWomenData().subscribe((response: any) => {
        if (response) {
            this.womensPgResponse = response;
            console.log('Women ', this.womensPgResponse);
        }
    // }
        // (error) => {
        //     this.sharedData.handleError(error);
        });
  }

}
