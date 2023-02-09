import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerCategotyComponent } from './manager-categoty.component';

describe('ManagerCategotyComponent', () => {
  let component: ManagerCategotyComponent;
  let fixture: ComponentFixture<ManagerCategotyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerCategotyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerCategotyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
