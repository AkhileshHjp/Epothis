import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenTMComponent } from './open-tm.component';

describe('OpenTMComponent', () => {
  let component: OpenTMComponent;
  let fixture: ComponentFixture<OpenTMComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpenTMComponent]
    });
    fixture = TestBed.createComponent(OpenTMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
