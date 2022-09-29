import { Component, OnInit } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

  constructor(private meta: Meta, private title: Title) {
    this.meta.addTags([
      {name: 'description', content: 'FindZach Home Page'},
      {name: 'author', content: 'Zach Smith'},
      {name: 'keywords', content: 'Angular, FindZach, Tutorials'}
    ]);
    this.title.setTitle("FindZach Home Page");
   }

  ngOnInit(): void {
  }

}
