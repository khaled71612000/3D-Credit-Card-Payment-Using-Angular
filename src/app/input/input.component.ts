import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  // override it dont relay on angular take control made manulaly
  // pass it to input comp and wire it to input
@Input() control:FormControl;
@Input() label:string;

  constructor() { }

  ngOnInit(): void {
  }
showErrors() {
  // destuct these from this.control
  const {dirty,touched,errors} = this.control;
return dirty && touched && errors
}

}
