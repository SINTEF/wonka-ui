import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoPanelComponent } from './info-panel.component';
import { By } from '@angular/platform-browser';

describe('InfoPanelComponent', () => {
  let component: InfoPanelComponent;
  let fixture: ComponentFixture<InfoPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [ InfoPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const header = 'The header';
    const content = 'The content';
    const image = 'image.jpg';

    fixture = TestBed.createComponent(InfoPanelComponent);
    component = fixture.componentInstance;
    component.header = header;
    component.content = content;
    component.image = image;

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show simple info panel with header, content and image', () => {
    const header = fixture.debugElement.query(By.css('.panel-heading')).nativeElement;
    const content = fixture.debugElement.query(By.css('.panel-body')).nativeElement;
    expect(header.textContent).toContain('The header');
    expect(content.textContent).toContain('The content');
  });
});
