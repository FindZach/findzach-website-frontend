import { Component, OnInit } from '@angular/core';


import { Router } from '@angular/router';
import { TutorialsService } from 'src/app/tutorials/tutorials.service';
import { Tutorial } from 'src/app/tutorials/tutorial';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class TutorialIndexComponent implements OnInit {

  constructor(private tutorialService: TutorialsService, private router: Router) { }

  latestNum: number = 0;
  tutorials: Tutorial[] = [];

  ngOnInit(): void {
    this.tutorialService.getAll().subscribe((data: Tutorial[])=>{
      this.tutorials = data;


    console.log("Total Tutorials" + this.tutorials.length);
    this.latestNum = this.tutorials.length - 1;
    });
  }

  getLatestTutorial() {
    return this.tutorials[this.latestNum];
  }

  getLatestTutorialSlug() {
    return "/tutorials/"+this.tutorials[this.latestNum].slug;
  }

  getThumbnailImage(slug: string) {
    console.log("slug: " + slug);
    for (let i = 0 ; i < this.tutorials.length; i++) {
      var tut = this.tutorials[i];
      console.log(tut);
        if (tut.slug === slug) {
          if (tut.thumbnailImageUrl != null) {
            return tut.thumbnailImageUrl;
          }
        }
    }
    return "https://designdrizzle.com/wp-content/uploads/featured_code.jpg";
  }



}
