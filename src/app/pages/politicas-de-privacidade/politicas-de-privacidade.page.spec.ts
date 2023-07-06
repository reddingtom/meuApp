import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PoliticasDePrivacidadePage } from './politicas-de-privacidade.page';

describe('PoliticasDePrivacidadePage', () => {
  let component: PoliticasDePrivacidadePage;
  let fixture: ComponentFixture<PoliticasDePrivacidadePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PoliticasDePrivacidadePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
