import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmAddExpenseComponent } from './epm-add-expense.component';

describe('EpmAddExpenseComponent', () => {
  let component: EpmAddExpenseComponent;
  let fixture: ComponentFixture<EpmAddExpenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmAddExpenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmAddExpenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
