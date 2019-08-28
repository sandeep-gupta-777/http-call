import {Component, Input, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {ControlContainer, FormBuilder, FormGroup, NgForm} from '@angular/forms';

export function controlContainerFactory(component: MainFormComponent) {
  return component.mainForm;
}

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss'],
  viewProviders: [
    {
      provide: ControlContainer,
      useFactory: controlContainerFactory,
      deps: [MainFormComponent]
    }
  ]
})
export class MainFormComponent implements OnInit {
  // @ViewChild('myForm') ngForm: FormGroup;

  @Input() template;
  mainForm: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.mainForm = this.formBuilder.group({
      inside: ['inside'],
      // outside: ['outside']
    });
    // this.gettemplate();
  }

  @ViewChild('container', { read: ViewContainerRef }) _vcr;
  @ViewChild('tpl') tpl;


  gettemplate(){
    this._vcr.createEmbeddedView(this.tpl);
    console.log(this.mainForm);
  }
  // save(formvalue:FOr){
  //   console.log(formvalue.value);
  // }

  save(formvalue:NgForm){
    console.log(formvalue.value);
  }

}
