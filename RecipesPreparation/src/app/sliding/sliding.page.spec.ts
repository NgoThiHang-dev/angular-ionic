import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SlidingPage } from './sliding.page';

describe('SlidingPage', () => {
  let component: SlidingPage;
  let fixture: ComponentFixture<SlidingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlidingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SlidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
