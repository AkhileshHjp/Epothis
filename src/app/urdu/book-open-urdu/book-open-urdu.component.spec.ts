import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookOpenUrduComponent } from './book-open-urdu.component';

describe('BookOpenUrduComponent', () => {
  let component: BookOpenUrduComponent;
  let fixture: ComponentFixture<BookOpenUrduComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BookOpenUrduComponent]
    });
    fixture = TestBed.createComponent(BookOpenUrduComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
