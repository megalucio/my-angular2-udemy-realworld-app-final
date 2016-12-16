import {FormControl} from '@angular/forms';

export class UserValidators{
    static shouldBeAnEmail(control: FormControl){
        if(!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
            return {invalidEmail: true};
        return null;

    }
}