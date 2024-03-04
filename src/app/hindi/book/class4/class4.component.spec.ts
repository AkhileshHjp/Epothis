import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class4Component } from './class4.component';

describe('Class4Component', () => {
  let component: Class4Component;
  let fixture: ComponentFixture<Class4Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Class4Component]
    });
    fixture = TestBed.createComponent(Class4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
