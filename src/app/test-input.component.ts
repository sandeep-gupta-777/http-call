import {Component, forwardRef, OnInit} from '@angular/core';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {BaseInputComponent} from './base-input/base-input.component';

@Component({
  selector: 'app-quick-reply-button',
  template: `
    <input type="text" [ngModel]="value">
  `,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => QuickReplyButtonComponent),
      multi: true,
    },
  ]
})
export class QuickReplyButtonComponent extends BaseInputComponent implements OnInit {

  ngOnInit() {
  }

  updateButton($event, index) {

  }

}
