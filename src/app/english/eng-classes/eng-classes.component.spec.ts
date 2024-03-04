import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngClassesComponent } from './eng-classes.component';

describe('EngClassesComponent', () => {
  let component: EngClassesComponent;
  let fixture: ComponentFixture<EngClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngClassesComponent]
    });
    fixture = TestBed.createComponent(EngClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
