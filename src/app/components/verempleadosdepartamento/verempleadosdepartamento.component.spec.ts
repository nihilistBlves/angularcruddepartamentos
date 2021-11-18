import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerempleadosdepartamentoComponent } from './verempleadosdepartamento.component';

describe('VerempleadosdepartamentoComponent', () => {
  let component: VerempleadosdepartamentoComponent;
  let fixture: ComponentFixture<VerempleadosdepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerempleadosdepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerempleadosdepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
