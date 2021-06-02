import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibinoComponent } from './fibino.component';

describe('FibinoComponent', () => {
  let component: FibinoComponent;
  let fixture: ComponentFixture<FibinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibinoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
