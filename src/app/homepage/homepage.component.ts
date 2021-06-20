import { Component, OnInit } from '@angular/core';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  homePgResponse: any;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.getLandingPage();
  }

  getLandingPage() {
    this.productService.getProductsData().subscribe((response: any) => {
        if (response) {
            this.homePgResponse = response;
            console.log('Home', this.homePgResponse);
        }
    // }
        // (error) => {
        //     this.sharedData.handleError(error);
        });
  }

}
