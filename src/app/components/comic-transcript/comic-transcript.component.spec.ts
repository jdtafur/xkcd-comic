import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComicTranscriptComponent } from './comic-transcript.component';

describe('ComicTranscriptComponent', () => {
  let component: ComicTranscriptComponent;
  let fixture: ComponentFixture<ComicTranscriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ComicTranscriptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComicTranscriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
