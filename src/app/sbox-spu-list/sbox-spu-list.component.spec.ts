import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SboxSpuListComponent } from './sbox-spu-list.component';

describe('SboxSpuListComponent', () => {
  let component: SboxSpuListComponent;
  let fixture: ComponentFixture<SboxSpuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SboxSpuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SboxSpuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
