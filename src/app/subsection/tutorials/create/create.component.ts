import { Component, OnInit } from '@angular/core';
import { TutorialsService } from 'src/app/tutorials/tutorials.service';

import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {


  form!: FormGroup;

  /*------------------------------------------
  --------------------------------------------
  Created constructor
  --------------------------------------------
  --------------------------------------------*/
  constructor(
    public tutorialsService: TutorialsService,
    private router: Router
  ) { }

  /**
   * Write code on Method
   *
   * @return response()
   */
  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl('', [Validators.required]),
      slug: new FormControl('', Validators.required),
      description: new FormControl('', Validators.required),
      tags: new FormControl('', Validators.required),
      thumbnailImageUrl: new FormControl('', Validators.required),
      content: new FormControl('', Validators.required),
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
  submit() {
    console.log("hi");
    console.log(this.form.value);
    this.tutorialsService.create(this.form.value).subscribe((res:any) => {
         console.log('Tutorial created successfully!');
         this.router.navigateByUrl('tutorial/admin/index');
    })
    //var myContent = tinymce.get("myTextarea").getContent();
  }

}
