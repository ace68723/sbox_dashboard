import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SboxSkuListComponent } from './sbox-sku-list.component';

describe('SboxSkuListComponent', () => {
  let component: SboxSkuListComponent;
  let fixture: ComponentFixture<SboxSkuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SboxSkuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SboxSkuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
