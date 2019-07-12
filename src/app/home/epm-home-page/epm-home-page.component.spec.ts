import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmHomePageComponent } from './epm-home-page.component';

describe('EpmHomePageComponent', () => {
  let component: EpmHomePageComponent;
  let fixture: ComponentFixture<EpmHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
