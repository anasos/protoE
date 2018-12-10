import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowExcursionComponent } from './show-excursion.component';

describe('ShowExcursionComponent', () => {
  let component: ShowExcursionComponent;
  let fixture: ComponentFixture<ShowExcursionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowExcursionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
