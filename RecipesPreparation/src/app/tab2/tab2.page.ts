import { getLocaleDateFormat } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {


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




  }
  recipe() {

    let obj = { name1: this.ten[1], thoigian: this.thoigian[0], dokho: this.mucdo[1] };
    this.router.navigate(['recipe'], { queryParams: obj });
  }
}
