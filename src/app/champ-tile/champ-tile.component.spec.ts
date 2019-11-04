import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChampTileComponent } from './champ-tile.component';

describe('ChampTileComponent', () => {
  let component: ChampTileComponent;
  let fixture: ComponentFixture<ChampTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChampTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChampTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
