import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class3Component } from './class3.component';

describe('Class3Component', () => {
  let component: Class3Component;
  let fixture: ComponentFixture<Class3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Class3Component]
    });
    fixture = TestBed.createComponent(Class3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
