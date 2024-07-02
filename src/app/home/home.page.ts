import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent,
   IonCard, IonCardTitle, IonCardSubtitle, IonCardHeader,
   IonCardContent, IonButton,
    IonButtons, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { settingsOutline } from 'ionicons/icons'
import { RouterModule } from '@angular/router';
import { Cita } from '../modelo/cita';
import { CitaService } from '../servicios/cita.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButtons, IonButton,
     IonCardContent, IonCardHeader,
     IonCardSubtitle, IonCardTitle, IonCard, IonHeader,
      IonToolbar, IonTitle, IonContent, RouterModule,
       CommonModule ],
})
export class HomePage implements OnInit {
  cita:Cita = { cita:"", autor:""}; // Inicializacion vacia

  constructor(
    private citaService: CitaService
  ) {
    addIcons({
      settingsOutline
    });
  }
  
  ngOnInit() {
    this.generarCitaAleatoria();

  }

  generarCitaAleatoria() {
    this.cita = this.citaService.getCitaAleatoria();
  }
}
