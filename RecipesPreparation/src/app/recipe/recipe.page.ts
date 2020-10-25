import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {
  tt_nglieu: boolean;
  tt_mota: boolean;
  tt_cachlam: boolean;
  indexCount: number;
  public dataReceive: object;
  constructor(private router: Router, public activatedRoute: ActivatedRoute, public navCtrl: NavController, public alertCtrl: AlertController) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.dataReceive = data;
    })
  }

  ngOnInit() {
    }
  
  
  

}
