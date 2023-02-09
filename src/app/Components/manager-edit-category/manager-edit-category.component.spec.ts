import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerEditCategoryComponent } from './manager-edit-category.component';

describe('ManagerEditCategoryComponent', () => {
  let component: ManagerEditCategoryComponent;
  let fixture: ComponentFixture<ManagerEditCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerEditCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerEditCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
