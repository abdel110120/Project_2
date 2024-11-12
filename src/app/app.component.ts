import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [CommonModule],
  styleUrl: './app.component.css'
})
export class AppComponent {
  display = true;
user = {
  name: 'BFM Tv',
  age : 21,
  lieu : 'France'

}

students = [
  {
    name : 'NAJIHI',
    age : 24
  },
  {
    name : 'abdel',
    age : 32
  },
  {
    name : 'nada',
    age : 20
  },
]
myname: string = '';

  change(){
    this.user.name = this.myname; 
  }
}
