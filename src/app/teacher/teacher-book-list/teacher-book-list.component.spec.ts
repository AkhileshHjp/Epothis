import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherBookListComponent } from './teacher-book-list.component';

describe('TeacherBookListComponent', () => {
  let component: TeacherBookListComponent;
  let fixture: ComponentFixture<TeacherBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TeacherBookListComponent]
    });
    fixture = TestBed.createComponent(TeacherBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
