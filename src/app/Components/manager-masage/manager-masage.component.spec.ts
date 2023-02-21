import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerMasageComponent } from './manager-masage.component';

describe('ManagerMasageComponent', () => {
  let component: ManagerMasageComponent;
  let fixture: ComponentFixture<ManagerMasageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerMasageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerMasageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
