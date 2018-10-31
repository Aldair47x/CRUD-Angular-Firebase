import { Component, OnInit } from '@angular/core';
import { ConexionService } from 'src/app/services/conexion.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
  items: any;
  
  editarItem: any = {
    name: ''
  }


  constructor(private conexion: ConexionService) {
    this.conexion.ListaItem().subscribe(item => {
      this.items = item;
      console.log(this.items);
    });
  }

  ngOnInit() {
  }

  eliminar(item) {
    this.conexion.eliminarItem(item);
  }

  actualizar(item) {
    this.editarItem = item;
  }

  agregarItemEditado() {
    this.conexion.update(this.editarItem);
  }

}
