import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrduClassesComponent } from './urdu-classes.component';

describe('UrduClassesComponent', () => {
  let component: UrduClassesComponent;
  let fixture: ComponentFixture<UrduClassesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrduClassesComponent]
    });
    fixture = TestBed.createComponent(UrduClassesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
