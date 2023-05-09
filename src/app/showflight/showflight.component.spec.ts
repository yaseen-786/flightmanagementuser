import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowflightComponent } from './showflight.component';

describe('ShowflightComponent', () => {
  let component: ShowflightComponent;
  let fixture: ComponentFixture<ShowflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowflightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
