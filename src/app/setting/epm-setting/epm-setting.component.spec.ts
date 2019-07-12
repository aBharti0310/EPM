import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EpmSettingComponent } from './epm-setting.component';

describe('EpmSettingComponent', () => {
  let component: EpmSettingComponent;
  let fixture: ComponentFixture<EpmSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EpmSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EpmSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
