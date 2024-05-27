import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferimgComponent } from './offerimg.component';

describe('OfferimgComponent', () => {
  let component: OfferimgComponent;
  let fixture: ComponentFixture<OfferimgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OfferimgComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OfferimgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
