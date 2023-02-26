import { Component, OnInit } from '@angular/core';
import { ApprovalService } from '../approval.service';

@Component({
  selector: 'app-advancecheck',
  templateUrl: './advancecheck.component.html',
  styleUrls: ['./advancecheck.component.css']
})
export class AdvancecheckComponent implements OnInit {
  message:string="";
  approvalText:string="";
  constructor(private appService:ApprovalService) { }

  ngOnInit() {
    this.appService.currentApprovalStageMessage.subscribe(msg => this.message = msg)
  }

  submit()
  {
    console.log(this.approvalText);
    this.appService.updateApprovalMessage( this.approvalText);
  }
}
