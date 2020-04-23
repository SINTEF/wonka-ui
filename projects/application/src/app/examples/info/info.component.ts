import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['../css/examples.scss']
})
export class InfoComponent implements OnInit {

  header: string;
  content: string;
  imageClass: string;
  explanation: string;

  constructor() { }

  ngOnInit() {
    this.header = 'The header';
    this.content = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    `;

    /**
     * Adding demo text/code
     */
    this.explanation = `
    <b>Component for showing a simple info box on a page.</b>

    <i><b>Include component in html template:</b></i>
    < lib-info-panel
      [header]="header"
      [content]="content"
      [class]="'style-class'"
      [imageClass]="imageClass"></lib-info-panel>

    <i><b>Define parameters in ts file:</b></i>
    const header = 'The header';
    const content =  'The content';
    const imageClass = 'image-class';
    `;


  }

}
