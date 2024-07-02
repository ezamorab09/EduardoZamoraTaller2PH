import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VerCitasPage } from './ver-citas.page';

describe('VerCitasPage', () => {
  let component: VerCitasPage;
  let fixture: ComponentFixture<VerCitasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VerCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
