import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { TodoService } from '../../../services/todo.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsComponent {
  @Input() id!: number; // lee un parametro de la url

  constructor(private service: TodoService) { }

  /* retorna y crear una variable llamada 'todo' */
  get todo() {
    return this.service.getOne(this.id);
  }
}
