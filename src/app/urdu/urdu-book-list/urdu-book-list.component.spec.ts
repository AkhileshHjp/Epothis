import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrduBookListComponent } from './urdu-book-list.component';

describe('UrduBookListComponent', () => {
  let component: UrduBookListComponent;
  let fixture: ComponentFixture<UrduBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UrduBookListComponent]
    });
    fixture = TestBed.createComponent(UrduBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
