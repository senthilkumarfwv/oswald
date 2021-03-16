import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNotificationCardComponent } from './dashboard-notification-card.component';

describe('DashboardNotificationCardComponent', () => {
  let component: DashboardNotificationCardComponent;
  let fixture: ComponentFixture<DashboardNotificationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNotificationCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNotificationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
