import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductnavigationComponent } from './productnavigation.component';

describe('ProductnavigationComponent', () => {
  let component: ProductnavigationComponent;
  let fixture: ComponentFixture<ProductnavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductnavigationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
