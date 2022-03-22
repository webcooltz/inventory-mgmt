import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/add-item/item.model';
import { ItemService } from 'src/app/add-item/item.service';

@Component({
  selector: 'app-lookup-detail',
  templateUrl: './lookup-detail.component.html',
  styleUrls: ['./lookup-detail.component.css']
})
export class LookupDetailComponent implements OnInit, OnDestroy {

  items: Item[] = [];
  item!: Item;
  private itemChangeSub!: Subscription;
  index!: number;

  constructor(private itemService: ItemService) { }

  ngOnInit() {

    this.items = this.itemService.getItems();

    this.itemChangeSub = this.itemService.itemsChanged
      .subscribe(
        (items: Item[]) => {
          this.items = items;
        }
      )
  }

  ngOnDestroy() {
    this.itemChangeSub.unsubscribe();
  }

}
