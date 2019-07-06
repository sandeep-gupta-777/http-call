import {ChangeDetectionStrategy, Component, DoCheck, OnInit} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-root',
  template: `
      <i>test</i>
      <form [formGroup]="form">
          <designer-quick-reply-button formControlName="name"></designer-quick-reply-button>
      </form>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) {
  }


  form: FormGroup;

  ngOnInit(): void {
    this.form = this.createTestForm();
  }

  createTestForm() {
    return this.formBuilder.group({
      name: 'test name',
    });
  }
}
