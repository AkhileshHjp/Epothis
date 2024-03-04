import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EngBookLisxComponent } from './eng-book-lisx.component';

describe('EngBookLisxComponent', () => {
  let component: EngBookLisxComponent;
  let fixture: ComponentFixture<EngBookLisxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EngBookLisxComponent]
    });
    fixture = TestBed.createComponent(EngBookLisxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
