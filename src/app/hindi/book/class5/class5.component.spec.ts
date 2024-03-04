import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Class5Component } from './class5.component';

describe('Class5Component', () => {
  let component: Class5Component;
  let fixture: ComponentFixture<Class5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Class5Component]
    });
    fixture = TestBed.createComponent(Class5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
