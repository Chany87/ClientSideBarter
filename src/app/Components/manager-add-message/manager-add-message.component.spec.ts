import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerAddMessageComponent } from './manager-add-message.component';

describe('ManagerAddMessageComponent', () => {
  let component: ManagerAddMessageComponent;
  let fixture: ComponentFixture<ManagerAddMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerAddMessageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerAddMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
