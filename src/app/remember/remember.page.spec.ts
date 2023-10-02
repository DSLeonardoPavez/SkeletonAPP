import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RememberPage } from './remember.page';

describe('RememberPage', () => {
  let component: RememberPage;
  let fixture: ComponentFixture<RememberPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RememberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
