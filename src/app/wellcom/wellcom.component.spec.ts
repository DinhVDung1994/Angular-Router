import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WellcomComponent } from './wellcom.component';

describe('WellcomComponent', () => {
  let component: WellcomComponent;
  let fixture: ComponentFixture<WellcomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WellcomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WellcomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
