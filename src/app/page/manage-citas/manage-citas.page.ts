import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
   IonCard, IonButton, IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { Cita } from 'src/app/modelo/cita';
import { CitaService } from 'src/app/servicios/cita.service';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-manage-citas',
  templateUrl: './manage-citas.page.html',
  styleUrls: ['./manage-citas.page.scss'],
  standalone: true,
  imports: [IonLabel, IonItem, IonList, IonButton,
     IonCard, IonContent, IonHeader, IonTitle,
      IonToolbar, CommonModule, FormsModule, IonicModule]
})
export class ManageCitasPage implements OnInit {
  citas: Cita[] = [];

  constructor(
    private citaService: CitaService,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.citas = this.citaService.getCitas();
  }

  async confirmarBorrarCita(
    index: number
  ){
    const alert = await this.alertController.create({
      header: 'Confirmar',
      message: '¿Esta seguro que eliminara esta Cita',
      buttons:[
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
        },
        {
          text: 'Eliminar',
          handler: () => {
            this.borrarCita(index);
          }
        }
      ]
    });

    await alert.present();
  }

  borrarCita(
    index: number
  ) {
    this.citaService.borrarCita(index);
    this.citas = this.citaService.getCitas();
  }

}
