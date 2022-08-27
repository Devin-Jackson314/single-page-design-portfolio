import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmyComponent } from './amy.component';

describe('AmyComponent', () => {
  let component: AmyComponent;
  let fixture: ComponentFixture<AmyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AmyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
