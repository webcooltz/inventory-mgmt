import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Item } from './item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {

  id!: string;
  item!: Item;
  subscription!: Subscription;

  @ViewChild('f') iForm!: NgForm;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private itemService: ItemService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const value = form.value;

    const newItem = new Item(value.name, "", value.brand, value.model, value.datePurchased, new Date());

    this.itemService.addItem(newItem);

    console.log(newItem);

    form.reset();
    this.router.navigate([''], {relativeTo: this.route});
  }

}
