import { Component, OnInit } from '@angular/core';
import { ApprovalService } from '../approval.service';

@Component({
  selector: 'app-finalcheck',
  templateUrl: './finalcheck.component.html',
  styleUrls: ['./finalcheck.component.css']
})
export class FinalcheckComponent implements OnInit {
  message:string="";
  approvalText:string="";
  constructor(private appService:ApprovalService) { }

  ngOnInit() {
    this.appService.currentApprovalStageMessage.subscribe(msg => this.message = msg);
  }

  submit()
  {
    this.appService.updateApprovalMessage(this.approvalText);
  }
  
}
