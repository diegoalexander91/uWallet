import { Directive } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl, ValidationErrors } from '@angular/forms';

@Directive({
    selector: '[eduEmail]',
    providers: [
        {
            provide: NG_VALIDATORS,
            useExisting: EduEmailDirective,
            multi: true
        }
    ]
})
export class EduEmailDirective implements Validator {


    

    validate(control: AbstractControl): ValidationErrors | null {
        const email = control.value ? control.value.trim() : '';
        if (!email || !email.endsWith('.edu') || email.endsWith('.edu.co')) {
            return { eduEmail: true };
        }
        return null;
    }



}