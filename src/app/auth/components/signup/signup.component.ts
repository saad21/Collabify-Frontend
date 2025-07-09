import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormBuilder, Validators, FormGroup } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [
    RouterModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ToastModule,
    CommonModule
  ],
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService]
})
export class SignupComponent implements OnInit {

  signupForm: any = null;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
  ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      acceptTerms: [false, Validators.requiredTrue]
    });
  }
  onSubmit() {
    if (this.signupForm.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'Account Created',
        detail: 'Redirecting to dashboard...'
      });
      setTimeout(() => this.router.navigate(['/dashboard']), 2000);
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'Form Invalid',
        detail: 'Please fill all required fields correctly'
      });
    }
  }
}
