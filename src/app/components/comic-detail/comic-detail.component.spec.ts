import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicDetailComponent } from './comic-detail.component';

describe('ComicDetailComponent', () => {
  let component: ComicDetailComponent;
  let fixture: ComponentFixture<ComicDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
