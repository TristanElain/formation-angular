import {Component, OnInit} from '@angular/core';

import {CollectionService} from './../../../core/services/collection.service';
import {Item} from './../../../shared/models/item';

@Component({
  selector: 'app-list-items',
  templateUrl: './list-items.component.html',
  styleUrls: ['./list-items.component.css']
})
export class ListItemsComponent implements OnInit {
  private collection: Item[];

  constructor(private collectionService: CollectionService) {}

  ngOnInit() {
    this.collection = this.collectionService.collection;
  }
}
