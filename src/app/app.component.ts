import { Component } from '@angular/core';
import {DataServiceService} from './data-service.service';
import {ITEMS} from './data-sample';
import {SearchPipe} from './search.pipe';
import {SliderPipe} from './slider.pipe';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [DataServiceService],
  pipes: [SearchPipe, SliderPipe]
})
export class AppComponent {
  range = '1920';
  itemSelected;
  query = "";
  title = 'Finding Aid';
  items = ITEMS;
  constructor(private dataService:DataServiceService) {
    this.items = this.dataService.getItems();
  }
  onSelect(item) {
   this.itemSelected = item;
  }

}
