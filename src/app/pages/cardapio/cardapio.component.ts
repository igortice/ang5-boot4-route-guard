import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-cardapio',
  templateUrl: './cardapio.component.html',
  styleUrls:   [ './cardapio.component.scss' ]
})
export class CardapioComponent implements OnInit {
  items = [
    { id: 1, desc: 'this is a desc', date: '12/03/2018' },
    { id: 2, desc: 'this is a desc', date: '12/03/2018' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
