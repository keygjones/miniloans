import { Component, OnInit, Input } from '@angular/core';
import { Loan } from '../loans/model/loan';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { LoanService } from '../loan.service';
import { NotifierService } from 'angular-notifier';

@Component({
  selector: 'app-loan-edit',
  templateUrl: './loan-edit.component.html',
  styleUrls: ['./loan-edit.component.css']
})

export class LoanEditComponent implements OnInit {

  @Input() loan: Loan;

  constructor(
    private route: ActivatedRoute,
    private loanService: LoanService, 
    private router: Router,
    private notifierService: NotifierService) {}

  ngOnInit() {
    this.getLoan();
  }

  getLoan() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.loanService.getLoans()
    .subscribe(
      (loans) =>{
       this.loan = loans['lan'].find(loan => loan.id == id);
      });
  }

  save(loan) { 
    console.log('Save invoked ');
    console.log(loan);
    this.router.navigate(['/loans']);
    this.notifierService.notify( 'success', 'Lagring suksess' );
  }

}
