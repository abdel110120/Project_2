import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

user = {
  name: 'BFM Tv',
  age : 21,
  lieu : 'France'

}
myname: string = '';

  change(){
    this.user.name = this.myname; 
  }
}
