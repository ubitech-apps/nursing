import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerreviewComponent } from './peerreview.component';

describe('PeerreviewComponent', () => {
  let component: PeerreviewComponent;
  let fixture: ComponentFixture<PeerreviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeerreviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
