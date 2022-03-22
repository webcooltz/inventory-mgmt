import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from 'src/app/add-item/item.model';
import { ItemService } from 'src/app/add-item/item.service';

@Component({
  selector: 'app-lookup-edit',
  templateUrl: './lookup-edit.component.html',
  styleUrls: ['./lookup-edit.component.css']
})
export class LookupEditComponent implements OnInit, OnDestroy {

  item!: Item;
  id!: string;
  originalItem!: Item;

  subscription!: Subscription;

  @ViewChild('f') eForm!: NgForm;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private itemService: ItemService) { }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = params['id'];
          this.item = this.itemService.getItem(this.id);
        }
      )

      this.originalItem = this.itemService.getItem(this.id);

      // this.item = JSON.parse(JSON.stringify(this.originalItem));
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    const newItem = new Item(value.name, "", value.brand, value.model, value.datePurchased, this.item.dateAdded);

    this.itemService.updateItem(this.originalItem, newItem);

    form.reset();
    this.router.navigate([''], {relativeTo: this.route});
  }

  onDelete(item: Item) {
    this.itemService.deleteItem(item);

    this.router.navigate([''], {relativeTo: this.route});
  }

  onCancel() {
    this.router.navigate([''], {relativeTo: this.route});
  }

  ngOnDestroy() {

  }

}
