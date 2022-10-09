import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationStart, Router, Event as NavigationEvent } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  private roles: string[] = [];
  isAdmin = false;
  username?: string;

  isActive?:boolean;

  constructor(private route: ActivatedRoute,
    private router: Router, private authService: AuthService, private storageService: StorageService) {


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

  ngOnInit(): void {


    if (this.isLoggedIn()) {
      const user = this.storageService.getUser();
      this.roles = user.roles;

      this.isAdmin = this.roles.includes('ROLE_ADMIN');

      this.username = user.username;
    }

  }

  isLoggedIn() : Boolean {
    if (this.authService != null) {
      return this.storageService.isLoggedIn();
    }
    return false;
  }

  logout(): void {
    this.authService.logout().subscribe({
      next: res => {
        console.log(res);
        this.storageService.clean();

        window.location.reload();
      },
      error: err => {
        console.log(err);
      }
    });
  }




}
