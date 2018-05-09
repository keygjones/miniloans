import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule, MatButtonModule, MatInputModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AppComponent } from './app.component';
import { LoansComponent } from './loans/loans.component';
import { HttpClientModule } from '@angular/common/http';
import { LoanDetailComponent } from './loan-detail/loan-detail.component';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { LoanEditComponent } from './loan-edit/loan-edit.component';
import { NotifierModule } from 'angular-notifier';
import { MessagesService } from './messages-service.service';


@NgModule({
  declarations: [
    AppComponent,
    LoansComponent,
    LoanDetailComponent,
    LoanEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule, MatCardModule, MatButtonModule, MatInputModule,
    MatFormFieldModule,
    FormsModule,
    AppRoutingModule,
    NotifierModule.withConfig( {
      position: {
        horizontal: {
          position: 'right',
          distance: 12
        },
        vertical: {
          position: 'top',
          distance: 12,
          gap: 10
        }
      }
    } )
  ],
  providers: [MessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
