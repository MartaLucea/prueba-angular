import { Component } from '@angular/core';
import { find, findIndex } from 'rxjs';

@Component({
  imports: [],
  selector: 'app-tasks',
  styleUrl: './tasks.component.css',
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  taskList = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Ver Star Trek: The Next Generation',
    summary: 'Empezar la primera temporada de The Next Generation',
    dueDate: '2026-10-06'
  },
  {
    id: 't2',
    userId: 'u2',
    title: 'Investigar la Federación Unida de Planetas',
    summary: 'Leer sobre la historia y organización de la Federación',
    dueDate: '2026-10-08'
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Ver Star Trek: First Contact',
    summary: 'Ver la película y repasar la historia de los Borg',
    dueDate: '2026-10-10'
  },
  {
    id: 't4',
    userId: 'u4',
    title: 'Crear una lista de capitanes',
    summary: 'Recopilar los principales capitanes de las series de Star Trek',
    dueDate: '2026-10-12'
  },
  {
    id: 't5',
    userId: 'u5',
    title: 'Investigar los Klingon',
    summary: 'Conocer la cultura, historia y principales personajes Klingon',
    dueDate: '2026-10-14'
  },
  {
    id: 't6',
    userId: 'u6',
    title: 'Ver episodios de Deep Space Nine',
    summary: 'Seleccionar y ver cinco episodios destacados de Deep Space Nine',
    dueDate: '2026-10-16'
  }
]
  
isSameUser(userId: string): boolean{
  selectedUser: User

  return selectedUser()===
}

}
