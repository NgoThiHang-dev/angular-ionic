import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  danhmuc_loai1: Array<any> = [
    { id: 0, text: 'Sentence 1' },
    { id: 1, text: 'Sentence 2' },

  ];
  danhmuc_loai2: Array<any> = [
    { id: 0, text: 'Sentence 1' },
    { id: 1, text: 'Sentence 2' },

  ];
  danhmuc_loai3: Array<any> = [
    { id: 0, text: 'Sentence 1' },
    { id: 1, text: 'Sentence 2' },

  ];
  danhmuc_loai4: Array<any> = [
    { id: 0, text: 'Sentence 1' },
    { id: 1, text: 'Sentence 2' },

  ];
  danhmuc_loai5: Array<any> = [
    { id: 0, text: 'Sentence 1' },
    { id: 1, text: 'Sentence 2' },

  ];
  ten: Array<any> = [
    { id: 0, text: 'Sentence 1' }

  ];
  nguyenlieuchinh: Array<any> = [
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
  
  constructor(private router: Router, db: AngularFireDatabase) {

    // lay do uong noi bat

    
    // lay danh muc
    db.list('/danhmuc/loai1')
      .valueChanges()
      .subscribe(t => {
        this.danhmuc_loai1 = t;
        console.log(this.danhmuc_loai1);

      });
    db.list('/danhmuc/loai2')
      .valueChanges()
      .subscribe(t => {
        this.danhmuc_loai2 = t;
        console.log(this.danhmuc_loai2);

      });
    db.list('/danhmuc/loai3')
      .valueChanges()
      .subscribe(t => {
        this.danhmuc_loai3 = t;
        console.log(this.danhmuc_loai3);

      });
    db.list('/danhmuc/loai4')
      .valueChanges()
      .subscribe(t => {
        this.danhmuc_loai4 = t;
        console.log(this.danhmuc_loai4);

      });
    db.list('/danhmuc/loai5')
      .valueChanges()
      .subscribe(t => {
        this.danhmuc_loai5 = t;
        console.log(this.danhmuc_loai5);

      });
    //lay ten
    db.list('/ten')
      .valueChanges()
      .subscribe(t => {
        this.ten = t;
        console.log(this.ten);

      });
    //lay nguyen lieu
    db.list('/nguyenlieuchinh')
      .valueChanges()
      .subscribe(t => {
        this.nguyenlieuchinh = t;
        console.log(this.nguyenlieuchinh);

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

  }

  options = {
    centeredSlides: true,
    slidesPerView: 1,
    spaceBetween: -60,
  };
  categories = {
    slidesPerView: 3.8,
  };

  categories2 = {
    slidesPerView: 2,
  };


  ngOnInit() {

  }

  recipe() {
    let obj={name1: this.ten[0]};
    this.router.navigate(['recipe'],{queryParams:obj});
  }
  juice() {
    this.router.navigateByUrl('product');
  }


}

