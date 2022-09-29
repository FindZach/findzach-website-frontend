import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  registerFormShowing: boolean = false;

  constructor(private meta: Meta, private title: Title) {
    this.loginForm = new FormGroup({});
     }


  ngOnInit(): void {

    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
      email: new FormControl(''),
      birthday: new FormControl(''),

    });

    this.meta.addTags([
      {name: 'description', content: 'Login Page'},
      {name: 'author', content: 'Zach Smith'},
      {name: 'keywords', content: 'Angular, FindZach, Login'}
    ]);
    this.title.setTitle("Login Page");

    console.log("Ng on init is called")

    this.loginForm.valueChanges.subscribe(form => {
      console.log(form.username)
      console.log(form.password)
    });
  }

	public onAccountRegistration() {

  	}

  onCreateAccountButtonClick() {
    console.log("Toggling View");
    this.registerFormShowing = !this.registerFormShowing;
  }


}
