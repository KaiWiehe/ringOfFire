import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RuleCardComponent } from './rule-card.component';

describe('RuleCardComponent', () => {
  let component: RuleCardComponent;
  let fixture: ComponentFixture<RuleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RuleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RuleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
