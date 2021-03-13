import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CrudService} from '../crud.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  constructor(private crud: CrudService) {}

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
  form = new FormGroup({
    age: new FormControl(''),
    sex: new FormControl(-1),
    risks: new FormControl([]),
    symptoms: new FormControl([]),
  });

  onSubmit() {
    this.crud
      .postRequest([
        {
          subject: {
            reference: '',
            display: '',
          },
          issued: '',
          component: [
            {
              valueQuantity: {
                value: 0,
              },
              code: {
                coding: [
                  {
                    code: 'sexe',
                    display: 'sexe',
                    system: 'http://comunicare.io',
                  },
                ],
              },
            },
          ],
        },
      ])
      .subscribe((data) => {
        this.prediction = data;
        console.log(this.prediction);
      });
  }
}
