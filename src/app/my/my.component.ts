import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-my',
  templateUrl: './my.component.html',
  styleUrls: ['./my.component.css']
})
export class MyComponent implements OnInit {

  constructor() { }
@Input() item = 0;
  ngOnInit(): void {
  }
   updatemy()
   {

   }
}
