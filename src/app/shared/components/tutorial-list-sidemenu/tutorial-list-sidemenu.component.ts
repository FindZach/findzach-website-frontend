import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial-list-sidemenu',
  templateUrl: './tutorial-list-sidemenu.component.html',
  styleUrls: ['./tutorial-list-sidemenu.component.css']
})
export class TutorialListSidemenuComponent implements OnInit {


  dropdownListEntry = "flex items-center text-s py-4 pl-5 pr-6 h-6 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out";

  dropdownListEntryText = "text-blue-500 font-bold underline";

  constructor() { }

  ngOnInit(): void {
  }

}
