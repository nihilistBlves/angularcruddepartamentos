import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesdepartamentoComponent } from './detallesdepartamento.component';

describe('DetallesdepartamentoComponent', () => {
  let component: DetallesdepartamentoComponent;
  let fixture: ComponentFixture<DetallesdepartamentoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesdepartamentoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesdepartamentoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
