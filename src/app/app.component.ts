import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  // elementRef: ElementRef;

  ngAfterViewInit() {
    // if (document.getElementById("yourLibUniqueId")) {
    //     document.getElementById("yourLibUniqueId").remove();
    // }

    // var s = document.createElement("script");
    // s.type = "text/javascript";
    // s.src = "lib/yourLib.js";
    // s.id = "yourLibUniqueId";
    // this.elementRef.nativeElement.appendChild(s);
  }

}
