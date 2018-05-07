import { Injectable } from '@angular/core';
import { Loan } from './loans/model/loan';
import {HttpClient} from '@angular/common/http';
import 'rxjs/Rx'; 
import { Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})

export class LoanService {

  private loans: Loan[];

  private loansUrl = 'assets/lan.json'

  constructor(private http: HttpClient) { }

  getLoans(): Observable<any> {
    return this.http.get(this.loansUrl);  
  }

}