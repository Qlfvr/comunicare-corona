import { Component } from '@angular/core';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  constructor(private crud: CrudService,) {}

  prediction: any;

  sendPostRequest(formData: any) {
    this.crud.postRequest(formData).subscribe((response) => {
      this.prediction = response;
      console.log(this.prediction);
    });
  }
}
