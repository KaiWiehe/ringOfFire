import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IdErrorComponent } from './id-error.component';

describe('IdErrorComponent', () => {
  let component: IdErrorComponent;
  let fixture: ComponentFixture<IdErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IdErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IdErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
