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
  items : ModelData[]= [ 
          new ModelData('learn',true),
          new ModelData('cafe',true),
          new ModelData('tea',true)
        ];

  title = 'mywhishlist';

  selectFilter :string = '0';

  newItem = '';

  visibleItems : ModelData[]= this.items;
  
  addNewItem(){
    this.items.push(new ModelData(this.newItem,false));
    this.newItem='';
  }

  filterChange(value : any)
  {
    if(value==0)
    {
      this.visibleItems=this.items;
    }else if(value==1)
    {
      this.visibleItems=this.items.filter(item => !item.isComplete);
    }else if(value==2)
    {this.visibleItems=this.items.filter(item => item.isComplete);}
     
  }

  toggleItem(item : ModelData){
    item.isComplete=!item.isComplete;
    console.log(item)
  }
  
}
