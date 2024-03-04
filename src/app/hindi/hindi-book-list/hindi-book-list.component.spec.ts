import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HindiBookListComponent } from './hindi-book-list.component';

describe('HindiBookListComponent', () => {
  let component: HindiBookListComponent;
  let fixture: ComponentFixture<HindiBookListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HindiBookListComponent]
    });
    fixture = TestBed.createComponent(HindiBookListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
