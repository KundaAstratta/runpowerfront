import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunsListComponent } from './runs-list.component';

describe('RunsListComponent', () => {
  let component: RunsListComponent;
  let fixture: ComponentFixture<RunsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
