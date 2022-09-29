import { Component, OnInit, Input } from '@angular/core';
import { Project } from './project';

/**
 * Project Controller , will grab a list of Projects and display them leveraging the Project Card Component
 */
@Component({
  selector: 'findzach-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  projectList?: Project[];

  constructor() { }

  ngOnInit(): void {
  }

}
