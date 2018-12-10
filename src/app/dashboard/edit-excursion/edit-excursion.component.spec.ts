import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditExcursionComponent } from './edit-excursion.component';

describe('EditExcursionComponent', () => {
  let component: EditExcursionComponent;
  let fixture: ComponentFixture<EditExcursionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditExcursionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditExcursionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
