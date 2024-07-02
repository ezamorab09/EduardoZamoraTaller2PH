import { Component, OnInit } from '@angular/core';
import { Cita } from 'src/app/modelo/cita';
import { FormsModule } from '@angular/forms';
import { CitasFormComponent } from "../citas-form/citas-form.component";
import { CitasListComponent } from "../citas-list/citas-list.component";
import { CitaService } from 'src/app/servicios/cita.service';


@Component({
    selector: 'app-citas',
    templateUrl: './app-citas.component.html',
    styleUrls: ['./app-citas.component.scss'],
    standalone: true,
    imports: [CitasFormComponent, CitasListComponent, FormsModule]
})
export class AppCitasComponent  implements OnInit {
  citas: Cita[] = [];

  cita: Cita= { cita: '', autor: '',};

  constructor(
    private citaService:CitaService
  ){ }


  ngOnInit() {
    this._actualizar()
  }

  private _actualizar() {

  }

  onCreateCita($event: Cita) {
    
    this._actualizar()
    }


}






