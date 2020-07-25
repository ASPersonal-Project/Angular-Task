/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HaderComponent } from './hader.component';

describe('HaderComponent', () => {
  let component: HaderComponent;
  let fixture: ComponentFixture<HaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
