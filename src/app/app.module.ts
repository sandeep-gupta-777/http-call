import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {RouterModule} from '@angular/router';
import {TodosComponent} from './todos.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {QuickReplyButtonComponent} from './test-input.component';
import {BaseInputComponent} from './base-input/base-input.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    QuickReplyButtonComponent,
    BaseInputComponent,
  ],

  imports: [
    BrowserModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
