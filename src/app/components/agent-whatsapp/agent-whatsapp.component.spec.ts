import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentWhatsappComponent } from './agent-whatsapp.component';

describe('AgentWhatsappComponent', () => {
  let component: AgentWhatsappComponent;
  let fixture: ComponentFixture<AgentWhatsappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentWhatsappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentWhatsappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
