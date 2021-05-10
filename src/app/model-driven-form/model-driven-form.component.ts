import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.scss']
})
export class ModelDrivenFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit() {
    this.buildForm();
  }


  submitForm() {
    console.log('Entrou no submit');
    if (this.form.valid) {
      console.log('Form válido');

    } else {
      console.log('form inválido');
    }

  }


  private buildForm() {
    this.form = this.formBuilder.group({
      name: [
        null,
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20)
        ]
      ],
      email: [
        null,
        [
          Validators.required,
          Validators.email
        ]
      ]
    });
  }
  
}
