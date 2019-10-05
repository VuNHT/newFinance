import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalFinanceComponent } from './final-finance.component';

describe('FinalFinanceComponent', () => {
  let component: FinalFinanceComponent;
  let fixture: ComponentFixture<FinalFinanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalFinanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
