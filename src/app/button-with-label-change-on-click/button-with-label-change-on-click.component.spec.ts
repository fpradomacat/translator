import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonWithLabelChangeOnClickComponent } from './button-with-label-change-on-click.component';

describe('ButtonWithLabelChangeOnClickComponent', () => {
  let component: ButtonWithLabelChangeOnClickComponent;
  let fixture: ComponentFixture<ButtonWithLabelChangeOnClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonWithLabelChangeOnClickComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithLabelChangeOnClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
