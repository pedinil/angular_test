import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModelData } from '../models/modeldata';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items= [ new ModelData('learn',true),
          new ModelData('cafe',true),
          new ModelData('tea',true)];

  title = 'mywhishlist';
}
