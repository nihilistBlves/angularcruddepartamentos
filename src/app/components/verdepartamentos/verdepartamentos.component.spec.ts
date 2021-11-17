import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerdepartamentosComponent } from './verdepartamentos.component';

describe('VerdepartamentosComponent', () => {
  let component: VerdepartamentosComponent;
  let fixture: ComponentFixture<VerdepartamentosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerdepartamentosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerdepartamentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
