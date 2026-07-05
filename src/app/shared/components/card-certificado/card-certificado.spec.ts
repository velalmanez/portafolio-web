import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCertificado } from './card-certificado';

describe('CardCertificado', () => {
  let component: CardCertificado;
  let fixture: ComponentFixture<CardCertificado>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCertificado]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCertificado);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
