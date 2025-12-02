import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomComponent } from './random/random';
import {List} from './list/list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, List, RandomComponent ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('LAB J Oleksandr Bochkin');
}
