import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmProfileComponent } from './epm-profile.component';

describe('EpmProfileComponent', () => {
  let component: EpmProfileComponent;
  let fixture: ComponentFixture<EpmProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
