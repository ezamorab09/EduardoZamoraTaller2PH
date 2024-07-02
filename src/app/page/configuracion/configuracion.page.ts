import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,
   IonItem, IonLabel, IonToggle, IonButton,
    IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { Preferences} from '@capacitor/preferences';

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
  standalone: true,
  imports: [IonBackButton, IonButtons, IonButton,
     IonToggle, IonLabel, IonItem,
     IonContent, IonHeader, IonTitle, IonToolbar,
      CommonModule, FormsModule]
})
export class ConfiguracionPage implements OnInit {
  borrarCitas: boolean = false;

  constructor() { }

  ngOnInit() {
    this.cargarConfiguracion();
  }

  async cargarConfiguracion(){
    const { value } = await Preferences.get({key: 'borrarCitas'});
    this.borrarCitas = value === 'true';
  }

  async guardarConfiguracion() {
    await Preferences.set({ key: 'borrarCitas', value: this.borrarCitas.toString()});
  }

}
