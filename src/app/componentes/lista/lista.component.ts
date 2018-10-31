import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  item: any = {
    name: ''
  }
  constructor(private servicio: ConexionService) {

  }

  ngOnInit() {
  }
  agregar(){
    this.servicio.addItem(this.item);
    this.item.name = '';
  }
}
