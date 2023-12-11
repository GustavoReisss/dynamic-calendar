import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialDemandaComponent } from './material-demanda.component';

describe('MaterialDemandaComponent', () => {
  let component: MaterialDemandaComponent;
  let fixture: ComponentFixture<MaterialDemandaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialDemandaComponent]
    });
    fixture = TestBed.createComponent(MaterialDemandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
