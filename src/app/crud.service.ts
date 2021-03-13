import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl =
  'https://canalytics.comunicare.io/api/predictionHospitalizationCovidFhir';

@Injectable({
  providedIn: 'root',
})
export class CrudService {
  constructor(private http: HttpClient) {}

  postRequest(body) {
    return this.http.post(baseUrl, body);
  }
}
