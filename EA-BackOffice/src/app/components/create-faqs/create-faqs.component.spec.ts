import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFAQSComponent } from './create-faqs.component';

describe('CreateFAQSComponent', () => {
  let component: CreateFAQSComponent;
  let fixture: ComponentFixture<CreateFAQSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateFAQSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateFAQSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
