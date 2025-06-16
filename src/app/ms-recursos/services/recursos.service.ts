// src/app/services/recurso.service.ts
import { Injectable } from '@angular/core';
import { Recurso } from '../models/recursos.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecursoService {
  private recursos: Recurso[] = [
    { id: 1,nombre: 'Sala de reunion', tipo: 'Microsoft', capacidad: '(225) 555-0118', estado: 'Active' },
    { id: 2,nombre: 'Floyd Miles', tipo: 'Yahoo', capacidad: '(205) 555-0100', estado: 'Inactive' },
    { id: 3,nombre: 'Ronald Richards', tipo: 'Adobe', capacidad: '(302) 555-0107', estado: 'Inactive' },
    { id: 4,nombre: 'Marvin McKinney', tipo: 'Tesla', capacidad: '(252) 555-0126', estado: 'Active' },
    { id: 5,nombre: 'Jerome Bell', tipo: 'Google', capacidad: '(629) 555-0129', estado: 'Active' },
    { id: 6,nombre: 'Kathryn Murphy', tipo: 'Microsoft', capacidad: '(406) 555-0120', estado: 'Active' },
    { id: 7,nombre: 'Jacob Jones', tipo: 'Yahoo', capacidad: '(208) 555-0112', estado: 'Active' },
    { id: 8,nombre: 'Kristin Watson', tipo: 'Facebook', capacidad: '(704) 555-0127', estado: 'Inactive' },
  ];

  constructor() {}

  obtenerRecursos(): Observable<Recurso[]> {
    return of(this.recursos);
  }
}
