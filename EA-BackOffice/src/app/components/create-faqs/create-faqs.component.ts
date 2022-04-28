import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { FAQS } from 'src/app/models/FAQS';
import { FAQSService } from 'src/app/service/FAQS.services';

@Component({
  selector: 'app-create-faqs',
  templateUrl: './create-faqs.component.html',
  styleUrls: ['./create-faqs.component.css']
})

export class CreateFAQSComponent implements OnInit {
  faqsForm: FormGroup;
  title = "Create FAQS";
  question: string|null;

  constructor(private fb: FormBuilder, 
              private router: Router, 
              private toastr: ToastrService,
              private _faqsService: FAQSService,
              private aRouter: ActivatedRoute) {
    this.faqsForm = this.fb.group({
      question: ['', Validators.required],
      response: ['', Validators.required],
      date: ['', Validators.required]
    });
    this.question = this.aRouter.snapshot.paramMap.get('question');
    console.log(this.question);
               
  }

  ngOnInit(): void {
    this.editFAQS();
  }

  addFAQS(){
    const FAQS: FAQS = {
      question: this.faqsForm.get('question')?.value,
      response: this.faqsForm.get('response')?.value,
      date: this.faqsForm.get('date')?.value,
    }
    if(this.question!=null ){
      //Edit Rating
      this._faqsService.updateFAQS(this.question, FAQS).subscribe(data => {
        this.toastr.info('Question successfully edited!', 'FAQS edited');
        this.router.navigate(['/list-faqs']);
      }, error => {
        console.log(error);
        this.faqsForm.reset();
      })
    }else{
      //Add Rating
      console.log(FAQS);
      if (FAQS.question != null) {
        this._faqsService.addFAQS(FAQS).subscribe(data => {
          this.toastr.success('Question successfully created!', 'FAQS created');
          this.router.navigate(['/list-faqs']);
        }, error => {
          console.log(error);
          this.faqsForm.reset();
        })
      }
    }
  }

  editFAQS(){
    if(this.question!==null){
      this.question = 'Edit FAQS';
      this._faqsService.getFAQSbyQuestion(this.question).subscribe(data => {
        this.faqsForm.setValue({
          question: data.question,
          response: data.response,
          date: data.date,
        })
      })
    }
  }
}