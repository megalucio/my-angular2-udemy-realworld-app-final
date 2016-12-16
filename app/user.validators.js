"use strict";
var UserValidators = (function () {
    function UserValidators() {
    }
    UserValidators.shouldBeAnEmail = function (control) {
        if (!control.value.match(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/))
            return { invalidEmail: true };
        return null;
    };
    return UserValidators;
}());
exports.UserValidators = UserValidators;
//# sourceMappingURL=user.validators.js.map