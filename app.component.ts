import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html',
  styleUrls: ['./client-form.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ]),
    trigger('slideUp', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(20px)' }),
        animate('500ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class ClientFormComponent {
  submitted = false;
  showOutput = false;

  serviceList = ['Web Development', 'App Development', 'UI/UX Design', 'SEO Service'];

  clientForm = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    contact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
    services: [[], Validators.required]
  });

  formData: any = {};

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.submitted = true;

    if (this.clientForm.invalid) {
      this.showOutput = false;
      return;
    }

    this.formData = this.clientForm.value;
    this.showOutput = true;
  }

  clearForm() {
    this.clientForm.reset();
    this.submitted = false;
    this.showOutput = false;
  }
}
      services: [[], Validators.required]
    });
  }

  onSubmit() {
    if (this.clientForm.valid) {
      this.submittedData = this.clientForm.value;
    }
  }

  onClear() {
    this.clientForm.reset();
    this.submittedData = null;
  }
}
