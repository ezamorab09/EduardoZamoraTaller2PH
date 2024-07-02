import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle,
   IonToolbar, IonList, IonItem, IonLabel,
    IonButton, IonInput, IonCard, IonCardHeader,
     IonCardTitle, IonCardContent, IonButtons, IonBackButton, IonIcon } from '@ionic/angular/standalone';
import { Cita } from 'src/app/modelo/cita';
import { CitaService } from 'src/app/servicios/cita.service';
import { AlertController} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { trash } from 'ionicons/icons'
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-ver-citas',
  templateUrl: './ver-citas.page.html',
  styleUrls: ['./ver-citas.page.scss'],
  standalone: true,
  imports: [IonIcon, IonBackButton, IonButtons, IonCardContent,
     IonCardTitle, IonCardHeader, IonCard, IonContent, IonHeader,
     IonTitle, IonToolbar,
     CommonModule, FormsModule, IonList, IonItem, IonLabel,
      IonButton, IonInput, ReactiveFormsModule]


})
export class VerCitasPage implements OnInit {
  citas: Cita[] = [];
  nuevaCita: Cita = { cita: '', autor: '' };

  constructor(
    private citaService: CitaService,
    private alertController: AlertController
  ) {
    addIcons({
      trash
    });
  }


  ngOnInit() {

    this.cargarCitas();
  }


  cargarCitas(){
    this.citas = this.citaService.getCitas();
  }

  agregarCita() {
    if (this.nuevaCita.cita.trim() && this.nuevaCita.autor.trim()) {
      this.citaService.agregarCita(this.nuevaCita);
      this.cargarCitas();
      this.nuevaCita = { cita: '', autor: '' };
    } else {
      this.presentAlert('Error', 'Por favor, completa ambos campos.');
    }
  }

  async confirmarBorrarCita(index: number){
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

  async presentAlert(header: string, message: string) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: ['OK']
    });
    await alert.present();
  }
}

