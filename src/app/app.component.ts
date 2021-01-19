import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IFormBuilder, IFormGroup } from '@rxweb/types';
import { Person } from './person.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'reactive-forms-strongly-typed';
  form: IFormGroup<Person>;
  formBuilder: IFormBuilder;

  constructor(fb: FormBuilder) {
    this.formBuilder = fb;
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group<Person>({
      name: ['', Validators.required],
      age: [null, Validators.required],
    });
  }

  save() {
    alert(this.form.value);
  }
}
