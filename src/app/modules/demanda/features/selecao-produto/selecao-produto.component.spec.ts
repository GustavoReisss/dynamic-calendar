import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoProdutoComponent } from './selecao-produto.component';

describe('SelecaoProdutoComponent', () => {
  let component: SelecaoProdutoComponent;
  let fixture: ComponentFixture<SelecaoProdutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SelecaoProdutoComponent]
    });
    fixture = TestBed.createComponent(SelecaoProdutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
