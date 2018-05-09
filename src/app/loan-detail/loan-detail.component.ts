import { Component, OnInit, Input } from '@angular/core';
import { Loan } from '../loans/model/loan';
import { ActivatedRoute, Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { NotifierService } from 'angular-notifier';
import { MessagesService} from '../messages-service.service';

@Component({
  selector: 'app-loan-detail',
  templateUrl: './loan-detail.component.html',
  styleUrls: ['./loan-detail.component.css']
})

export class LoanDetailComponent implements OnInit {

  @Input() loan: Loan;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private notifierService: NotifierService,
    private loanService: LoanService,
    private messagesService: MessagesService) {}

  ngOnInit() {
    this.getLoan();
  }

  getLoan() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loanService.getLoans()
    .subscribe(
      (loans) => {
       this.loan = loans['lan'].find(loan => loan.id === id);
       if (!this.loan) {
        this.messagesService.ifNoLoanFoundMessage(id);
       }
      });
  }

}
