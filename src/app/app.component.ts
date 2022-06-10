import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'data';
  data = 10;
  formData = [];
  updateMy(){
    this.data= Math.floor(Math.random()*10)
  }

  getUserValue(value){
    console.warn(value)

  }

  getFormData($event: any) {
    this.formData = $event;
  }
}
