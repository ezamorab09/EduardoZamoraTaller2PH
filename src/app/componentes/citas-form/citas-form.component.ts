import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IonItem, IonLabel, IonInput, IonButton } from "@ionic/angular/standalone";
import { FormsModule } from '@angular/forms';
import { Cita } from 'src/app/modelo/cita';

@Component({
  selector: 'app-citas-form',
  templateUrl: './citas-form.component.html',
  styleUrls: ['./citas-form.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, IonInput, IonButton, FormsModule]
})
export class CitasFormComponent  implements OnInit {
  citaStr: Cita = {
    cita: '',
    autor: '',
  };

  @Output() onCreate = new EventEmitter<Cita>();

  constructor() { }

  ngOnInit() {}

  onClick(){
    this.onCreate.emit(this.citaStr)

  }

}
