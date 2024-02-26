import { Component,Output,EventEmitter} from '@angular/core';
import { ModelData } from '../../models/modeldata';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-add-listcombo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-listcombo.component.html',
  styleUrl: './add-listcombo.component.css'
})
export class AddListcomboComponent {

  @Output() addMainItem =new EventEmitter<ModelData>();

  newItem = '';

  addNewItem(){
    this.addMainItem.emit(new ModelData(this.newItem,false));
    this.newItem='';
  }

}
