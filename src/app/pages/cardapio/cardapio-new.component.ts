import { Component, OnInit } from '@angular/core';

@Component({
  selector:    'app-cardapio-new',
  templateUrl: './cardapio-new.component.html',
  styleUrls:   [ './cardapio-new.component.scss' ]
})
export class CardapioNewComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    const $ = window['$'];
    $('#myModal').modal('show');
    console.log('oi')
  }

}
