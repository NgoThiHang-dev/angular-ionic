import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-product',
  templateUrl: './product.page.html',
  styleUrls: ['./product.page.scss'],
})
export class ProductPage implements OnInit {

  ten: Array<any> = [
    { id: 0, text: 'Sentence 1' }

  ];
  nguyenlieu: Array<any> = [
    { id: 0, text: 'Sentence 1' }

  ];
  thoigian: Array<any> = [
    { id: 0, text: 'Sentence 1' }

  ];
  mucdo: Array<any> = [
    { id: 0, text: 'Sentence 1' }

  ];
  anh: Array<any> = [
    { id: 0, text: 'Sentence 1' }

  ];
  mota: Array<any> = [
    { id: 0, text: 'Sentence 1' }

  ];
  nl: Array<any> = [
    { id: 0, text: 'Sentence 1' }

  ];
  cachlam: Array<any> = [
    { id: 0, text: 'Sentence 1' }

  ];
  constructor(private router: Router, db: AngularFireDatabase) {

    //lay ten
    db.list('/ten')
      .valueChanges()
      .subscribe(t => {
        this.ten = t;
        console.log(this.ten);

      });
    //lay nguyen lieu
    db.list('/nguyenlieu')
      .valueChanges()
      .subscribe(t => {
        this.nguyenlieu = t;
        console.log(this.nguyenlieu);

      });
    //lay thoi gian
    db.list('/thoigian')
      .valueChanges()
      .subscribe(t => {
        this.thoigian = t;
        console.log(this.thoigian);

      });
    //mucdo
    db.list('/mucdo')
      .valueChanges()
      .subscribe(t => {
        this.mucdo = t;
        console.log(this.mucdo);

      });
    //lay hinh anh
    db.list('/anh')
      .valueChanges()
      .subscribe(t => {
        this.anh = t;
        console.log(this.anh);

      });

    //mo ta
    db.list('/mota')
      .valueChanges()
      .subscribe(t => {
        this.mota = t;
        console.log(this.mota);

      });
      db.list('/nguyenlieu/nước ép xoài')
      .valueChanges()
      .subscribe(t => {
        this.nl = t;
        console.log(this.nl);

      });
      db.list('/cachlam/nước ép xoài')
      .valueChanges()
      .subscribe(t => {
        this.cachlam = t;
        console.log(this.cachlam);

      });
  }

  ngOnInit() {
  }
  async recipe() {
    let obj = {name1: this.ten[9], mota:this.mota[6],
    nl0:this.nl[0],nl1:this.nl[1],nl2:this.nl[2], nl3:this.nl[3]
    ,nl4:this.nl[4], b0:this.cachlam[0], b1:this.cachlam[1], b2:this.cachlam[2], time:this.thoigian[1], mucdo:this.mucdo[1]
  };
    this.router.navigate(['recipe'], {queryParams:obj});
  }

}
