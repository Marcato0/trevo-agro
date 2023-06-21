import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContrastComponent } from './contrast.component';

describe('ContrastComponent', () => {
  let component: ContrastComponent;
  let fixture: ComponentFixture<ContrastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContrastComponent]
    });
    fixture = TestBed.createComponent(ContrastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
