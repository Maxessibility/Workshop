import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-page1',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './page1.component.html',
  styleUrl: './page1.component.scss'
})
export class Page1Component implements OnInit {

  formulaire: FormGroup = new FormGroup({});
  

  constructor(private fb: FormBuilder) {}
  
  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formulaire = this.fb.group({
      name : [''],
      username: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get email() { return this.formulaire.get('email') }

  get username() { return this.formulaire.get('username') }

  get password() { return this.formulaire.get('password') }
}
