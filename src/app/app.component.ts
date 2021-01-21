import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
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
    this.formBuilder.group<Person>({
      name: '',
      age: 20,
    });
  }

  save() {
    alert(this.form.value);
  }
}
