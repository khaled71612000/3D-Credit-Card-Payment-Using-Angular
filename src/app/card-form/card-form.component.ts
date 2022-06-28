import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DateFormControl } from '../date-form-control'

@Component({
  selector: 'app-card-form',
  templateUrl: './card-form.component.html',
  styleUrls: ['./card-form.component.css']
})
export class CardFormComponent implements OnInit {
  cardForm = new FormGroup({
    // some kind of form and exctaly one field inside
    // in '' is the placeholder starter
    // built in valdiort enterd value for name if null say something
    // and form is valdi:false
    // alt lick valdior for more than reuqird
    // some valdiotrs are prorpties and others functions all in arr
    // min checks for min vlaue numbe ,minlength check string length
    name: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        // Validators.maxLength(5),
        // can only accept regular experession with spaces
        // Validators.pattern(/\s/)
      ]),
    cardNumber: new FormControl('',
      [
        Validators.required,
        Validators.minLength(16),
        Validators.maxLength(16)
      ]),
    // /[1-9]/ regular expression must be between one or nine
    // start of string must match either 0 folllowed by 1-9 or 1 followed by 0-2 
    // for month then close parnethes then
    //  get two numbers and dollar sign is end
    expiration: new DateFormControl('',
      [
        Validators.required,
        Validators.pattern(/^(0[1-9]|1[0-2])\/\d{2}$/)

      ]),
    securityCode: new FormControl('',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(3),
      ]),
  });

  constructor() {
    console.log(this.cardForm.controls.name)
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log('form is submitted')
  }

  onResetClick() {
    this.cardForm.reset();
  }

}
