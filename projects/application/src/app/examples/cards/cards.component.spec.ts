import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Card, CardModule } from '@sintef/wonka-ui';
import { CardsComponent } from './cards.component';
import { By } from '@angular/platform-browser';

describe('CardsComponent', () => {

  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        CardModule
      ],
      declarations: [
        CardsComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    const c1: Card<any> = {
      title: 'My card',
      description: 'Short description',
      content: '<p>The description</p>',
    };
    component.cards = [c1];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should provide a div for each card', () => {
    const cardContainer = fixture.debugElement.query(By.css('.card-container')).nativeElement;
    expect(cardContainer).toBeDefined();

    const children = cardContainer.children;
    expect(children.length).toBe(3); // 3 cards in the example

    expect(children[0].getAttribute('id')).toBe('card-card');
    expect(children[1].getAttribute('id')).toBe('card-card');
    expect(children[2].getAttribute('id')).toBe('card-card');
  });
});
