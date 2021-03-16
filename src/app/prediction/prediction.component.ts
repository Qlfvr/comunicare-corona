import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss'],
})
export class PredictionComponent implements OnInit {
  constructor() {}

  @Input() response: any;
  predictions: Array<any>;

  getProba(rationale: string, outcome: string) {
    // Filter predictions array to get only specific rationale and outcome in a array then access probabilityDecimal by dot notation, multiple by 100 to get percentage and round the result
    return Math.round(
      this.predictions.filter(
        (el) =>
          el.rationale === rationale && el.outcome.coding[0].code === outcome
      )[0].probabilityDecimal * 100
    );
  }

  getSummary() {
    let r = this.predictions.filter((el) => el.rationale === 'summary');
    let outcome: string = r[0].outcome.coding[0].code;
    let proba: number = Math.round(r[0].probabilityDecimal * 100);
    return [outcome, proba];
  }

  ngOnInit() {
    this.predictions = this.response.data[0].prediction;
  }
}
