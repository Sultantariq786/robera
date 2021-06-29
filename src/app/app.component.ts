import { AfterViewInit, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {

  constructor(private el: ElementRef) {
  }

  ngAfterViewInit() {
    if (document.getElementById("loadScript")) {
        // document.getElementById("loadScript").remove();
    }
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "../assets/js/custom.js";
    s.id = "yourLibUniqueId";
    this.el.nativeElement.appendChild(s);
  }

}
