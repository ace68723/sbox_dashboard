import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SboxSkuEditComponent } from './sbox-sku-edit.component';

describe('SboxSkuEditComponent', () => {
  let component: SboxSkuEditComponent;
  let fixture: ComponentFixture<SboxSkuEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SboxSkuEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SboxSkuEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
