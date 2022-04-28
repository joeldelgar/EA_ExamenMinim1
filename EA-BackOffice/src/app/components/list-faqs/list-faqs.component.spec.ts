import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFAQSComponent } from './list-faqs.component';

describe('ListFAQSComponent', () => {
  let component: ListFAQSComponent;
  let fixture: ComponentFixture<ListFAQSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListFAQSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFAQSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
