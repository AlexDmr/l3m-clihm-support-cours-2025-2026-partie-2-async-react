import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildCompo } from './child-compo';

describe('ChildCompo', () => {
  let component: ChildCompo;
  let fixture: ComponentFixture<ChildCompo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildCompo],
    }).compileComponents();

    fixture = TestBed.createComponent(ChildCompo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
