import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcarrierComponent } from './gcarrier.component';

describe('GcarrierComponent', () => {
  let component: GcarrierComponent;
  let fixture: ComponentFixture<GcarrierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcarrierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcarrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
