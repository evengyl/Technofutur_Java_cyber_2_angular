import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailValidator } from './email.validator';
import { confirmPasswordValidator } from './confirmPwd.validator';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
})
export class ReactiveFormsComponent {

  //TWB -> Two Way Bindings
  name : string = "Loic"
  email : string = "loic@gmail.com"
  password : string = "password"
  gender : string = "male"


  sendTWB(){
    console.log(this.name,  this.email, this.password, this.gender)
  }

  //attention !! pour use les reactive forms -> app.module --> import -> ReactiveFormsModule

  /*----------------------------------------------------------------*/
  //Oui oui, le contructeur est en dessous d'une méthode, on s'en fou, c'est pas la question !

  myForm : FormGroup = new FormGroup({})
  
  constructor(private readonly fb : FormBuilder){
    this.createForm()


     //simulation d'update form, en considérant que les datas 
     //son async et qu'elle arriveront, apres la cr"ation du form group
    setTimeout(() => {
      this.myForm.controls["password"].setValue("test1234")
      //autre manière de faire si on est pas sur un simple INPUT, on get le control et on patch la value
      this.myForm.get("gender")?.patchValue("male")
      let tmp = this.myForm.get("gender")
    }, 1000)
  }

  createForm(){
    this.myForm = this.fb.group({
      name : ["", [Validators.minLength(2), Validators.maxLength(25), Validators.required]],
      email : ["", [Validators.email, Validators.required]],
      emailPerso : ["", [emailValidator]],
      password : ["", [Validators.minLength(8), Validators.maxLength(16), Validators.required]],
      passwordConfirm : ["", [Validators.minLength(8), Validators.maxLength(16)]],
      gender : ["", [Validators.required]]
    },{
      validators : confirmPasswordValidator
    })
  }


  debugRF(){
    console.log(this.myForm)
  }

  //simulation d'update form, sous control d'un bouton pré-remplir...
  preInsertData(){
    setTimeout(() => {
      this.myForm.controls["name"].setValue("Martin")
      this.myForm.controls["email"].setValue("Martin@gmail.be")
    }, 1000)
  }


  onSubmitRF(){
    console.log(this.myForm)
  }


}
