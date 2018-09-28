import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  information: any = {
    name: 'David Fernando Zuluaga',
    age: '26',
    city: 'Santuario-Antioquia',
    nationality: 'Colombian',
    email: 'zuluaaristi@gamil.com'
  };

  constructor() { }

  ngOnInit() {
  }

}
