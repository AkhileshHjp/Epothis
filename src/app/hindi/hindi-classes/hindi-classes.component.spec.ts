import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiClassesComponent } from './hindi-classes.component';

describe('HindiClassesComponent', () => {
  let component: HindiClassesComponent;
  let fixture: ComponentFixture<HindiClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HindiClassesComponent]
    });
    fixture = TestBed.createComponent(HindiClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
