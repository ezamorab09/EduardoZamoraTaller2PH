import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ManageCitasPage } from './manage-citas.page';

describe('ManageCitasPage', () => {
  let component: ManageCitasPage;
  let fixture: ComponentFixture<ManageCitasPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCitasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
