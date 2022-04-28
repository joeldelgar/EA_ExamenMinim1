import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMessagesFaqsComponent } from './list-messages-faqs.component';

describe('ListMessagesFaqsComponent', () => {
  let component: ListMessagesFaqsComponent;
  let fixture: ComponentFixture<ListMessagesFaqsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMessagesFaqsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMessagesFaqsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
