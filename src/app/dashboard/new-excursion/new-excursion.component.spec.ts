import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewExcursionComponent } from './new-excursion.component';

describe('NewExcursionComponent', () => {
  let component: NewExcursionComponent;
  let fixture: ComponentFixture<NewExcursionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewExcursionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
