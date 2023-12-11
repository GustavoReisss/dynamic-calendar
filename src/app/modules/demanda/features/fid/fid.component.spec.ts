import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FidComponent } from './fid.component';

describe('FidComponent', () => {
  let component: FidComponent;
  let fixture: ComponentFixture<FidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FidComponent]
    });
    fixture = TestBed.createComponent(FidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
