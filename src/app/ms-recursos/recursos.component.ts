import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Recurso } from '../ms-recursos/models/recursos.model';
import { RecursoService } from '../ms-recursos/services/recursos.service';

@Component({
  selector: 'app-recursos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './recursos.component.html',
  styleUrls: ['./recursos.component.css']
})
export class RecursosComponent implements OnInit {
  recursos: Recurso[] = [];
  searchText: string = '';

  constructor(private recursoService: RecursoService) {}

  ngOnInit(): void {
    this.cargarRecursos();
  }

  cargarRecursos(): void {
    this.recursoService.obtenerRecursos().subscribe(data => {
      this.recursos = data;
    });
  }

  recursosFiltrados(): Recurso[] {
    return this.recursos.filter(recurso =>
      recurso.nombre.toLowerCase().includes(this.searchText.toLowerCase()) ||
      recurso.tipo.toLowerCase().includes(this.searchText.toLowerCase()) ||
      recurso.capacidad.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  editarRecurso(recurso: Recurso) {
    console.log('Editar:', recurso);
    // Aquí puedes abrir un modal o redirigir al formulario
  }

  eliminarRecurso(recurso: Recurso) {
    console.log('Eliminar:', recurso);
    // Aquí puedes implementar confirmación y llamado al service
  }

  agregarRecurso() {
    console.log('Agregar nuevo recurso');
    // Aquí puedes abrir un modal o navegar a otro componente
  }
}
