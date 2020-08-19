import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VariationWhatsappComponent } from './variation-whatsapp.component';

describe('VariationWhatsappComponent', () => {
  let component: VariationWhatsappComponent;
  let fixture: ComponentFixture<VariationWhatsappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VariationWhatsappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VariationWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
