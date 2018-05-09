import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NotifierService } from 'angular-notifier';
import { Loan } from './loans/model/loan';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private router: Router,
    private notifierService: NotifierService) { }

    ifNoLoanFoundMessage(id: number) {
        this.router.navigate(['/loans']);
        this.notifierService.notify( 'error', 'Finner ikke lån med ID:' + id );
    }
}
