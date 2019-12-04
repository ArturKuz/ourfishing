import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FisherMapComponent } from './fisher-map.component';

describe('FisherMapComponent', () => {
  let component: FisherMapComponent;
  let fixture: ComponentFixture<FisherMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FisherMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FisherMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
