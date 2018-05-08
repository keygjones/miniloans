import { Component, OnInit } from '@angular/core';
import { LoanService } from '../loan.service';
import { Loan } from './model/loan';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css']
})

export class LoansComponent implements OnInit {

  selectedLoan: Loan;
  loans: Loan[];
  displayedColumns = ['id', 'lanetaker', 'lan', 'buttons'];
  total: number;

  constructor(private loanService: LoanService) { }

  getLoans() {
    console.log('Getting loans, calling service');
    this.loanService.getLoans()
    .subscribe(
      (loans) => {
       this.loans = loans['lan'];
      }
      ,
      () => {
        console.log('Error');
      },
      () => {
        this.total = this.loans.
          map(t => t.lanebelop).reduce((acc, value) => acc + value, 0);
        });
  }

  getTotal() {
    return this.total;
  }

  ngOnInit() {
    this.getLoans();
  }

}
