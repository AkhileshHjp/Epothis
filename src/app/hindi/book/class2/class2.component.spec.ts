import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class2Component } from './class2.component';

describe('Class2Component', () => {
  let component: Class2Component;
  let fixture: ComponentFixture<Class2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Class2Component]
    });
    fixture = TestBed.createComponent(Class2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
