import { Injectable } from '@angular/core';
import { Meta,Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TitlemetaService {

  constructor(private meta: Meta, private title: Title) {

    this.meta.addTags([
      {name: 'description', content: 'FindZach Home Page'},
      {name: 'author', content: 'Zach Smith'},
      {name: 'keywords', content: 'Angular, FindZach, Tutorials'}
    ]);
    this.title.setTitle("FindZach Home Page");
   }

   public addTag(name: string, content: string) {



    return;
   }
}
