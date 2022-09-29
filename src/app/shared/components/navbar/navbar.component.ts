import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, Event as NavigationEvent } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {


  isActive?:boolean;

  constructor(private route: ActivatedRoute,
    private router: Router) {


this.router.events
  .subscribe(
    (event: NavigationEvent) => {
      if(event instanceof NavigationStart) {
        console.log(event);
        console.log("Event url: " + event.url)

        if (event.url === "/" || event.url === "/main-page") {
          console.log("We're on homepage!");
          this.isActive = false;
        } else {
          this.isActive = true;
        }

      }
    });
    }

  ngOnInit(): void {}

}
