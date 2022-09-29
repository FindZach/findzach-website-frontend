import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tutorial } from 'src/app/tutorials/tutorial';
import { TutorialsService } from 'src/app/tutorials/tutorials.service';

import {DomSanitizer} from '@angular/platform-browser'

@Component({
  selector: 'app-view-tutorial',
  templateUrl: './view-tutorial.component.html',
  styleUrls: ['./view-tutorial.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ViewTutorialComponent implements OnInit {

  viewHtmlCode: boolean = false;

  slug!: string;
  trustedHtml!: any;
  tutorial!: Tutorial;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public tutorialsService: TutorialsService,
    private route: ActivatedRoute,
    private router: Router, private sanitizer: DomSanitizer) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.slug = this.route.snapshot.params['slug'];




    console.log("slug: " + this.slug);

    this.tutorialsService.find(this.slug).subscribe((data: Tutorial)=>{
      this.tutorial = data;

      this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(this.tutorial.content);
    });


  }

  public toggleHtml() {

    if (this.viewHtmlCode) {
      this.viewHtmlCode = false;
    } else {
      this.viewHtmlCode = true;
    }
  }

  getThumbnailImage() {
          if (this.tutorial.thumbnailImageUrl != null) {
            return this.tutorial.thumbnailImageUrl;
          }
    return "https://designdrizzle.com/wp-content/uploads/featured_code.jpg";
  }

}
