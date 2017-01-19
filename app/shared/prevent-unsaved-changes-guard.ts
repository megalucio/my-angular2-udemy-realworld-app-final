import { UserComponent } from '../users/user.component';
import { NavbarComponent } from '../navbar.component';

import { CanDeactivate} from '@angular/router';

export class PreventUnsavedChangesGuard implements CanDeactivate<UserComponent>{

    canDeactivate(userComponent: UserComponent){
        if(userComponent.userForm.dirty)
            return confirm("If you navigaate outside the form you will lose your data. Are you sure?");
        return true;
    }

}