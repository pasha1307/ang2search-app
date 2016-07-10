import { Injectable } from '@angular/core';
import {ITEMS} from './data-sample';

@Injectable()
export class DataServiceService {
  getItems() {
    return ITEMS;
  }
}
