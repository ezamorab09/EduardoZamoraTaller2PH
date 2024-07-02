import { Component, Input, OnInit } from '@angular/core';
import { IonList, IonItem, IonLabel, IonButton, IonIcon } from "@ionic/angular/standalone";
import { Cita } from 'src/app/modelo/cita';
import { CitaService } from 'src/app/servicios/cita.service';




@Component({
  selector: 'app-citas-list',
  templateUrl: './citas-list.component.html',
  styleUrls: ['./citas-list.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel, IonButton, IonIcon]
})
export class CitasListComponent  implements OnInit {
  @Input() cita: Cita[] = [];

  constructor(
    private citaService: CitaService
  ) {
    this.cita = this.citaService.getCitas();
  }

  eliminarCita(
    index: number
  ){
    this.citaService.borrarCita(index);
    this.cita = this.citaService.getCitas();
  }

  ngOnInit() {}

}
