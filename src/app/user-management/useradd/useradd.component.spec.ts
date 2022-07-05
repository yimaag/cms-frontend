import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UseraddComponent } from './useradd.component';

describe('UseraddComponent', () => {
  let component: UseraddComponent;
  let fixture: ComponentFixture<UseraddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UseraddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UseraddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
