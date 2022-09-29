import { Component, OnInit } from '@angular/core';
import { TutorialsService } from 'src/app/tutorials/tutorials.service';

import { Router } from '@angular/router';
import { Tutorial } from 'src/app/tutorials/tutorial';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent implements OnInit {

  constructor(private meta: Meta, private title: Title, private tutorialService: TutorialsService, private router: Router) {


    this.meta.addTags([
      {name: 'description', content: 'Tutorials Page'},
      {name: 'author', content: 'Zach Smith'},
      {name: 'keywords', content: 'Angular, FindZach, Tutorials, Programming Tutorials'}
    ]);
    this.title.setTitle("Tutorials Page - FindZach");

  }

  tutorials: Tutorial[] = [];

  ngOnInit(): void {

    console.log("Path: " + this.router.url);

    this.tutorialService.getAll().subscribe((data: Tutorial[])=>{
      this.tutorials = data;
      console.log(this.tutorials);
    });

    console.log("Tutorial List Loaded!");
  }

  public deleteTutorial(tutorialId: number) {
    this.tutorialService.delete(tutorialId).subscribe(res => {
      this.tutorials = this.tutorials.filter(item => item.id !== tutorialId);
      console.log('Post deleted successfully!');
 })
  }






}
