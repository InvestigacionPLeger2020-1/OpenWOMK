import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentFacebookComponent } from './agent-facebook.component';

describe('AgentFacebookComponent', () => {
  let component: AgentFacebookComponent;
  let fixture: ComponentFixture<AgentFacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentFacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
