import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicRateComponent } from './comic-rate.component';

describe('ComicRateComponent', () => {
  let component: ComicRateComponent;
  let fixture: ComponentFixture<ComicRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
