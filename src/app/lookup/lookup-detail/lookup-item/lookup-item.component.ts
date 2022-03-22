import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/add-item/item.model';

@Component({
  selector: 'app-lookup-item',
  templateUrl: './lookup-item.component.html',
  styleUrls: ['./lookup-item.component.css']
})
export class LookupItemComponent implements OnInit {

  @Input() item!: Item;
  @Input() index!: number;

  constructor() { }

  ngOnInit() {
  }

}
