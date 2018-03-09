import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-cardapio-list',
  templateUrl: './cardapio-list.component.html',
  styleUrls:   [ './cardapio-list.component.scss' ]
})
export class CardapioListComponent implements OnInit {
  items = [
    { id: 1, desc: 'this is a desc', date: '12/03/2018' },
    { id: 2, desc: 'this is a desc', date: '12/03/2018' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
