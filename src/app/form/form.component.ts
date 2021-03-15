import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CrudService } from '../crud.service';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private crud: CrudService, private fb: FormBuilder) {}

  prediction: Object;

  risks_options = [
    { display: 'Diabète', code: 'fr_diabete' },
    {
      display: 'Maladie cardiovasculaire',
      code: 'fr_maladie_cardiovasculaire',
    },
    { display: 'Asthme', code: 'fr_asthme' },
    { display: 'BPCO', code: 'fr_bpco' },
    { display: 'Néoplasie', code: 'fr_neoplasie' },
    { display: 'Obésité', code: 'fr_obese' },
  ];

  symp_options = [
    { display: 'Fièvre', code: 'symp_fievre' },
    { display: 'Difficultés respiratoires', code: 'symp_dyspnee' },
    { display: 'Douleurs musculaires', code: 'symp_myalgies' },
    { display: 'Mal de tête', code: 'symp_cephalees' },
    { display: 'Toux', code: 'symp_toux' },
    { display: 'Troubles digestifs', code: 'symp_digestifs' },
  ];

  ngOnInit() {}
// @TODO : type age and sex value
  form = this.fb.group({
    age: [, [Validators.required, Validators.min(1), Validators.max(120)]],
    sex: [, Validators.required],
    risks: [[]],
    symptoms: [[]],
  });

  onSubmit() {
    this.crud.postRequest(this.form.value).subscribe((response) => {
      this.prediction = response;
      console.log(this.prediction);
    });
  }
}
