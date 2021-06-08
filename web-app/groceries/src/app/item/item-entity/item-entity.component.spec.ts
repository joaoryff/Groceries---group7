import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemEntityComponent } from './item-entity.component';

describe('ItemEntityComponent', () => {
  let component: ItemEntityComponent;
  let fixture: ComponentFixture<ItemEntityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemEntityComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
