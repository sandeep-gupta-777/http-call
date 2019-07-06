import { ChangeDetectorRef, Component, Injector, Input, OnInit, Type } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';

@Component({ template: '' })
export class BaseInputComponent<T = any> implements ControlValueAccessor {

  // @Input()
  // cid: string = uuid();

  @Input()
  disabled: boolean;

  @Input()
  set value(value: T) {
    this._value = value;
    debugger;
    this.notifyValueChange();
  }

  get value(): T {
    return this._value;
  }

  onChange: (value: T) => {};
  onTouched: () => {};

  protected _value: T;
  protected cdRef: ChangeDetectorRef;

  constructor(public injector: Injector) {
    this.cdRef = injector.get<ChangeDetectorRef>(ChangeDetectorRef as Type<ChangeDetectorRef>);
  }

  notifyValueChange(): void {
    if (this.onChange) {
      this.onChange(this.value);
    }
  }

  writeValue(value: T): void {
    this._value = value;
    setTimeout(() => this.cdRef.detectChanges(), 0);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

}
