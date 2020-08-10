import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent, Card } from './card.component';


describe('CardComponent', () => {

  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    const c1: Card<any> = {
      title: 'My card',
      description: 'Short description',
      content: '<p>The description</p>',
    };
    component.card = c1;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
