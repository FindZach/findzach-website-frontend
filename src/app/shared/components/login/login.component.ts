import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';
import { AuthService } from 'src/app/services/auth.service';
import { StorageService } from 'src/app/services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  registerFormShowing: boolean = false;
  constructor(private authService: AuthService, private storageService: StorageService, private meta: Meta, private title: Title) { }


  ngOnInit(): void {

    if (this.storageService.isLoggedIn()) {
      this.isLoggedIn = true;
      this.roles = this.storageService.getUser().roles;
    }

    this.meta.addTags([
      {name: 'description', content: 'Login Page'},
      {name: 'author', content: 'Zach Smith'},
      {name: 'keywords', content: 'Angular, FindZach, Login'}
    ]);
    this.title.setTitle("Login Page");

  }

	public onAccountRegistration() {

  	}

  onCreateAccountButtonClick() {
    console.log("Toggling View");
    this.registerFormShowing = !this.registerFormShowing;
  }


  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe({
      next: data => {
        this.storageService.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.storageService.getUser().roles;
        this.reloadPage();
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }

}
