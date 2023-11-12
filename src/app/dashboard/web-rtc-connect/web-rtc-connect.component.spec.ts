import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WebRtcConnectComponent } from './web-rtc-connect.component';

describe('WebRtcConnectComponent', () => {
  let component: WebRtcConnectComponent;
  let fixture: ComponentFixture<WebRtcConnectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WebRtcConnectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WebRtcConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
