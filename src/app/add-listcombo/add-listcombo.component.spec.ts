import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddListcomboComponent } from './add-listcombo.component';

describe('AddListcomboComponent', () => {
  let component: AddListcomboComponent;
  let fixture: ComponentFixture<AddListcomboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddListcomboComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddListcomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
