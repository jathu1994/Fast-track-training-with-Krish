import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WordsWithVovelsFinderComponent } from './words-with-vovels-finder.component';

describe('WordsWithVovelsFinderComponent', () => {
  let component: WordsWithVovelsFinderComponent;
  let fixture: ComponentFixture<WordsWithVovelsFinderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WordsWithVovelsFinderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WordsWithVovelsFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
