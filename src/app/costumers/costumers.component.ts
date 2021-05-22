import { CLIENTS } from './../mock-list';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-costumers',
  templateUrl: './costumers.component.html',
  styleUrls: ['./costumers.component.scss']
})
export class CostumersComponent implements OnInit {

  clients = CLIENTS;
  selectedCard?: any;
  searchText;

  constructor() { }

  ngOnInit() {
    console.log(this.clients)
  }


  onSelect(card: any): void {
    this.selectedCard = !this.selectedCard;
    this.selectedCard = card;
    console.log(this.selectedCard)
  }

}
