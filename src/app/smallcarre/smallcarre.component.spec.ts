import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallcarreComponent } from './smallcarre.component';

describe('SmallcarreComponent', () => {
  let component: SmallcarreComponent;
  let fixture: ComponentFixture<SmallcarreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SmallcarreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallcarreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
