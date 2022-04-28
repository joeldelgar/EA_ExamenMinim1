import { Component, OnInit } from '@angular/core';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';
import { FAQS } from 'src/app/models/FAQS';
import { FAQSService } from 'src/app/service/FAQS.services';

@Component({
  selector: 'app-list-faqs',
  templateUrl: './list-faqs.component.html',
  styleUrls: ['./list-faqs.component.css']
})
export class ListFAQSComponent implements OnInit {
  listFaqs: FAQS[] = [];
  
  constructor(private _faqsService: FAQSService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getFAQS();
  }

  getFAQS(){
    this._faqsService.getFAQS().subscribe({next: 
      data => {
      console.log(data);
      this.listFaqs = data;
    }, error: error => {
      console.log(error);
    }})
  }

  deleteFAQS(question: string){
    const confirmDelete = confirm("Question: '"+question+"' will be deleted, do you want to continue?");
    if(confirmDelete===true){
      this._faqsService.deleteFAQS(question).subscribe({next:
        data => {
        this.toastr.error('Question successfully deleted', 'FAQS deleted');
        this.getFAQS();
      }, error: error => {
        console.log(error);
      }})
    }
  }
}
