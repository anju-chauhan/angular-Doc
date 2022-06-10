import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-custom-form',
  templateUrl: './custom-form.component.html',
  styleUrls: ['./custom-form.component.css']
})
export class CustomFormComponent implements OnInit {
  loginForm: any;
  formData = [];
  @Output('data') data: EventEmitter<any> = new EventEmitter<any>();

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    })
  }

  ngOnInit(): void {
  }

  submitLoginForm() {
    const pass = this.loginForm.value.password;
    const confPass = this.loginForm.value.confirmPassword;
    if(this.loginForm.valid && pass === confPass){
      this.formData.push(this.loginForm.value);
    }

    this.data.emit(this.formData);
  }
}
