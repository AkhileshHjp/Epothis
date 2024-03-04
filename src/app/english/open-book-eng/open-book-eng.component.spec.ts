import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenBookEngComponent } from './open-book-eng.component';

describe('OpenBookEngComponent', () => {
  let component: OpenBookEngComponent;
  let fixture: ComponentFixture<OpenBookEngComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenBookEngComponent]
    });
    fixture = TestBed.createComponent(OpenBookEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
