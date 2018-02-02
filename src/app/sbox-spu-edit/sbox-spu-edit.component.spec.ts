import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SboxSpuEditComponent } from './sbox-spu-edit.component';

describe('SboxSpuEditComponent', () => {
  let component: SboxSpuEditComponent;
  let fixture: ComponentFixture<SboxSpuEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SboxSpuEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SboxSpuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
