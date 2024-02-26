import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ModelData } from '../models/modeldata';
import { FormsModule } from '@angular/forms';
import { WishListComponent } from './wish-list/wish-list.component';
import { AddListcomboComponent } from './add-listcombo/add-listcombo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,CommonModule,FormsModule,WishListComponent,AddListcomboComponent],
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



  visibleItems : ModelData[]= this.items;
  
 

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

 
  
}
