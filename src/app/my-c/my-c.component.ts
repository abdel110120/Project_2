import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-c',
  standalone: true,
  imports: [],
  templateUrl: './my-c.component.html',
  styleUrl: './my-c.component.css'
})
export class MyCComponent implements OnInit {
    name = 'BFM Tv'
    age = 21
    lieu = "France"
    ngOnInit(): void {
      
    }
}
