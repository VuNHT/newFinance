import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule, MatCardModule,
  MatSelectModule, MatButtonModule, MatCheckboxModule, MatProgressSpinnerModule,
  MatFormFieldModule, MatDialogModule, MatIconModule, MatTabsModule, MatInputModule,
  MatTableModule, MatPaginatorModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { MarketComponent } from './market/market.component';
import { UsingComponent } from './using/using.component';
import { HttpClientModule } from '@angular/common/http';
import { FinalFinanceComponent } from './final-finance/final-finance.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MarketComponent,
    UsingComponent,
    FinalFinanceComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule, MatCardModule, MatButtonModule,
    MatSelectModule, MatCheckboxModule, MatProgressSpinnerModule,
    MatFormFieldModule, MatDialogModule, MatIconModule, MatTabsModule, MatInputModule,
    MatTableModule, MatPaginatorModule, MatDatepickerModule, MatNativeDateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
