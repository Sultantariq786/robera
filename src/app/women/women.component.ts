import { Component, OnInit } from '@angular/core';
import { WomenService } from './../services/women.service';
import { ProductService } from './../services/product.service';

@Component({
  selector: 'app-women',
  templateUrl: './women.component.html',
  styleUrls: ['./women.component.css']
})
export class WomenComponent implements OnInit {
  womensPgResponse: any;
  womenProducts: any = [];

  constructor(private womenService: WomenService, private productService: ProductService) { }

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

    this.productService.getProductsData().subscribe((response: any) => {
      if (response) {
        this.womenProducts = response;
        console.log('Women Prod received', this.womenProducts);
      }
    });
  }

}
