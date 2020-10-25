import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private storage: Storage) { }
  public async set(value) {
    return await this.storage.set('name', value);
  }
  public async get() {
    return await this.storage.get('name');
  }
}
