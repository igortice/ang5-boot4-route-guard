import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector:    'app-login',
  templateUrl: './login.component.html',
  styleUrls:   [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {
  formLogin: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router) {
    this.formLogin = this.fb.group({
      email:    [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.minLength(3), Validators.required ] ]
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formLogin);
  }
}
