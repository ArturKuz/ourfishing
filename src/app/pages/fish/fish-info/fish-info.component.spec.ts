import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FishInfoComponent } from './fish-info.component';

describe('FishInfoComponent', () => {
  let component: FishInfoComponent;
  let fixture: ComponentFixture<FishInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FishInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FishInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
