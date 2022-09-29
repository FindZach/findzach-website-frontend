import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  max = 9;

  //TODO: Grab images from backend
  background_url = 'url(../../../../assets/images/backgrounds/bg-1.jpg)'

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {

    //var outsideBox = this.renderer.selectRootElement('nav');

    //console.log(outsideBox);

    this.updateUrl();
  }

  private updateUrl() {
   var randomNumber = Math.floor(Math.random() * this.max) + 1;

   console.log("Random Number: " + randomNumber);

   this.background_url = "url(../../../../assets/images/backgrounds/bg-"+ randomNumber +".jpg";
   console.log("background url: " + this.background_url);
  }

  public open(event: Event) {
    //this.updateUrl();
  }


}
