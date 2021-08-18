import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastArticleComponent } from './past-article.component';

describe('PastArticleComponent', () => {
  let component: PastArticleComponent;
  let fixture: ComponentFixture<PastArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
