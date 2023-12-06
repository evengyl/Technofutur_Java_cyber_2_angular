import { AbstractControl } from "@angular/forms";

export function confirmPasswordValidator(controls : AbstractControl)
{

    let pwd1 = controls.value.password
    let pwd2 = controls.value.passwordConfirm

    if(pwd1 && pwd2)
    {
        if(pwd1 == pwd2)
            return null
        else
            return { passwordVerify : "Les deux mots de passe ne correspondent pas"}
    }
    else
        return { passwordVerify : "Champ obligatoire"}
}