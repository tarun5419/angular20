import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsObservable } from './rxjs-observable';

describe('Observable', () => {
  let component: RxjsObservable;
  let fixture: ComponentFixture<RxjsObservable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RxjsObservable]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RxjsObservable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
