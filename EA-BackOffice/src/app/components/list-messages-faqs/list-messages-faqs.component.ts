import { Component, OnInit } from '@angular/core';
import { FAQS } from 'src/app/models/FAQS';
import { FAQSService } from 'src/app/service/FAQS.services';
import { Message } from 'src/app/models/message';
import { MessageService } from 'src/app/service/message.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Toast, ToastrComponentlessModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-messages-faqs',
  templateUrl: './list-messages-faqs.component.html',
  styleUrls: ['./list-messages-faqs.component.css']
})
export class ListMessagesFaqsComponent implements OnInit {
  listMessages: Message[] = [];
  id: string | null;
  constructor(private _messageService: MessageService,
    private router: Router, 
    private toastr: ToastrService,
    private aRouter: ActivatedRoute) {
      this.id = this.aRouter.snapshot.paramMap.get('id');
      console.log(this.id);
  }

  ngOnInit(): void {
    if (this.id != null)
      this.getMessagesByQuestion(this.id);
    else{
      this.toastr.error('Id not found', 'Messages not found');
    }
  }

  getMessagesByQuestion(id:string){
    this._messageService.getMessagesByQuestion(id).subscribe(data => {
      console.log(data);
      this.listMessages = data;
    }, error => {
      console.log(error);
    })
  }

}
