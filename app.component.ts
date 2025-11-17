import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('400ms ease-out', 
          style({ opacity: 1, transform: 'translateY(0)' })
        )
      ])
    ])
  ]
})
export class AppComponent {
  
  clientForm: FormGroup;
  submittedData: any = null;

  serviceList = [
    'Web Development',
    'App Development',
    'UI/UX Designing',
    'SEO Optimization',
    'Digital Marketing'
  ];

  constructor(private fb: FormBuilder) {
    this.clientForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      contact: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
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
