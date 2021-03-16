import { Component, Input, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-prediction',
  templateUrl: './prediction.component.html',
  styleUrls: ['./prediction.component.scss'],
})
export class PredictionComponent implements OnInit {
  constructor(public alertController: AlertController) {}

  @Input() response: any;
  predictions: Array<any>;

  // Disclaimer Alert

  async presentAlert() {
    const alert = await this.alertController.create({
      cssClass: '',
      header: 'Avertissement',
      message:
        "Ceci n'est pas un avis médical. Cet outil expériemental est basé sur l'exploitation de techniques d'intelligence artificielle sur des données réelles mais aucune caution scientifique ne peut être donnée. La prédiction obtenue ne constitue donc pas un avis médical et ne peut remplacer la décision médicale. Vous ne devez pas utiliser ces informations à la place d'une visite, d'un appel, d'une consultation ou des conseils de votre médecin ou d'un autre professionnel de la santé. Vous êtes responsable de tout conseil, traitement, diagnostic ou toute autre information, service ou produit obtenu via ce site.",
      buttons: ['OK'],
    });

    await alert.present();
  }

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
    this.presentAlert()
  }
}
