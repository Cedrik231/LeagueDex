import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampionmodalComponent } from './championmodal.component';

describe('ChampionmodalComponent', () => {
  let component: ChampionmodalComponent;
  let fixture: ComponentFixture<ChampionmodalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampionmodalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampionmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
