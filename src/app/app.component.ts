import { Component } from '@angular/core';
import { MobileService } from './mobile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CurdOperations';

  mobiles:any
  formHeader="Add Mobile"
  mobileName:any;
  price:any;
  RAM:any
  storage:any
  showFome=false;
  save:any=""

  constructor(private mobil:MobileService) { }  

  deleteModile(){
      
  }

  
  ngOnInit(): void {
    this.mobiles=this.mobil.mobiles
  }

  openFome(data:any=null){
    this.showFome=true
    if(data){
      this.mobileName=data.name;
      this.price=data.price;
      this.RAM=data.ram;
      this.storage=data.storage;
      this.formHeader="Edit Mobile";
    }
  }

  closeFome(){
    this.showFome=false;
    this.clearForm();
  }
  clearForm(){
    this.mobileName=null;
    this.price=null;
    this.RAM=null;
    this.storage=null;
    this.formHeader="Add Mobile"
  }
  saveModile(){
    this.mobil.addMobile(this.mobileName,this.price,this.RAM,this.storage);
    this.mobileName="";this.price=null;this.RAM=null;this.storage=null;
    this.closeFome()
    }
  addTask(){
    
  }

  deleteMobile(index: any){
    this.mobil.deleteMobile(index)
  }
    
}


