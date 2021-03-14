import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl =
  'https://canalytics.comunicare.io/api/predictionHospitalizationCovidFhir';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  postRequest(formData) {
    // let's create the first two components using age and sex values from the form

    let components = [
      {
        valueQuantity: {
          value: formData.age,
        },
        code: {
          coding: [
            {
              code: 'age',
              display: 'age',
              system: 'http://comunicare.io',
            },
          ],
        },
      },

      {
        valueQuantity: {
          value: formData.sex,
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
    ];

    // add risks to the component with the correct structure looping on the form value

    formData.risks.forEach((risk) => {
      components.push({
        valueQuantity: {
          value: 1,
        },
        code: {
          coding: [
            {
              code: risk,
              display: risk,
              system: 'http://comunicare.io',
            },
          ],
        },
      });
    });

    // add symptoms to the component with the correct structure looping on the form value

    formData.symptoms.forEach((symp) => {
      components.push({
        valueQuantity: {
          value: 1,
        },
        code: {
          coding: [
            {
              code: symp,
              display: symp,
              system: 'http://comunicare.io',
            },
          ],
        },
      });
    });

    // let's complete the rest of the body with the age and sex fields

    let body = [
      {
        subject: {
          reference: '',
          display: '',
        },
        issued: '',
        component: components,
      },
    ];

    
    return this.http.post(baseUrl, JSON.stringify(body));
  }
}
