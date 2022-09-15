import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TA35-Ejercicio2';

  nombre: any = '';
  email: any = '';
  mensaje: any = '';
  operacion: any = '';

  constructor() {}

  guardar(nombre:any, email:any, mensaje:any, operacion:any) {
    this.nombre = nombre;
    this.email = email;
    this.mensaje = mensaje;
    this.operacion = operacion;
  }




}
