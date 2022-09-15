import { Component, OnInit, Input } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {

  @Input() nombre: any;
  @Input() email: any;
  @Input() mensaje: any;
  @Input() operacion: any;


  constructor() { }

  ngOnInit(): void {
  }

}
