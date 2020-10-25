import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sliding',
  templateUrl: './sliding.page.html',
  styleUrls: ['./sliding.page.scss'],
})
export class SlidingPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  // async sliding() {
    
  //   this.router.navigate(['tabs']);
  // }
  sliding() {
    this.router.navigate(['tabs']);
  }
  

}
