import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoresHomeComponent } from './stores-home.component';

describe('StoresHomeComponent', () => {
  let component: StoresHomeComponent;
  let fixture: ComponentFixture<StoresHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoresHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoresHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
