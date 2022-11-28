import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewTeskDialogComponent } from './new-tesk-dialog.component';

describe('NewTeskDialogComponent', () => {
  let component: NewTeskDialogComponent;
  let fixture: ComponentFixture<NewTeskDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewTeskDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewTeskDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
