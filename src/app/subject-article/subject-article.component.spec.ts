import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectArticleComponent } from './subject-article.component';

describe('SubjectArticleComponent', () => {
  let component: SubjectArticleComponent;
  let fixture: ComponentFixture<SubjectArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
