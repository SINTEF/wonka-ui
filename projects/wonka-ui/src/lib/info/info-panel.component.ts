import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'lib-info-panel',
  templateUrl: './info-panel.component.html'
})
export class InfoPanelComponent implements OnInit {

  @Input() header: string;
  @Input() content: string;
  @Input() image?: string;
  @Input() imageClass?: string;

  constructor() { }

  ngOnInit() {
    if (!this.imageClass) {
      this.imageClass = '';
    }
  }

}
