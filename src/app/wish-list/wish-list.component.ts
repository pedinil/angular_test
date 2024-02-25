import { Component,Input, input } from '@angular/core';
import { ModelData } from '../../models/modeldata';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-wish-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './wish-list.component.html',
  styleUrl: './wish-list.component.css'
})
export class WishListComponent {
@Input() items : ModelData[]= [];

  toggleItem(item : ModelData){
    item.isComplete=!item.isComplete;
    console.log(item)
  }

}


