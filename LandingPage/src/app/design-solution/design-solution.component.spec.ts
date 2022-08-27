import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignSolutionComponent } from './design-solution.component';

describe('DesignSolutionComponent', () => {
  let component: DesignSolutionComponent;
  let fixture: ComponentFixture<DesignSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DesignSolutionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DesignSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
