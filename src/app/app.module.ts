import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ExcursionsComponent } from './dashboard/excursions/excursions.component';
import { AppRoutingModule } from './/app-routing.module';
import { NewExcursionComponent } from './dashboard/new-excursion/new-excursion.component';
import { ExcursionService } from './excursion.service';
import { LoaderComponent } from './loader/loader.component';
import { ShowExcursionComponent } from './dashboard/show-excursion/show-excursion.component';
import { EditExcursionComponent } from './dashboard/edit-excursion/edit-excursion.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    ExcursionsComponent,
    NewExcursionComponent,
    LoaderComponent,
    ShowExcursionComponent,
    EditExcursionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ExcursionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
