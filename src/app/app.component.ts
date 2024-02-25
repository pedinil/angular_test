import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModelData } from '../models/modeldata';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : any= [ 
          // new ModelData('learn',true),
          // new ModelData('cafe',true),
          // new ModelData('tea',true)
        ];

  title = 'mywhishlist';

  newItem = '';
  
  addNewItem(){
    this.items.push(new ModelData(this.newItem,false));
    this.newItem='';
  }

  toggleItem(item : ModelData){
    item.isComplete=!item.isComplete;
    console.log(item)
  }
  
}
