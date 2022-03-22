import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookupStartComponent } from './lookup-start.component';

describe('LookupStartComponent', () => {
  let component: LookupStartComponent;
  let fixture: ComponentFixture<LookupStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookupStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LookupStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
