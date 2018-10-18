import {Directive, Input} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, NgModel} from '@angular/forms';

@Directive({
  selector: '[appStringsAreEquals]',
  providers: [{provide: NG_VALIDATORS, useExisting: StringsAreEqualsValidatorDirective, multi: true}]
})
export class StringsAreEqualsValidatorDirective {
  @Input('appStringsAreEquals') inputComparator: NgModel;
  @Input('isReverseField') isReverseField: boolean;

  validate(inputToCompare: AbstractControl): {[key: string]: any} {
    if (inputToCompare.value && this.isReverseField) {
      this.inputComparator.control.updateValueAndValidity();
    } else {
      if (inputToCompare.value && inputToCompare.value.localeCompare(this.inputComparator.value) !== 0) {
        return {'strNotEqual': true};
      } else {
        return null;
      }
    }
  }
}
