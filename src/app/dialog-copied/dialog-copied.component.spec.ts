import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCopiedComponent } from './dialog-copied.component';

describe('DialogCopiedComponent', () => {
  let component: DialogCopiedComponent;
  let fixture: ComponentFixture<DialogCopiedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCopiedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogCopiedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
