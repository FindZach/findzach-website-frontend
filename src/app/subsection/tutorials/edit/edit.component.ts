import { Component, OnInit } from '@angular/core';
import { Tutorial } from 'src/app/tutorials/tutorial';
import { TutorialsService } from 'src/app/tutorials/tutorials.service';

import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '10rem',
    minHeight: '5rem',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    customClasses: [
      {
        name: 'Quote',
        class: 'quoteClass',
      },
      {
        name: 'Title Heading',
        class: 'titleHead',
        tag: 'h1',
      },
    ],
  };

  rawslug!: string;
  tutorial!: Tutorial;
  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public tutorialsService: TutorialsService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.rawslug = this.route.snapshot.params['slug'];
    this.tutorialsService.find(this.rawslug).subscribe((data: Tutorial)=>{
      this.tutorial = data;

      console.log("tags: " + this.tutorial.tags)
      this.config.placeholder = this.tutorial.content;
    });

    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      slug: new FormControl('', Validators.required),
      tags: new FormControl('', Validators.required),
      thumbnailImageUrl: new FormControl('', Validators.required)
    });
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  get f(){
    return this.form.controls;
  }

  /**
   * Write code on Method
   *
   * @return response()
   */
  submit(){
    console.log(this.form.value);
    this.tutorialsService.update(this.rawslug, this.form.value).subscribe((res:any) => {
         console.log('Post updated successfully!');
         this.router.navigateByUrl('tutorial/admin/index');
    })
  }

  handleEvent(event: any) {
    console.log("Event is occuring...");
  }

  viewHtmlCode: boolean = false;

  public toggleHtml() {

    if (this.viewHtmlCode) {
      this.viewHtmlCode = false;
    } else {
      this.viewHtmlCode = true;
    }
  }

}
