import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FormBuilder, Validators, FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CheckboxModule } from 'primeng/checkbox';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [MessageService],
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    PasswordModule,
    DividerModule,
    ButtonModule,
    InputTextModule,
    CheckboxModule,
    ToastModule
  ]

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
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
      ]],
      terms: [false, Validators.requiredTrue]
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
      this.markAllAsTouched();
      this.messageService.add({
        severity: 'error',
        summary: 'Form Invalid',
        detail: 'Please fill all required fields correctly'
      });
    }
  }

  private markAllAsTouched() {
    Object.values(this.signupForm.controls).forEach((control: any) => {
      control.markAsTouched();
    });
  }
}
