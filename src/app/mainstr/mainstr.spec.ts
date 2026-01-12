import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mainstr } from './mainstr';

describe('Mainstr', () => {
  let component: Mainstr;
  let fixture: ComponentFixture<Mainstr>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mainstr]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mainstr);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
