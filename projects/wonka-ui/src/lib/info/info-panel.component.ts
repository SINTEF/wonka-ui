import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-info-panel',
  templateUrl: './info-panel.component.html'
})
export class InfoPanelComponent implements OnInit {

  @Input() header: string;
  @Input() content: string;
  @Input() image: string;
  @Input() imageClass: string;

  constructor() { }

  ngOnInit() { }

  applyStyles() {
    if (!this.imageClass) {
      return {
        padding: '15px 15px 15px 15px',
        width: '100%',
        'min-height': '200px',
        'background-image': 'url(' + this.image + ')',
        'background-size': 'contain',
        'background-repeat': 'no-repeat'
      };
    } else {
      return {
        // width: '100%',
        // 'background-image': 'url(' + this.image + ')',
      };
    }

  }

}
