import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class1Component } from './class1.component';

describe('Class1Component', () => {
  let component: Class1Component;
  let fixture: ComponentFixture<Class1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Class1Component]
    });
    fixture = TestBed.createComponent(Class1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
