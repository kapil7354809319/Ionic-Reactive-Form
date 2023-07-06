import { AbstractControl } from "@angular/forms";

export function passwordMatch(password:string, confirm_password: string){
    return function(form: AbstractControl){
        const passwordValue = form.get(password)?.value
        const confirmpasswordValue = form.get(confirm_password)?.value
        if(passwordValue === confirmpasswordValue){
            return null;
        }
        return {passwordMismatchError: true}
    }
    
}