import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppscardComponent } from './appscard.component';

describe('AppscardComponent', () => {
  let component: AppscardComponent;
  let fixture: ComponentFixture<AppscardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppscardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppscardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
