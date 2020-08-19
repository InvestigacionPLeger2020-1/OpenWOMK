import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationFacebookComponent } from './variation-facebook.component';

describe('VariationFacebookComponent', () => {
  let component: VariationFacebookComponent;
  let fixture: ComponentFixture<VariationFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariationFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariationFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
